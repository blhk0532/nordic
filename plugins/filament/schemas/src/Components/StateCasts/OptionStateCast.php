<?php

declare(strict_types=1);

namespace Filament\Schemas\Components\StateCasts;

use BackedEnum;
use Filament\Schemas\Components\StateCasts\Contracts\StateCast;

class OptionStateCast implements StateCast
{
    public function __construct(
        private bool $isNullable = true,
    ) {}

    public function get(mixed $state): string|int|null
    {
        if ($this->isNullable && blank($state)) {
            return null;
        }

        if ($state instanceof BackedEnum) {
            $state = $state->value;
        }

        if (
            is_int($state)
            || (
                is_string($state)
                && ctype_digit($state)
                && (($state === '0') || (! str($state)->startsWith('0')))
            )
        ) {
            $max = (string) PHP_INT_MAX;

            if (
                (mb_strlen($state) > mb_strlen($max)) ||
                ((mb_strlen($state) === mb_strlen($max)) && (strcmp($state, $max) > 0))
            ) {
                return (string) $state;
            }

            return (int) $state;
        }

        return (string) $state;
    }

    public function set(mixed $state): ?string
    {
        if ($this->isNullable && blank($state)) {
            return null;
        }

        if ($state instanceof BackedEnum) {
            $state = $state->value;
        }

        return (string) $state;
    }
}
