<?php

namespace App\Filament\Queue\Resources\SwedenPostnummers\Pages;

use App\Filament\Queue\Resources\SwedenPostnummers\SwedenPostnummerResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListSwedenPostnummers extends ListRecords
{
    protected static string $resource = SwedenPostnummerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
