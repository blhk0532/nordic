<?php

declare(strict_types=1);

namespace Filament\Actions\Concerns;

trait CanCallParentAction
{
    protected ?string $parentActionCallLivewireClickHandler = null;

    public function callParent(?string $handler): static
    {
        $this->parentActionCallLivewireClickHandler = $handler;

        return $this;
    }

    public function getParentActionCallLivewireClickHandler(): ?string
    {
        return $this->parentActionCallLivewireClickHandler;
    }
}
