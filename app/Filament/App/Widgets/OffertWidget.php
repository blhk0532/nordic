<?php

declare(strict_types=1);

namespace App\Filament\App\Widgets;

use App\Filament\App\Resources\RingaListan\Tables\RingaDataTable;
use App\Models\RingaData;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Builder;

class OffertWidget extends BaseWidget
{
    protected static ?string $heading = 'Offerter';

    protected int|string|array $columnSpan = 'full';

    protected static ?int $sort = 10;

    public function table(Table $table): Table
    {
        $userId = auth()->id();
        $tenantId = filament()->getTenant()?->id;

        return RingaDataTable::configure($table)
            ->query(
                RingaData::query()
                    ->where(function (Builder $query) use ($userId, $tenantId) {
                        $query->where('user_id', $userId);
                        if ($tenantId) {
                            $query->where('team_id', $tenantId);
                        }
                    })
                    ->whereNotNull('outcome')
                    ->where('outcome', '=', 'Offert')
            );
        //    ->heading('Samtalshistorik')
        //    ->description('Registrerade utfall');
    }
}
