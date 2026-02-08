<?php

declare(strict_types=1);

namespace Filament\Forms\Components\Contracts;

use Closure;

interface CanDisableOptions
{
    public function disableOptionWhen(bool|Closure $callback): static;
}
