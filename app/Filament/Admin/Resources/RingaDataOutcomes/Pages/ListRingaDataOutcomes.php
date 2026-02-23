<?php

declare(strict_types=1);

namespace App\Filament\Admin\Resources\RingaDataOutcomes\Pages;

use App\Filament\Admin\Resources\RingaDataOutcomes\RingaDataOutcomesResource;
use Filament\Resources\Pages\ListRecords;

class ListRingaDataOutcomes extends ListRecords
{
    protected static string $resource = RingaDataOutcomesResource::class;

    protected function getHeaderActions(): array
    {
        return [];
    }
}
