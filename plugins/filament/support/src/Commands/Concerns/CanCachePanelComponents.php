<?php

declare(strict_types=1);

namespace Filament\Support\Commands\Concerns;

use Filament\Commands\CacheComponentsCommand;

trait CanCachePanelComponents
{
    protected function canCachePanelComponents(): bool
    {
        return class_exists(CacheComponentsCommand::class);
    }
}
