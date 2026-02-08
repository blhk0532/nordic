<?php

declare(strict_types=1);

namespace Filament\Forms\Components\Concerns;

use Closure;
use Illuminate\Support\Str;

trait CanGenerateUuids
{
    protected Closure|bool|null $generateUuidUsing = null;

    public static function fake(): Closure
    {
        return static::configureUsing(
            fn ($component) => $component->generateUuidUsing(false),
        );
    }

    public function generateUuidUsing(Closure|bool|null $callback): static
    {
        $this->generateUuidUsing = $callback;

        return $this;
    }

    public function generateUuid(): ?string
    {
        if ($this->generateUuidUsing) {
            return $this->evaluate($this->generateUuidUsing);
        }

        if ($this->generateUuidUsing === false) {
            return null;
        }

        return (string) Str::uuid();
    }
}
