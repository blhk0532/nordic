<?php

declare(strict_types=1);

namespace Filament\Widgets;

use Filament\Support\Concerns\CanBeLazy;
use Illuminate\Contracts\View\View;
use Livewire\Component;

abstract class Widget extends Component
{
    use CanBeLazy;

    protected static bool $isDiscovered = true;

    protected static ?int $sort = null;

    /**
     * @var view-string
     */
    protected string $view;

    /**
     * @var int | string | array<string, int | null>
     */
    protected int|string|array $columnSpan = 1;

    /**
     * @var int | string | array<string, int | null>
     */
    protected int|string|array $columnStart = [];

    final public static function canView(): bool
    {
        return true;
    }

    final public static function getSort(): int
    {
        return static::$sort ?? -1;
    }

    final public static function isDiscovered(): bool
    {
        return static::$isDiscovered;
    }

    /**
     * @param  array<string, mixed>  $properties
     */
    final public static function make(array $properties = []): WidgetConfiguration
    {
        return app(WidgetConfiguration::class, ['widget' => static::class, 'properties' => $properties]);
    }

    /**
     * @return array<string, mixed>
     */
    final public static function getDefaultProperties(): array
    {
        $properties = [];

        if (static::isLazy()) {
            $properties['lazy'] = true;
        }

        return $properties;
    }

    /**
     * @return int | string | array<string, int | null>
     */
    final public function getColumnSpan(): int|string|array
    {
        return $this->columnSpan;
    }

    /**
     * @return int | string | array<string, int | null>
     */
    final public function getColumnStart(): int|string|array
    {
        return $this->columnStart;
    }

    final public function render(): View
    {
        return view($this->view, $this->getViewData());
    }

    /**
     * @return array<string, mixed>
     */
    final public function getPlaceholderData(): array
    {
        return [
            'columnSpan' => $this->getColumnSpan(),
            'columnStart' => $this->getColumnStart(),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    protected function getViewData(): array
    {
        return [];
    }
}
