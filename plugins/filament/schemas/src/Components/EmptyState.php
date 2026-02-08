<?php

declare(strict_types=1);

namespace Filament\Schemas\Components;

use Closure;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Schemas\Components\Concerns\CanBeCompact;
use Filament\Schemas\Components\Concerns\HasDescription;
use Filament\Schemas\Schema;
use Filament\Support\Concerns\CanBeContained;
use Filament\Support\Concerns\HasIcon;
use Filament\Support\Concerns\HasIconColor;
use Filament\Support\Concerns\HasIconSize;
use Illuminate\Contracts\Support\Htmlable;

class EmptyState extends Component
{
    use CanBeCompact;
    use CanBeContained;
    use HasDescription;
    use HasIcon;
    use HasIconColor;
    use HasIconSize;

    public const FOOTER_SCHEMA_KEY = 'footer';

    /**
     * @var view-string
     */
    protected string $view = 'filament-schemas::components.empty-state';

    protected string|Htmlable|Closure $heading;

    public function __construct(string|Htmlable|Closure $heading)
    {
        $this->heading($heading);
    }

    public static function make(string|Htmlable|Closure $heading): static
    {
        $static = app(self::class, ['heading' => $heading]);
        $static->configure();

        return $static;
    }

    /**
     * @param  array<Component | Action | ActionGroup | string | Htmlable> | Schema | Component | Action | ActionGroup | string | Htmlable | Closure | null  $components
     */
    public function footer(array|Schema|Component|Action|ActionGroup|string|Htmlable|Closure|null $components): static
    {
        $this->childComponents($components, static::FOOTER_SCHEMA_KEY);

        return $this;
    }

    public function heading(string|Htmlable|Closure $heading): static
    {
        $this->heading = $heading;

        return $this;
    }

    public function getHeading(): string|Htmlable
    {
        return $this->evaluate($this->heading);
    }

    protected function configureChildSchema(Schema $schema, string $key): Schema
    {
        $schema = parent::configureChildSchema($schema, $key);

        if (in_array($key, [
            static::FOOTER_SCHEMA_KEY,
        ])) {
            $schema
                ->inline()
                ->embeddedInParentComponent();
        }

        return $schema;
    }
}
