<?php

declare(strict_types=1);

namespace Livewire\Exceptions;

use Exception;

final class ComponentNotFoundException extends Exception
{
    use BypassViewHandler;
}
