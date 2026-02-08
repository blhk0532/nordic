<?php

declare(strict_types=1);

namespace Filament\Schemas\Components\StateCasts;

use Filament\Schemas\Components\StateCasts\Contracts\StateCast;

class SliderStateCast implements StateCast
{
    public function __construct(
        private ?int $decimalPlaces = null,
    ) {}

    /**
     * @return float | array<float>
     */
    public function get(mixed $state): float|array
    {
        if (is_array($state)) {
            $state = array_map(floatval(...), $state);

            if (filled($this->decimalPlaces)) {
                $state = array_map(fn (float $value): float => round($value, $this->decimalPlaces), $state);
            }

            return $state;
        }

        $state = (float) $state;

        if (filled($this->decimalPlaces)) {
            $state = round($state, $this->decimalPlaces);
        }

        return $state;
    }

    /**
     * @return float | array<float>
     */
    public function set(mixed $state): float|array
    {
        return $this->get($state);
    }
}
