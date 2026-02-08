<?php

declare(strict_types=1);

namespace Filament\Forms\Components\Contracts;

interface HasNestedRecursiveValidationRules
{
    /**
     * @return array<mixed>
     */
    public function getNestedRecursiveValidationRules(): array;
}
