<?php

declare(strict_types=1);

namespace Filament\Schemas\Components\Contracts;

use Filament\Actions\Action;

interface HasExtraItemActions
{
    /**
     * @return array<Action>
     */
    public function getExtraItemActions(): array;

    /**
     * @return array<string, mixed>
     */
    public function getItemState(string $key): array;
}
