<?php

declare(strict_types=1);

namespace Filament\Enums;

enum ThemeMode: string
{
    case System = 'system';

    case Light = 'light';

    case Dark = 'dark';
}
