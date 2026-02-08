<?php

declare(strict_types=1);

namespace Filament\Schemas\Contracts;

interface HasRenderHookScopes
{
    /**
     * @return array<string>
     */
    public function getRenderHookScopes(): array;
}
