<?php

declare(strict_types=1);

namespace App\Filament\Finance\Resources\Outcomes\Pages;

use App\Filament\Finance\Resources\Outcomes\OutcomesResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\RestoreAction;
use Filament\Resources\Pages\EditRecord;

final class EditOutcomes extends EditRecord
{
    protected static string $resource = OutcomesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
            ForceDeleteAction::make(),
            RestoreAction::make(),
        ];
    }
}
