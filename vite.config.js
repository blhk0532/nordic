import {
    defineConfig
} from 'vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/css/filament/admin/theme.css',
                'resources/css/filament/app/theme.css',
                'resources/css/filament/booking/theme.css',
                'resources/css/filament/data/theme.css',
                'resources/css/filament/dialer/theme.css',
                'resources/css/filament/finance/theme.css',
                'resources/css/filament/manager/theme.css',
                'resources/css/filament/queue/theme.css',
                'resources/css/filament/super/theme.css',
                'resources/css/filament/tools/theme.css',
                'resources/css/filament/storage/theme.css',
                'resources/css/filament/chat/theme.css',
                'resources/css/filament/notify/theme.css',
                'resources/css/filament/files/theme.css',
                'resources/css/filament/script/theme.css',
                'resources/css/filament/plugins/theme.css',
            ],
            refresh: true,
        }),
        react(),
        tailwindcss(),
        wayfinder({
            formVariants: true,
            command: 'php -d xdebug.mode=off artisan wayfinder:generate',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
    esbuild: {
        jsx: 'automatic',
    },
    server: {
        cors: true,
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
