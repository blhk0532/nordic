#!/bin/bash

# Production Deployment Script for CSS/Asset Loading Fix
# This script applies the fixes for CSS not loading on production nginx server

set -e

echo "🚀 Starting Production Deployment for Asset Loading Fix..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Copy production environment file
echo -e "${YELLOW}📁 Step 1: Updating .env file with production settings${NC}"
if [ -f "env.prod" ]; then
    cp env.prod .env
    echo -e "${GREEN}✓ Production environment file copied${NC}"
else
    echo -e "${RED}✗ Error: env.prod file not found${NC}"
    exit 1
fi

# Step 2: Clear all caches
echo -e "${YELLOW}🧹 Step 2: Clearing Laravel caches${NC}"
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
php artisan optimize:clear
echo -e "${GREEN}✓ All caches cleared${NC}"

# Step 3: Rebuild assets
echo -e "${YELLOW}🔨 Step 3: Rebuilding production assets${NC}"
npm run build
echo -e "${GREEN}✓ Assets rebuilt successfully${NC}"

# Step 4: Set proper permissions
echo -e "${YELLOW}🔐 Step 4: Setting proper file permissions${NC}"
chmod -R 755 public/build
chmod 644 public/build/manifest.json
find public/build/assets -type f -exec chmod 644 {} \;
echo -e "${GREEN}✓ File permissions set correctly${NC}"

# Step 5: Nginx configuration
echo -e "${YELLOW}⚙️  Step 5: Nginx Configuration Update${NC}"
echo "Please update your nginx configuration manually:"
echo "1. Copy: sudo cp nginx-production.conf /etc/nginx/sites-available/ndsth.conf"
echo "2. Adjust SSL certificate paths in the config file"
echo "3. Adjust PHP-FPM socket path if needed (currently: php8.4-fpm.sock)"
echo "4. Enable site: sudo ln -sf /etc/nginx/sites-available/ndsth.conf /etc/nginx/sites-enabled/"
echo "5. Test config: sudo nginx -t"
echo "6. Reload nginx: sudo systemctl reload nginx"
echo ""
read -p "Have you updated nginx configuration? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}⚠ Please update nginx configuration and run this script again${NC}"
    exit 1
fi

# Step 6: Restart services
echo -e "${YELLOW}♻️  Step 6: Restarting services${NC}"
if command -v php artisan queue:restart &> /dev/null; then
    php artisan queue:restart
    echo -e "${GREEN}✓ Queue workers restarted${NC}"
fi

if command -v php artisan horizon:terminate &> /dev/null; then
    php artisan horizon:terminate
    echo -e "${GREEN}✓ Horizon terminated (will auto-restart)${NC}"
fi

# Step 7: Verify assets
echo -e "${YELLOW}🔍 Step 7: Verifying asset files${NC}"
if [ -f "public/build/manifest.json" ]; then
    echo -e "${GREEN}✓ Manifest file exists${NC}"
else
    echo -e "${RED}✗ Error: Manifest file missing${NC}"
    exit 1
fi

CSS_COUNT=$(find public/build/assets -name "*.css" | wc -l)
JS_COUNT=$(find public/build/assets -name "*.js" | wc -l)
echo -e "${GREEN}✓ Found $CSS_COUNT CSS files and $JS_COUNT JS files${NC}"

# Step 8: Test asset URL
echo -e "${YELLOW}🌐 Step 8: Testing asset URLs${NC}"
echo "Test the following URLs in your browser:"
echo "1. https://app.nordicdigitalthailand.com"
echo "2. https://app.nordicdigitalthailand.com/nds/app/login"
echo ""
echo "Check browser DevTools (F12) -> Network tab to verify CSS/JS files load with 200 status"

echo ""
echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo "Summary of changes:"
echo "  • Added ASSET_URL=https://app.nordicdigitalthailand.com to production env"
echo "  • Updated nginx configuration with static asset handling"
echo "  • Rebuilt all Vite assets"
echo "  • Set proper file permissions"
echo ""
echo "If CSS still doesn't load, check:"
echo "  1. Nginx error logs: sudo tail -f /var/log/nginx/ndsth-error.log"
echo "  2. PHP-FPM logs: sudo tail -f /var/log/php8.4-fpm.log"
echo "  3. Laravel logs: tail -f storage/logs/laravel.log"
echo "  4. Browser DevTools Network tab for failed requests"
