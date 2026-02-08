<?php

declare(strict_types=1);

namespace Adultdate\Schedule\Filament\Resources\Projects\Pages;

use Adultdate\Schedule\Filament\Resources\Projects\ProjectResource;
use Filament\Resources\Pages\CreateRecord;

final class CreateProject extends CreateRecord
{
    protected static string $resource = ProjectResource::class;
}
