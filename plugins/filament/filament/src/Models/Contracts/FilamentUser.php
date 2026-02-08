<?php

declare(strict_types=1);

namespace Filament\Models\Contracts;

use Filament\Panel;

interface FilamentUser
{
    public function canAccessPanel(Panel $panel): bool;
}
