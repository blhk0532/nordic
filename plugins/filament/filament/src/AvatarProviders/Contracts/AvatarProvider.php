<?php

declare(strict_types=1);

namespace Filament\AvatarProviders\Contracts;

use Illuminate\Database\Eloquent\Model;

interface AvatarProvider
{
    public function get(Model $record): string;
}
