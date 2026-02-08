<?php

declare(strict_types=1);

namespace Filament\Tables\Columns;

/**
 * @deprecated Use `IconColumn` with the `boolean()` method instead.
 */
class BooleanColumn extends IconColumn
{
    public function isBoolean(): bool
    {
        return true;
    }
}
