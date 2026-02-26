<?php

declare(strict_types=1);

// Set PHP config from environment
if ($memoryLimit = env('PHP_MEMORY_LIMIT')) {
    ini_set('memory_limit', $memoryLimit);
}
if ($maxExecutionTime = env('PHP_MAX_EXECUTION_TIME')) {
    ini_set('max_execution_time', $maxExecutionTime);
}

use App\Http\Middleware\AllowCorsForAssets;
use App\Http\Middleware\EnsureEmailVerified;
use App\Http\Middleware\ForceJsonResponse;
use App\Http\Middleware\ForceLocalhost;
use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\LogApiRequests;
use App\Http\Middleware\UpdateUserActiveAt;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;
use Illuminate\Http\Middleware\TrustProxies as BaseTrustProxies;
use Illuminate\Http\Request;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withSchedule(function (Schedule $schedule): void {
        $schedule->command('users:update-inactive-status --minutes=5')->everyFiveMinutes();
    })
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->prepend(\Illuminate\Http\Middleware\HandleCors::class);

        $middleware->validateCsrfTokens(except: [
            'livewire/*',
        ]);

        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

        BaseTrustProxies::at('*');
        BaseTrustProxies::withHeaders(
            Request::HEADER_X_FORWARDED_FOR |
            Request::HEADER_X_FORWARDED_HOST |
            Request::HEADER_X_FORWARDED_PORT |
            Request::HEADER_X_FORWARDED_PROTO |
            Request::HEADER_X_FORWARDED_AWS_ELB
        );

        $middleware->alias([
            'force.json' => ForceJsonResponse::class,
            'log.api' => LogApiRequests::class,
            'verified' => EnsureEmailVerified::class,
        ]);

        $middleware->group('inertia', [
            HandleInertiaRequests::class,
        ]);

        $middleware->web(append: [
            ForceLocalhost::class,
            HandleAppearance::class,
            UpdateUserActiveAt::class,
            AddLinkHeadersForPreloadedAssets::class,
            AllowCorsForAssets::class,
        ]);

        $middleware->redirectGuestsTo(fn () => route('login'));
        $middleware->redirectUsersTo('/nds/app');

    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
