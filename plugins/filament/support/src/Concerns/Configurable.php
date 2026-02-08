<?php

declare(strict_types=1);

namespace Filament\Support\Concerns;

use Closure;
use Filament\Support\Components\ComponentManager;

trait Configurable
{
    protected function setUp(): void {}

    public static function configureUsing(Closure $modifyUsing, ?Closure $during = null, bool $isImportant = false): mixed
    {
        return ComponentManager::resolve()->configureUsing(
            static::class,
            $modifyUsing,
            $during,
            $isImportant,
        );
    }

    public function configure(): static
    {
        ComponentManager::resolve()->configure(
            $this,
            $this->setUp(...),
        );

        return $this;
    }
}
