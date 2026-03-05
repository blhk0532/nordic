<?php

namespace App\Filament\Resources\SwedenKommunerResource\Pages;

use App\Filament\Resources\SwedenKommunerResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewSwedenKommuner extends ViewRecord
{
    protected static string $resource = SwedenKommunerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
