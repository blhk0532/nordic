<?php

namespace App\Filament\Queue\Resources\SwedenKommuners\Pages;

use App\Filament\Queue\Resources\SwedenKommuners\SwedenKommunerResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListSwedenKommuners extends ListRecords
{
    protected static string $resource = SwedenKommunerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
