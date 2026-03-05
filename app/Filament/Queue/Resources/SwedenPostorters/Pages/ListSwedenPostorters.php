<?php

namespace App\Filament\Queue\Resources\SwedenPostorters\Pages;

use App\Filament\Queue\Resources\SwedenPostorters\SwedenPostorterResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListSwedenPostorters extends ListRecords
{
    protected static string $resource = SwedenPostorterResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
