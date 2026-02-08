<?php

declare(strict_types=1);

namespace Filament\Enums;

enum DatabaseNotificationsPosition: string
{
    case Topbar = 'topbar';

    case Sidebar = 'sidebar';
}
