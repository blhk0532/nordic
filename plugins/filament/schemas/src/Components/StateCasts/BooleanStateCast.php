<?php

declare(strict_types=1);

namespace Filament\Schemas\Components\StateCasts;

use Filament\Schemas\Components\StateCasts\Contracts\StateCast;

class BooleanStateCast implements StateCast
{
    public function __construct(
        private bool $isNullable = true,
        private bool $isStoredAsInt = false,
    ) {}

    public function get(mixed $state): ?bool
    {
        if ($this->isNullable && blank($state)) {
            return null;
        }

        return (bool) $state;
    }

    public function set(mixed $state): bool|int|null
    {
        if ($this->isNullable && blank($state)) {
            return null;
        }

        if ($this->isStoredAsInt) {
            return $state ? 1 : 0;
        }

        return (bool) $state;
    }
}
