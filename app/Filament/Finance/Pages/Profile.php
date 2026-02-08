<?php

declare(strict_types=1);

namespace App\Filament\Finance\Pages;

use Filament\Pages\Page;

final class Profile extends Page
{
    protected string $view = 'filament.pages.profile';

    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }
}
