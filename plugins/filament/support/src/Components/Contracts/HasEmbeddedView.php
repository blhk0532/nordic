<?php

declare(strict_types=1);

namespace Filament\Support\Components\Contracts;

interface HasEmbeddedView
{
    public function toEmbeddedHtml(): string;
}
