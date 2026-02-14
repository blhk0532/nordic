<?php

declare(strict_types=1);

namespace App\Filament\App\Pages;

use BackedEnum;
use Filament\Pages\Page;
use Filament\Support\Enums\Width;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use UnitEnum;
use Wallacemartinss\FilamentIconPicker\Enums\Remix;

class InertiaCalendar extends Page
{
    protected string $view = 'filament.booking.pages.inertia-calendar';
    //  protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCalendarDateRange;
    // protected static string|BackedEnum|null $navigationIcon = 'heroicon-c-clipboard-document-check';

    protected static ?string $navigationLabel = 'Schema';

    // protected static ?string $title = '';

    protected static ?int $navigationSort = 10;

    protected static ?int $sort = 10;

    protected static ?string $slug = 'bokning-kalender';

    //      protected static string|BackedEnum|null $navigationIcon = Remix::RiCalendarScheduleLine;
    //  protected static string|BackedEnum|null $activeNavigationIcon = Remix::RiCalendarScheduleFill;

    //  protected static string|BackedEnum|null $navigationIcon = Remix::RiCalendarTodoLine;
    //  protected static string|BackedEnum|null $activeNavigationIcon = Remix::RiCalendarTodoFill;

    protected static string|BackedEnum|null $navigationIcon = Remix::RiCalendarScheduleLine;

    protected static string|BackedEnum|null $activeNavigationIcon = Remix::RiCalendarScheduleFill;

    //  protected static string | UnitEnum | null $navigationGroup = 'Kalendrar';
    protected static string|UnitEnum|null $navigationGroup = '';

    //    public static function getNavigationBadge(): ?string
    //    {
    //        $role = Str::upper(Auth::user()->role);
    //        return 'Öppen';
    //    }

    protected Width|string|null $maxContentWidth = 'full';
}
