<?php

declare(strict_types=1);

namespace Livewire\Attributes;

use Attribute;
use Livewire\Features\SupportJson\BaseJson;

#[Attribute(Attribute::TARGET_METHOD)]
final class Json extends BaseJson
{
    //
}
