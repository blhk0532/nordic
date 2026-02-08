<?php

declare(strict_types=1);

namespace Filament\Models\Contracts;

interface HasName
{
    public function getFilamentName(): string;
}
