#!/bin/bash

# Laravel Queue Monitor Script
# Shows status of all queues and running jobs

echo "=========================================="
echo "    LARAVEL QUEUE MONITOR"
echo "=========================================="
echo ""

# Change to Laravel directory
cd /home/ubuntu/nordic || exit 1

# Get Redis prefix from Laravel config
REDIS_PREFIX=$(php artisan tinker --execute="echo config('database.redis.options.prefix');" 2>/dev/null | tr -d '\n' | grep -v "Restricted\|WARNING" || echo "nordic-digital-solutions-database-")

# Check if Horizon is running
echo "📊 HORIZON STATUS:"
echo "------------------"
php artisan horizon:list 2>/dev/null || echo "❌ Horizon not running"
echo ""

# Check supervisor status
echo "🔧 SUPERVISOR STATUS:"
echo "--------------------"
sudo supervisorctl status horizon 2>/dev/null || echo "❌ Supervisor not available"
echo ""

# Define all queues from your config
QUEUES=(
    "default"
    "export"
    "scrape"
    "hitta-counts"
    "ratsit-counts"
    "hitta-postort"
    "hitta-personer"
    "ratsit-personer"
    "merinfo-queue"
    "merinfo-count"
)

echo "📋 QUEUE LENGTHS (Pending Jobs):"
echo "---------------------------------"
echo "Using Redis prefix: $REDIS_PREFIX"
echo ""
TOTAL_PENDING=0
for queue in "${QUEUES[@]}"; do
    # Check with Redis prefix
    count=$(redis-cli LLEN "${REDIS_PREFIX}queues:$queue" 2>/dev/null || echo "0")
    if [ "$count" -gt 0 ]; then
        echo "  ⚡ $queue: $count jobs"
        TOTAL_PENDING=$((TOTAL_PENDING + count))
    else
        echo "  ✓ $queue: 0 jobs"
    fi
done
echo ""
echo "  📊 TOTAL PENDING: $TOTAL_PENDING jobs"
echo ""

# Check delayed jobs (scheduled for later)
echo "⏰ DELAYED JOBS (Scheduled):"
echo "-----------------------------"
TOTAL_DELAYED=0
for queue in "${QUEUES[@]}"; do
    delayed=$(redis-cli ZCARD "${REDIS_PREFIX}queues:$queue:delayed" 2>/dev/null || echo "0")
    if [ "$delayed" -gt 0 ]; then
        echo "  ⏳ $queue: $delayed delayed jobs"
        TOTAL_DELAYED=$((TOTAL_DELAYED + delayed))
    fi
done
if [ "$TOTAL_DELAYED" -eq 0 ]; then
    echo "  ✓ No delayed jobs"
else
    echo "  📊 TOTAL DELAYED: $TOTAL_DELAYED jobs"
fi
echo ""

# Check reserved jobs (currently processing)
echo "🔄 RESERVED JOBS (Currently Processing):"
echo "----------------------------------------"
TOTAL_RESERVED=0
for queue in "${QUEUES[@]}"; do
    reserved=$(redis-cli ZCARD "${REDIS_PREFIX}queues:$queue:reserved" 2>/dev/null || echo "0")
    if [ "$reserved" -gt 0 ]; then
        echo "  🏃 $queue: $reserved jobs"
        TOTAL_RESERVED=$((TOTAL_RESERVED + reserved))
    fi
done
if [ "$TOTAL_RESERVED" -eq 0 ]; then
    echo "  ✓ No jobs currently processing"
else
    echo "  📊 TOTAL PROCESSING: $TOTAL_RESERVED jobs"
fi
echo ""

# Check failed jobs
echo "❌ FAILED JOBS:"
echo "---------------"
FAILED_COUNT=$(redis-cli LLEN "${REDIS_PREFIX}failed" 2>/dev/null || echo "0")
if [ "$FAILED_COUNT" -gt 0 ]; then
    echo "  ⚠️  Total failed jobs: $FAILED_COUNT"
    echo ""
    echo "  Recent failed jobs:"
    php artisan queue:failed 2>/dev/null | head -20 || echo "  (Unable to fetch failed jobs)"
else
    echo "  ✓ No failed jobs"
fi
echo ""

# Check batch jobs
echo "📦 BATCH JOBS:"
echo "---------------"
BATCH_INFO=$(php artisan tinker --execute="\$batches = DB::table('job_batches')->where('pending_jobs', '>', 0)->get(); echo 'PENDING BATCHES: ' . count(\$batches) . PHP_EOL; foreach(\$batches as \$b) { echo sprintf('  %s | %d/%d jobs pending%s', substr(\$b->id, 0, 8), \$b->pending_jobs, \$b->total_jobs, PHP_EOL); }" 2>/dev/null | grep -v "Restricted\|WARNING")
if [ -n "$BATCH_INFO" ]; then
    echo "$BATCH_INFO"
else
    echo "  ✓ No pending batches"
fi
echo ""

# Check running workers
echo "👷 RUNNING WORKERS:"
echo "-------------------"
WORKER_COUNT=$(ps aux | grep "artisan horizon:work" | grep -v grep | wc -l)
if [ "$WORKER_COUNT" -gt 0 ]; then
    ps aux | grep "artisan horizon:work" | grep -v grep | awk '{print "  PID: "$2, "| Queue: "$(NF-11), "| Memory: "$4"%"}'
    echo ""
    echo "  📊 Total workers: $WORKER_COUNT"
else
    echo "  ❌ No workers running"
fi
echo ""

# Show recent Horizon log entries
echo "📝 RECENT HORIZON LOG (last 5 lines):"
echo "--------------------------------------"
tail -n 5 /home/ubuntu/nordic/storage/logs/horizon.log 2>/dev/null || echo "  (No log file found)"
echo ""

echo "=========================================="
echo "    MONITOR COMPLETE"
echo "=========================================="
