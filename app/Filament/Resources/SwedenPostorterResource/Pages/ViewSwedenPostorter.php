<?php

namespace App\Filament\Resources\SwedenPostorterResource\Pages;

use App\Filament\Resources\SwedenPostorterResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewSwedenPostorter extends ViewRecord
{
    protected static string $resource = SwedenPostorterResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
