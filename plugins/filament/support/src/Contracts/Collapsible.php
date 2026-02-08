<?php

declare(strict_types=1);

namespace Filament\Support\Contracts;

interface Collapsible
{
    public function isCollapsible(): bool;

    public function isCollapsed(): bool;
}
