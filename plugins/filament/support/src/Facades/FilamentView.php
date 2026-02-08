<?php

declare(strict_types=1);

namespace Filament\Support\Facades;

use Closure;
use Filament\Support\View\ViewManager;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Facades\Facade;

/**
 * @method static bool hasSpaMode(?string $url = null)
 * @method static bool hasSpaPrefetching()
 * @method static bool hasRenderHook(string $name, string | array<string> | null $scopes = null)
 * @method static Htmlable renderHook(string $name, string | array<string> | null $scopes = null, array<string, mixed> $data = [])
 *
 * @see ViewManager
 */
class FilamentView extends Facade
{
    /**
     * @param  string | array<string> | null  $scopes
     */
    public static function registerRenderHook(string $name, Closure $hook, string|array|null $scopes = null): void
    {
        self::resolved(function (ViewManager $viewManager) use ($name, $hook, $scopes): void {
            $viewManager->registerRenderHook($name, $hook, $scopes);
        });
    }

    public static function spa(bool $condition = true, bool $hasPrefetching = false): void
    {
        self::resolved(function (ViewManager $viewManager) use ($condition, $hasPrefetching): void {
            $viewManager->spa($condition, $hasPrefetching);
        });
    }

    /**
     * @param  array<string>  $exceptions
     */
    public static function spaUrlExceptions(array $exceptions): void
    {
        self::resolved(function (ViewManager $viewManager) use ($exceptions): void {
            $viewManager->spaUrlExceptions($exceptions);
        });
    }

    protected static function getFacadeAccessor(): string
    {
        return ViewManager::class;
    }
}
