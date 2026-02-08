<?php

declare(strict_types=1);

namespace Filament\Pages\Concerns;

use Filament\Support\Enums\Width;

trait HasMaxWidth
{
    protected Width|string|null $maxWidth = null;

    public function getMaxWidth(): Width|string|null
    {
        return $this->maxWidth;
    }
}
