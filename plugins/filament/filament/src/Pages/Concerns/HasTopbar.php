<?php

declare(strict_types=1);

namespace Filament\Pages\Concerns;

trait HasTopbar
{
    protected bool $hasTopbar = true;

    public function hasTopbar(): bool
    {
        return $this->hasTopbar;
    }
}
