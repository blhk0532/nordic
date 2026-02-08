<?php

declare(strict_types=1);

namespace Filament\Forms\Components\Contracts;

interface CanBeLengthConstrained
{
    public function getLength(): ?int;

    public function getMaxLength(): ?int;

    public function getMinLength(): ?int;

    /**
     * @return array<string>
     */
    public function getLengthValidationRules(): array;
}
