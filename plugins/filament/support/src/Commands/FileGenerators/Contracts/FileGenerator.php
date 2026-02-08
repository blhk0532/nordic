<?php

declare(strict_types=1);

namespace Filament\Support\Commands\FileGenerators\Contracts;

interface FileGenerator
{
    public function generate(): string;
}
