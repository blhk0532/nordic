<?php

declare(strict_types=1);

namespace Filament\Forms\Components\Contracts;

interface CanHaveNumericState
{
    public function isNumeric(): bool;
}
