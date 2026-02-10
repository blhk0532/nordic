# CSS/Asset Loading Fix - Production Deployment Guide

## Problem
CSS and JavaScript files were not loading on the production nginx server, causing broken styling and functionality.

## Root Causes

### 1. ❌ Missing ASSET_URL in Production
**Issue**: Laravel didn't know the full URL to use for assets in production
**Fix**: Added `ASSET_URL=https://app.ndsth.com` to `env.prod`

### 2. ❌ Inadequate Nginx Static File Handling
**Issue**: Nginx configuration lacked explicit rules for serving static assets (CSS, JS, fonts, images)
**Fix**: Added dedicated location blocks with proper caching and MIME type handling

## Files Changed

### 1. [env.prod](env.prod)
```diff
APP_NAME="Nordic Digital Solutions"
APP_ENV=production
APP_KEY=base64:vTcdKX7Xyc6oC1CutaAQKdW8aYwWMtDSBTfbba7oPMU=
APP_URL=https://app.ndsth.com
+ASSET_URL=https://app.ndsth.com
```

### 2. [docker/nginx/default.conf](docker/nginx/default.conf)
Added:
- Static asset location block with aggressive caching
- Dedicated `/build/` location for Vite assets
- Proper Cache-Control headers

### 3. [nginx-production.conf](nginx-production.conf) (NEW)
Complete production-ready nginx configuration with:
- HTTPS/SSL configuration
- Security headers
- Optimized static asset serving
- Gzip compression
- PHP-FPM integration

## Deployment Steps

### Quick Deploy (Automated)
```bash
./deploy-asset-fix.sh
```

### Manual Deployment

#### Step 1: Update Environment
```bash
cp env.prod .env
```

#### Step 2: Clear Caches
```bash
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
php artisan optimize:clear
```

#### Step 3: Rebuild Assets
```bash
npm run build
```

#### Step 4: Update Nginx Configuration
```bash
# Copy the production nginx config
sudo cp nginx-production.conf /etc/nginx/sites-available/ndsth.conf

# Edit the file to update:
# - SSL certificate paths
# - PHP-FPM socket path (if different from php8.4-fpm)
sudo nano /etc/nginx/sites-available/ndsth.conf

# Enable the site
sudo ln -sf /etc/nginx/sites-available/ndsth.conf /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

#### Step 5: Set Permissions
```bash
chmod -R 755 public/build
chmod 644 public/build/manifest.json
find public/build/assets -type f -exec chmod 644 {} \;
```

#### Step 6: Restart Services
```bash
# If using queue workers
php artisan queue:restart

# If using Horizon
php artisan horizon:terminate
```

## Verification

### 1. Check Asset Files Exist
```bash
ls -la public/build/assets/*.css | head -5
ls -la public/build/manifest.json
```

### 2. Test in Browser
1. Open: https://app.ndsth.com
2. Open DevTools (F12) → Network tab
3. Look for CSS/JS files loading with `200 OK` status
4. Check the Response Headers for `Cache-Control: public, immutable`

### 3. Test Specific Asset URL
```bash
curl -I https://app.ndsth.com/build/assets/app-DP7oCHTJ.css
```
Should return `200 OK` with proper Content-Type headers.

## Troubleshooting

### CSS Still Not Loading?

#### 1. Check Nginx Error Logs
```bash
sudo tail -f /var/log/nginx/ndsth-error.log
```

Look for:
- 404 errors on CSS/JS files
- Permission denied errors
- Upstream connection errors

#### 2. Check PHP-FPM Logs
```bash
sudo tail -f /var/log/php8.4-fpm.log
```

#### 3. Check Laravel Logs
```bash
tail -f storage/logs/laravel.log
```

#### 4. Verify PHP-FPM Socket
```bash
# Check if PHP-FPM is running
sudo systemctl status php8.4-fpm

# Find the correct socket path
sudo find /var/run/php -name "*.sock"
```

Update nginx config if socket path is different:
```nginx
fastcgi_pass unix:/var/run/php/php8.4-fpm.sock;  # Adjust version
```

#### 5. Check File Permissions
```bash
# Ensure www-data (or nginx user) can read files
ls -la public/build/assets/

# Should show: -rw-r--r-- or -rw-rw-r--
```

#### 6. Verify DNS and SSL
```bash
# Test DNS resolution
nslookup app.ndsth.com

# Test SSL certificate
curl -vI https://app.ndsth.com
```

#### 7. Check Browser Console
Open browser DevTools (F12) → Console tab
Look for:
- Mixed content warnings (HTTP assets on HTTPS page)
- CORS errors
- 404 errors on specific assets

## Key Configuration Details

### Nginx Static Asset Caching
```nginx
location ~* \.(css|js|map|ico|png|jpg|jpeg|gif|svg|woff2?|ttf|eot|otf|webp)$ {
    expires 1y;
    access_log off;
    add_header Cache-Control "public, immutable";
    try_files $uri =404;
}
```

### Vite Build Directory
```nginx
location /build/ {
    alias /home/baba/apps/ndsth/app/public/build/;
    expires 1y;
    add_header Cache-Control "public, immutable";
    try_files $uri =404;
}
```

### Laravel Asset URLs
Laravel generates asset URLs using:
1. `ASSET_URL` environment variable (if set)
2. Falls back to `APP_URL`
3. Vite manifest resolves asset paths from `public/build/manifest.json`

## Additional Notes

### Session Cookie Fix (Also Applied)
The `SESSION_SECURE_COOKIE` was also set to `true` in `env.prod` to fix login/signup issues on HTTPS.

### Cache Busting
Vite automatically adds content hashes to asset filenames (e.g., `app-DP7oCHTJ.css`), which provides automatic cache busting when assets change.

### Production vs Development
- **Development**: `npm run dev` (Vite dev server on port 5173)
- **Production**: `npm run build` (compiled assets in `public/build/`)

Make sure you're using the built assets in production, not the dev server.

## Success Indicators

✅ Browser Network tab shows CSS files with `200 OK`
✅ Response headers show `Cache-Control: public, immutable`
✅ No 404 errors in nginx error log
✅ Page renders with proper styling
✅ Console shows no asset loading errors

## Need More Help?

If issues persist after following this guide:
1. Check all log files mentioned in troubleshooting section
2. Verify nginx and PHP-FPM are both running
3. Test asset URLs directly with curl
4. Check browser DevTools Network tab for specific error messages
