<?php

declare(strict_types=1);

namespace Filament\Support\Enums;

enum Operation: string
{
    case Create = 'create';

    case Edit = 'edit';

    case View = 'view';
}
