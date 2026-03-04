#!/bin/bash

set -e

APP_DIR="/home/ubuntu/nordic"
PHP="/usr/bin/php8.4"

echo "======================================"
echo "Starting deployment..."
echo "======================================"

cd $APP_DIR

echo "Step 1: Pull latest code..."
git fetch origin
git reset --hard origin/main

$PHP artisan octane:status  || true
sudo $PHP supervisorctl status  || true

echo "Step 2: Enable maintenance mode..."
$PHP artisan down || true

echo "Step 3: Install Composer dependencies..."
composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

echo "Step 4: Install frontend dependencies..."
pnpm install --frozen-lockfile

echo "Step 5: Build frontend assets..."
pnpm run build

echo "Step 6: Run migrations..."
$PHP artisan migrate --force

echo "Step 7: Clear and rebuild caches..."
$PHP artisan optimize:clear
$PHP artisan config:cache
$PHP artisan route:cache
$PHP artisan view:cache
$PHP artisan event:cache
$PHP artisan filament:optimize-clear

$PHP artisan optimize
$PHP artisan filament:optimize

echo "Step 8: Restart Horizon (graceful)..."
$PHP artisan horizon:terminate

echo "Step 9: Reload Octane..."
$PHP artisan octane:status
$PHP artisan octane:reload --no-interaction
sudo $PHP supervisorctl status
sudo $PHP supervisorctl restart all

echo "Step 10: Disable maintenance mode..."
$PHP artisan up
echo "======================================"
echo "Deployment complete. GG"
echo "======================================"
