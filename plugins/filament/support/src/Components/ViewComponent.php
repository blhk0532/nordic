<?php

declare(strict_types=1);

namespace Filament\Support\Components;

use Closure;
use Filament\Support\Components\Contracts\HasEmbeddedView;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Arr;
use Illuminate\Support\HtmlString;
use Illuminate\View\ComponentAttributeBag;
use LogicException;

abstract class ViewComponent extends Component implements Htmlable
{
    protected string $view;

    /**
     * @var view-string | Closure | null
     */
    protected string|Closure|null $defaultView = null;

    /**
     * @var array<array<string, mixed> | Closure>
     */
    protected array $viewData = [];

    protected string $viewIdentifier;

    protected View $viewInstance;

    /**
     * @param  view-string | null  $view
     * @param  array<string, mixed> | Closure  $viewData
     */
    final public function view(?string $view, array|Closure $viewData = []): static
    {
        if ($view === null) {
            return $this;
        }

        $this->view = $view;

        if (filled($viewData)) {
            $this->viewData($viewData);
        }

        return $this;
    }

    /**
     * @param  view-string | Closure | null  $view
     */
    final public function defaultView(string|Closure|null $view): static
    {
        $this->defaultView = $view;

        return $this;
    }

    /**
     * @param  array<string, mixed> | Closure  $data
     */
    final public function viewData(array|Closure $data): static
    {
        $this->viewData[] = $data;

        return $this;
    }

    /**
     * @return view-string
     */
    final public function getView(): string
    {
        if (isset($this->view)) {
            return $this->view;
        }

        if (filled($defaultView = $this->getDefaultView())) {
            return $defaultView;
        }

        throw new LogicException('Class ['.static::class.'] extends ['.self::class.'] but does not have a [$view] property defined.');
    }

    final public function hasView(): bool
    {
        return isset($this->view) || $this->getDefaultView();
    }

    /**
     * @return view-string | null
     */
    final public function getDefaultView(): ?string
    {
        return $this->evaluate($this->defaultView);
    }

    /**
     * @return array<string, mixed>
     */
    final public function getViewData(): array
    {
        return Arr::mapWithKeys(
            $this->viewData,
            fn (mixed $data): array => $this->evaluate($data) ?? [],
        );
    }

    final public function toHtml(): string
    {
        if (($this instanceof HasEmbeddedView) && (! $this->hasView())) {
            return $this->toEmbeddedHtml();
        }

        return $this->render()->render();
    }

    final public function toHtmlString(): ?HtmlString
    {
        $html = $this->toHtml();

        if (blank($html)) {
            return null;
        }

        return new HtmlString($html);
    }

    /**
     * @return array<string, mixed>
     */
    final public function getExtraViewData(): array
    {
        return [];
    }

    final public function render(): View
    {
        $this->viewInstance ??= view($this->getView(), [
            ...$this->extractPublicMethods(),
            ...(isset($this->viewIdentifier) ? [$this->viewIdentifier => $this] : []),
        ]);

        return $this->viewInstance->with([
            'attributes' => new ComponentAttributeBag,
            ...$this->getExtraViewData(),
            ...$this->getViewData(),
        ]);
    }

    /**
     * @return array<string, Closure>
     */
    protected function extractPublicMethods(): array
    {
        return ComponentManager::resolve()->extractPublicMethods($this);
    }
}
