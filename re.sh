#!/bin/bash

# re.sh - Run after git pull to clear all caches and rebuild application

echo "======================================"
echo "Starting full application rebuild..."
echo "======================================"

echo ""
echo "Step 1: Clearing all caches..."
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan event:clear
php artisan optimize:clear

echo ""
echo "Step 2: Installing Composer dependencies..."
composer install --no-interaction --prefer-dist --optimize-autoloader

echo ""
echo "Step 3: Installing NPM dependencies..."
# Remove package-lock.json to ensure fresh install with updated dependencies
if [ -f "package-lock.json" ]; then
    rm package-lock.json
fi
pnpm up

echo ""
echo "Step 4: Building frontend assets..."
pnpm run build

echo ""
echo "Step 5: Running database migrations..."
php artisan migrate --force

echo ""
echo "Step 6: Restarting application servers..."

# Check and restart FrankenPHP
if pgrep -x "frankenphp" > /dev/null; then
    echo "  -> Restarting FrankenPHP..."
    php artisan octane:reload || true
fi

# Check and restart Laravel Octane (FrankenPHP/Swoole/RoadRunner)
if [ -f "config/octane.php" ]; then
    echo "  -> Restarting Laravel Octane..."
    php artisan octane:reload || true
fi

# Check and restart Nginx
if pgrep -x "nginx" > /dev/null; then
    echo "  -> Restarting Nginx..."
    sudo systemctl restart nginx || sudo service nginx restart || nginx -s reload || true
fi

# Check and restart Apache
if pgrep -x "apache2" > /dev/null || pgrep -x "httpd" > /dev/null; then
    echo "  -> Restarting Apache..."
    sudo systemctl restart apache2 || sudo service apache2 restart || sudo systemctl restart httpd || sudo service httpd restart || true
fi

# Check and restart PHP-FPM
if pgrep -x "php-fpm" > /dev/null || pgrep -x "php8.4-fpm" > /dev/null; then
    echo "  -> Restarting PHP-FPM..."
    sudo systemctl restart php8.4-fpm || sudo service php8.4-fpm restart || sudo systemctl restart php-fpm || sudo service php-fpm restart || true
fi

# Check and restart Supervisor queues
if pgrep -x "supervisord" > /dev/null; then
    echo "  -> Restarting Supervisor queue workers..."
    sudo supervisorctl restart all || true
fi

echo ""
echo "Step 7: Rebuilding application caches..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

echo ""
echo "Step 8: Optimizing Filament..."
php artisan filament:optimize

echo ""
echo "Step 9: Final optimization..."
php artisan optimize

echo ""
echo "======================================"
echo "Rebuild complete! Application is ready."
echo "======================================"
