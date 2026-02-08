<?php

declare(strict_types=1);

namespace Filament\Schemas\Components;

use Closure;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Forms\Components\Concerns\CanBeMarkedAsRequired;
use Filament\Forms\Components\Concerns\HasExtraFieldWrapperAttributes;
use Filament\Forms\Components\Concerns\HasHelperText;
use Filament\Forms\Components\Field;
use Filament\Schemas\Components\Concerns\EntanglesStateWithSingularRelationship;
use Filament\Schemas\Components\Concerns\HasLabel;
use Filament\Schemas\Components\Contracts\CanEntangleWithSingularRelationships;
use Filament\Schemas\Schema;
use Filament\Support\Enums\Size;
use Illuminate\Contracts\Support\Htmlable;

class FusedGroup extends Component implements CanEntangleWithSingularRelationships
{
    use CanBeMarkedAsRequired;
    use EntanglesStateWithSingularRelationship;
    use HasExtraFieldWrapperAttributes;
    use HasHelperText;
    use HasLabel;

    public const ABOVE_LABEL_SCHEMA_KEY = 'above_label';

    public const BELOW_LABEL_SCHEMA_KEY = 'below_label';

    public const BEFORE_LABEL_SCHEMA_KEY = 'before_label';

    public const AFTER_LABEL_SCHEMA_KEY = 'after_label';

    public const BEFORE_CONTENT_SCHEMA_KEY = 'before_content';

    public const AFTER_CONTENT_SCHEMA_KEY = 'after_content';

    public const ABOVE_CONTENT_SCHEMA_KEY = 'above_content';

    public const BELOW_CONTENT_SCHEMA_KEY = 'below_content';

    public const ABOVE_ERROR_MESSAGE_SCHEMA_KEY = 'above_error_message';

    public const BELOW_ERROR_MESSAGE_SCHEMA_KEY = 'below_error_message';

    /**
     * @var view-string
     */
    protected string $view = 'filament-schemas::components.fused-group';

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

        $this->gap(false);
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

    /**
     * @param  array<Component | Action | ActionGroup> | Schema | Component | Action | ActionGroup | string | Htmlable | Closure | null  $components
     */
    public function aboveLabel(array|Schema|Component|Action|ActionGroup|string|Htmlable|Closure|null $components): static
    {
        $this->childComponents($components, static::ABOVE_LABEL_SCHEMA_KEY);

        return $this;
    }

    /**
     * @param  array<Component | Action | ActionGroup> | Schema | Component | Action | ActionGroup | string | Htmlable | Closure | null  $components
     */
    public function belowLabel(array|Schema|Component|Action|ActionGroup|string|Htmlable|Closure|null $components): static
    {
        $this->childComponents($components, static::BELOW_LABEL_SCHEMA_KEY);

        return $this;
    }

    /**
     * @param  array<Component | Action | ActionGroup> | Schema | Component | Action | ActionGroup | string | Htmlable | Closure | null  $components
     */
    public function beforeLabel(array|Schema|Component|Action|ActionGroup|string|Htmlable|Closure|null $components): static
    {
        $this->childComponents($components, static::BEFORE_LABEL_SCHEMA_KEY);

        return $this;
    }

    /**
     * @param  array<Component | Action | ActionGroup> | Schema | Component | Action | ActionGroup | string | Htmlable | Closure | null  $components
     */
    public function afterLabel(array|Schema|Component|Action|ActionGroup|string|Htmlable|Closure|null $components): static
    {
        $this->childComponents($components, static::AFTER_LABEL_SCHEMA_KEY);

        return $this;
    }

    /**
     * @param  array<Component | Action | ActionGroup> | Schema | Component | Action | ActionGroup | string | Htmlable | Closure | null  $components
     */
    public function beforeContent(array|Schema|Component|Action|ActionGroup|string|Htmlable|Closure|null $components): static
    {
        $this->childComponents($components, static::BEFORE_CONTENT_SCHEMA_KEY);

        return $this;
    }

    /**
     * @param  array<Component | Action | ActionGroup> | Schema | Component | Action | ActionGroup | string | Htmlable | Closure | null  $components
     */
    public function afterContent(array|Schema|Component|Action|ActionGroup|string|Htmlable|Closure|null $components): static
    {
        $this->childComponents($components, static::AFTER_CONTENT_SCHEMA_KEY);

        return $this;
    }

    /**
     * @param  array<Component | Action | ActionGroup> | Schema | Component | Action | ActionGroup | string | Htmlable | Closure | null  $components
     */
    public function aboveContent(array|Schema|Component|Action|ActionGroup|string|Htmlable|Closure|null $components): static
    {
        $this->childComponents($components, static::ABOVE_CONTENT_SCHEMA_KEY);

        return $this;
    }

    /**
     * @param  array<Component | Action | ActionGroup> | Schema | Component | Action | ActionGroup | string | Htmlable | Closure | null  $components
     */
    public function belowContent(array|Schema|Component|Action|ActionGroup|string|Htmlable|Closure|null $components): static
    {
        $this->childComponents($components, static::BELOW_CONTENT_SCHEMA_KEY);

        return $this;
    }

    /**
     * @param  array<Component | Action | ActionGroup> | Schema | Component | Action | ActionGroup | string | Htmlable | Closure | null  $components
     */
    public function aboveErrorMessage(array|Schema|Component|Action|ActionGroup|string|Htmlable|Closure|null $components): static
    {
        $this->childComponents($components, static::ABOVE_ERROR_MESSAGE_SCHEMA_KEY);

        return $this;
    }

    /**
     * @param  array<Component | Action | ActionGroup> | Schema | Component | Action | ActionGroup | string | Htmlable | Closure | null  $components
     */
    public function belowErrorMessage(array|Schema|Component|Action|ActionGroup|string|Htmlable|Closure|null $components): static
    {
        $this->childComponents($components, static::BELOW_ERROR_MESSAGE_SCHEMA_KEY);

        return $this;
    }

    public function isRequired(): bool
    {
        foreach ($this->getDefaultChildComponents() as $component) {
            if (! ($component instanceof Field)) {
                continue;
            }

            if ($component->isMarkedAsRequired()) {
                return true;
            }
        }

        return false;
    }

    protected function makeChildSchema(string $key): Schema
    {
        $schema = parent::makeChildSchema($key);

        if ($key === static::AFTER_LABEL_SCHEMA_KEY) {
            $schema->alignEnd();
        }

        $schema->fieldWrapperView('filament-forms::plain-field-wrapper');

        return $schema;
    }

    protected function configureChildSchema(Schema $schema, string $key): Schema
    {
        $schema = parent::configureChildSchema($schema, $key);

        if (in_array($key, [
            static::BEFORE_LABEL_SCHEMA_KEY,
            static::AFTER_LABEL_SCHEMA_KEY,
            static::ABOVE_CONTENT_SCHEMA_KEY,
            static::BELOW_CONTENT_SCHEMA_KEY,
            static::ABOVE_ERROR_MESSAGE_SCHEMA_KEY,
            static::BELOW_ERROR_MESSAGE_SCHEMA_KEY,
        ])) {
            $schema
                ->inline()
                ->embeddedInParentComponent()
                ->modifyActionsUsing(fn (Action $action) => $action
                    ->defaultSize(Size::Small)
                    ->defaultView(Action::LINK_VIEW))
                ->modifyActionGroupsUsing(fn (ActionGroup $actionGroup) => $actionGroup->defaultSize(Size::Small));
        }

        return $schema;
    }
}
