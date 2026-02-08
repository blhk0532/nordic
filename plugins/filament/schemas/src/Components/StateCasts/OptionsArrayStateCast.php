<?php

declare(strict_types=1);

namespace Filament\Schemas\Components\StateCasts;

use BackedEnum;
use Filament\Schemas\Components\StateCasts\Contracts\StateCast;
use Illuminate\Support\Arr;

class OptionsArrayStateCast implements StateCast
{
    /**
     * @return array<string | int>
     */
    public function get(mixed $state): array
    {
        if (blank($state)) {
            return [];
        }

        if (! is_array($state)) {
            $state = json_decode($state, associative: true);
        }

        return array_reduce(
            Arr::wrap($state),
            function (array $carry, $stateItem): array {
                if (blank($stateItem)) {
                    return $carry;
                }

                if ($stateItem instanceof BackedEnum) {
                    $stateItem = $stateItem->value;
                }

                if (
                    is_int($stateItem)
                    || (
                        is_string($stateItem)
                        && ctype_digit($stateItem)
                        && (($stateItem === '0') || (! str($stateItem)->startsWith('0')))
                    )
                ) {
                    $max = (string) PHP_INT_MAX;

                    if (
                        (mb_strlen($stateItem) > mb_strlen($max)) ||
                        ((mb_strlen($stateItem) === mb_strlen($max)) && (strcmp($stateItem, $max) > 0))
                    ) {
                        $carry[] = (string) $stateItem;
                    } else {
                        $carry[] = (int) $stateItem;
                    }
                } else {
                    $carry[] = (string) $stateItem;
                }

                return $carry;
            },
            initial: [],
        );
    }

    /**
     * @return array<string>
     */
    public function set(mixed $state): array
    {
        if (blank($state)) {
            return [];
        }

        if (! is_array($state)) {
            $state = json_decode($state, associative: true);
        }

        return array_reduce(
            Arr::wrap($state),
            function (array $carry, $stateItem): array {
                if (blank($stateItem)) {
                    return $carry;
                }

                if ($stateItem instanceof BackedEnum) {
                    $stateItem = $stateItem->value;
                }

                $carry[] = (string) $stateItem;

                return $carry;
            },
            initial: [],
        );
    }
}
