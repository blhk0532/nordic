<?php

declare(strict_types=1);

namespace Livewire\Exceptions;

use Exception;

final class EventHandlerDoesNotExist extends Exception
{
    public function __construct(public readonly string $eventName)
    {
        parent::__construct('Handler for event '.$eventName.' does not exist');
    }
}
