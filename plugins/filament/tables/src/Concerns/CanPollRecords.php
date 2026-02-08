<?php

declare(strict_types=1);

namespace Filament\Tables\Concerns;

/**
 * @deprecated Override the `table()` method to configure the table.
 */
trait CanPollRecords
{
    /**
     * @deprecated Override the `table()` method to configure the table.
     */
    protected function getTablePollingInterval(): ?string
    {
        return null;
    }
}
