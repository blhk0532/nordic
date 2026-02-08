<?php

declare(strict_types=1);

namespace Filament\Models\Contracts;

interface HasCurrentTenantLabel
{
    public function getCurrentTenantLabel(): string;
}
