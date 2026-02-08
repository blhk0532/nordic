<?php

declare(strict_types=1);

namespace Filament\Forms\Components;

/**
 * @deprecated Use `Select` with the `multiple()` method instead.
 */
class MultiSelect extends Select
{
    public function isMultiple(): bool
    {
        return true;
    }
}
