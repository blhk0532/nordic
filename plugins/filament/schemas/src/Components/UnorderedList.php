<?php

declare(strict_types=1);

namespace Filament\Schemas\Components;

use Closure;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Support\Enums\TextSize;
use Illuminate\Contracts\Support\Htmlable;

class UnorderedList extends Component
{
    protected string $view = 'filament-schemas::components.unordered-list';

    protected TextSize|string|Closure|null $size = null;

    /**
     * @param  array<Component | Action | ActionGroup | string | Htmlable> | Closure  $schema
     */
    public function __construct(array|Closure $schema = [])
    {
        $this->schema($schema);
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->columns(['sm' => 2]);
    }

    /**
     * @param  array<Component | Action | ActionGroup | string | Htmlable> | Closure  $schema
     */
    public static function make(array|Closure $schema = []): static
    {
        $static = app(self::class, ['schema' => $schema]);
        $static->configure();

        return $static;
    }

    public function size(TextSize|string|Closure|null $size): static
    {
        $this->size = $size;

        return $this;
    }

    public function getSize(): TextSize|string|null
    {
        $size = $this->evaluate($this->size);

        if (blank($size)) {
            return null;
        }

        if (is_string($size)) {
            $size = TextSize::tryFrom($size) ?? $size;
        }

        return $size;
    }
}
