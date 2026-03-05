<?php

namespace App\Filament\Resources\SwedenKommunerResource\Pages;

use App\Filament\Resources\SwedenKommunerResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSwedenKommuner extends EditRecord
{
    protected static string $resource = SwedenKommunerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
