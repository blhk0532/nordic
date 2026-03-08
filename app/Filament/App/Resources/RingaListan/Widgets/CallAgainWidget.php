<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Widgets;

use App\Enums\Outcomes;
use App\Filament\App\Resources\RingaListan\Tables\RingaDataTable;
use App\Models\RingaData;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class CallAgainWidget extends BaseWidget
{
    protected static ?string $heading = 'Ring tillbaka';

    protected int|string|array $columnSpan = 'full';

    protected static ?int $sort = 10;

    public function table(Table $table): Table
    {
        $userId = auth()->id();
        $tenantId = filament()->getTenant()?->id;

        return RingaDataTable::configure($table)
            ->query(RingaData::query()->whereNotNull('aterkom_at')->whereIn('outcome', [
                Outcomes::Aterkommer->value,
                Outcomes::RingTillbaka->value,
            ]));
    }
}
