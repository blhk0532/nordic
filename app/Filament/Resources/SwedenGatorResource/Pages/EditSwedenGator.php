<?php

namespace App\Filament\Resources\SwedenGatorResource\Pages;

use App\Filament\Resources\SwedenGatorResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSwedenGator extends EditRecord
{
    protected static string $resource = SwedenGatorResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
