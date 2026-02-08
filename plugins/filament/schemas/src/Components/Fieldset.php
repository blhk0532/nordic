<?php

declare(strict_types=1);

namespace Filament\Schemas\Components;

use Closure;
use Filament\Forms\Components\Concerns\CanBeMarkedAsRequired;
use Filament\Schemas\Components\Concerns\EntanglesStateWithSingularRelationship;
use Filament\Schemas\Components\Concerns\HasLabel;
use Filament\Schemas\Components\Contracts\CanEntangleWithSingularRelationships;
use Filament\Support\Concerns\CanBeContained;
use Illuminate\Contracts\Support\Htmlable;

class Fieldset extends Component implements CanEntangleWithSingularRelationships
{
    use CanBeContained;
    use CanBeMarkedAsRequired;
    use EntanglesStateWithSingularRelationship;
    use HasLabel;

    /**
     * @var view-string
     */
    protected string $view = 'filament-schemas::components.fieldset';

    public function __construct(string|Htmlable|Closure|null $label = null)
    {
        $this->label($label);
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->columns(2);
    }

    public static function make(string|Htmlable|Closure|null $label = null): static
    {
        $static = app(self::class, ['label' => $label]);
        $static->configure();

        return $static;
    }

    public function isRequired(): bool
    {
        return false;
    }
}
