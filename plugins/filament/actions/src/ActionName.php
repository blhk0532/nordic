<?php

declare(strict_types=1);

namespace Filament\Actions;

use Attribute;
use Stringable;

#[Attribute]
class ActionName implements Stringable
{
    public function __construct(private string $name) {}

    public function __toString(): string
    {
        return $this->name;
    }
}
