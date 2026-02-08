<?php

declare(strict_types=1);

namespace Filament\Support\Commands\FileGenerators\Concerns;

trait CanCheckFileGenerationFlags
{
    protected function hasFileGenerationFlag(string $flag): bool
    {
        return in_array($flag, config('filament.file_generation.flags') ?? []);
    }
}
