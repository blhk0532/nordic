<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RetryOutcomes\Pages;

use App\Filament\App\Resources\RetryOutcomes\RetryOutcomeResource;
use App\Models\RingaData;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

class ListRetryOutcomes extends ListRecords
{
    protected static string $resource = RetryOutcomeResource::class;

    protected static ?string $title = 'Återkom';

    protected static UnitEnum|string|null $navigationGroup = '';

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }

    protected function getTableQuery(): ?Builder
    {
        return RingaData::query()
            ->where(function (Builder $query) {
                $query->where('outcome_category', 'Retry')
                    ->orWhere('outcome_category', 'Later');
            })
            ->where('is_active', true)
            ->orderBy('aterkom_at', 'asc');
    }
}
