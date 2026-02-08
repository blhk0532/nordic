<?php

declare(strict_types=1);

namespace Filament\Support\Contracts;

interface HasColor
{
    /**
     * @return string | array<string> | null
     */
    public function getColor(): string|array|null;
}
