<?php

declare(strict_types=1);

namespace Filament\Models\Contracts;

interface HasAvatar
{
    public function getFilamentAvatarUrl(): ?string;
}
