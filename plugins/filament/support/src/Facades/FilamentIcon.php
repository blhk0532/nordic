<?php

declare(strict_types=1);

namespace Filament\Support\Facades;

use BackedEnum;
use Filament\Support\Icons\IconManager;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Facades\Facade;

/**
 * @method static string | null resolve(string $name)
 *
 * @see IconManager
 */
class FilamentIcon extends Facade
{
    /**
     * @param  array<string, string | BackedEnum | Htmlable>  $icons
     */
    public static function register(array $icons): void
    {
        self::resolved(function (IconManager $iconManager) use ($icons): void {
            $iconManager->register($icons);
        });
    }

    protected static function getFacadeAccessor(): string
    {
        return IconManager::class;
    }
}
