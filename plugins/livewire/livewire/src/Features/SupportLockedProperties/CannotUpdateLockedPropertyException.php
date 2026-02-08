<?php

declare(strict_types=1);

namespace Livewire\Features\SupportLockedProperties;

use Exception;

final class CannotUpdateLockedPropertyException extends Exception
{
    public function __construct(public $property)
    {
        parent::__construct(
            'Cannot update locked property: ['.$this->property.']'
        );
    }
}
