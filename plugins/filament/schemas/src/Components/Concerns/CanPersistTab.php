<?php

declare(strict_types=1);

namespace Filament\Schemas\Components\Concerns;

use Closure;

trait CanPersistTab
{
    public bool|Closure $isTabPersisted = false;

    public function persistTab(bool|Closure $condition = true): static
    {
        $this->isTabPersisted = $condition;

        return $this;
    }

    public function isTabPersisted(): bool
    {
        return (bool) $this->evaluate($this->isTabPersisted);
    }
}
