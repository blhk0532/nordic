<?php

declare(strict_types=1);

namespace Filament\Schemas\Components\StateCasts\Contracts;

interface StateCast
{
    public function get(mixed $state): mixed;

    public function set(mixed $state): mixed;
}
