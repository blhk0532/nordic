<?php

declare(strict_types=1);

namespace Filament\Resources\Pages;

use Closure;
use Filament\Panel;
use Illuminate\Routing\Route;

class PageRegistration
{
    public function __construct(
        private string $page,
        private Closure $route,
    ) {}

    public function registerRoute(Panel $panel): ?Route
    {
        return ($this->route)($panel);
    }

    public function getPage(): string
    {
        return $this->page;
    }
}
