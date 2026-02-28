import { defineConfig } from "vite";
import { wayfinder } from "@laravel/vite-plugin-wayfinder";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.tsx",
                "resources/css/filament/adm/theme.css",
                "resources/css/filament/app/theme.css",
                "resources/css/filament/booking/theme.css",
                "resources/css/filament/data/theme.css",
                "resources/css/filament/calendar/theme.css",
                "resources/css/filament/queue/theme.css",
                "resources/css/filament/super/theme.css",
                "resources/css/filament/tools/theme.css",
                "resources/css/filament/chat/theme.css",
                "resources/css/filament/notify/theme.css",
                "resources/css/filament/files/theme.css",
                "resources/css/filament/admin/theme.css",
            ],
            refresh: true,
        }),
        react(),
        tailwindcss(),
        wayfinder({
            formVariants: true,
            command: "php -d xdebug.mode=off artisan wayfinder:generate",
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js"),
        },
    },
    esbuild: {
        jsx: "automatic",
    },
        optimizeDeps: {
            include: [
                'temporal-polyfill',
                '@fullcalendar/core',
                '@fullcalendar/react',
                '@fullcalendar/daygrid',
                '@fullcalendar/interaction',
                '@fullcalendar/list',
                '@fullcalendar/moment',
                '@fullcalendar/moment-timezone',
                '@fullcalendar/mui',
                '@fullcalendar/multimonth',
                '@fullcalendar/resource',
                '@fullcalendar/resource-daygrid',
                '@fullcalendar/resource-timegrid',
                '@fullcalendar/resource-timeline',
                '@fullcalendar/scrollgrid',
                '@fullcalendar/theme-monarch',
                '@fullcalendar/theme-pulse',
                '@fullcalendar/timegrid',
                '@fullcalendar/timeline',
            ],
        },
        build: {
            commonjsOptions: {
                include: [
                    /node_modules\/temporal-polyfill/,
                    /node_modules\/@fullcalendar/,
                    /node_modules/,
                ],
            },
        },
        ssr: {
            noExternal: [
                'temporal-polyfill',
                '@fullcalendar/core',
                '@fullcalendar/react',
                '@fullcalendar/daygrid',
                '@fullcalendar/interaction',
                '@fullcalendar/list',
                '@fullcalendar/moment',
                '@fullcalendar/moment-timezone',
                '@fullcalendar/mui',
                '@fullcalendar/multimonth',
                '@fullcalendar/resource',
                '@fullcalendar/resource-daygrid',
                '@fullcalendar/resource-timegrid',
                '@fullcalendar/resource-timeline',
                '@fullcalendar/scrollgrid',
                '@fullcalendar/theme-monarch',
                '@fullcalendar/theme-pulse',
                '@fullcalendar/timegrid',
                '@fullcalendar/timeline',
            ],
        },
        server: {
            cors: true,
            watch: {
                ignored: ["**/storage/framework/views/**"],
            },
        },
        envPrefix: ["VITE_", "APP_", "DB_"],
});
