<?php

namespace App\Filament\Resources\SwedenPostorterResource\Pages;

use App\Filament\Resources\SwedenPostorterResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSwedenPostorters extends ListRecords
{
    protected static string $resource = SwedenPostorterResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
