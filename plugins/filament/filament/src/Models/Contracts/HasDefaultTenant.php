<?php

declare(strict_types=1);

namespace Filament\Models\Contracts;

use Filament\Panel;
use Illuminate\Database\Eloquent\Model;

interface HasDefaultTenant
{
    public function getDefaultTenant(Panel $panel): ?Model;
}
