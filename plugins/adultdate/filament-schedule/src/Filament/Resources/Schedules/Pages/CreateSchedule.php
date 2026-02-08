<?php

declare(strict_types=1);

namespace Adultdate\Schedule\Filament\Resources\Schedules\Pages;

use Adultdate\Schedule\Filament\Resources\Schedules\ScheduleResource;
use Filament\Resources\Pages\CreateRecord;

final class CreateSchedule extends CreateRecord
{
    protected static string $resource = ScheduleResource::class;
}
