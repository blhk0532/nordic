<?php

declare(strict_types=1);

namespace App\Filament\App\Pages;

use BackedEnum;
use Filament\Pages\Page;
use Filament\Support\Enums\Width;
use UnitEnum;

class GoogleCalendar extends Page
{
    protected string $view = 'filament.app.pages.google-calendar';

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-calendar-days';

    protected static ?string $navigationLabel = 'Google';

    protected static ?string $title = '';

    protected static ?int $navigationSort = 95;

    protected static ?string $slug = 'google-calendar';

    protected static string|UnitEnum|null $navigationGroup = '';

    public function getMaxContentWidth(): Width
    {
        return Width::Full;
    }

    public static function shouldRegisterNavigation(): bool
    {
        $teneant = filament()->getTenant();

        if (filament()->getTenant()->getAttribute('is_admin') !== true) {
            return false;
        }

        if (auth()->user()->role === 'admin' || auth()->user()->role === 'super' || auth()->user()->role === 'manager') {
            return true;
        }

        return false;
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'success';
    }

    public static function getNavigationBadge(): ?string
    {
        return 'OKsync';
    }
}
