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
use Carbon\Carbon;

class InertiaCalendar extends Page
{
    protected string $view = 'filament.booking.pages.inertia-calendar';
    //  protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCalendarDateRange;
    // protected static string|BackedEnum|null $navigationIcon = 'heroicon-c-clipboard-document-check';

    protected static ?string $navigationLabel = 'Scheman';

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

        public static function getNavigationBadge(): ?string
        {
            $role = Str::upper(Auth::user()->role);
                       Carbon::setLocale('sv');
           return now()
               ->timezone('Europe/Stockholm')
               ->translatedFormat('l');
        }

    protected Width|string|null $maxContentWidth = 'full';


    public static function getNavigationBadgeColor(): ?string
    {
        return 'gray';
    }

 //  public static function shouldRegisterNavigation(): bool
 //  {
 //            $teneant = filament()->getTenant();
 //      if (filament()->getTenant()->getAttribute('is_admin') !== true) {
 //          return false;
 //      }
 //      if (auth()->user()->role === 'admin' || auth()->user()->role === 'super' || auth()->user()->role === 'manager') {
 //          return true;
 //      }
 //      return false;
 //  }


}
