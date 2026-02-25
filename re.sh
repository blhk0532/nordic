#!/bin/bash

set -e

APP_DIR="/home/ubuntu/nordic"
PHP="/usr/bin/php8.4"

echo "======================================"
echo "Starting deployment..."
echo "======================================"

cd $APP_DIR

echo "Step 1: Enable maintenance mode..."
$PHP artisan down || true

echo "Step 2: Install Composer dependencies..."
composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

echo "Step 3: Install frontend dependencies..."
pnpm install --frozen-lockfile

echo "Step 4: Build frontend assets..."
pnpm run build

echo "Step 5: Run migrations..."
$PHP artisan migrate --force

echo "Step 6: Clear and rebuild caches..."
$PHP artisan optimize:clear
$PHP artisan config:cache
$PHP artisan route:cache
$PHP artisan view:cache
$PHP artisan event:cache

echo "Step 7: Restart Horizon (Supervisor controlled)..."
sudo supervisorctl stop horizon || true
sudo supervisorctl start horizon

echo "Step 8: Reload Octane..."
$PHP artisan octane:reload || true

echo "Step 9: Disable maintenance mode..."
$PHP artisan up

echo "======================================"
echo "Deployment complete."
echo "======================================"