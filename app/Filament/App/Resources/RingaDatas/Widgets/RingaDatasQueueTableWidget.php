<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDatas\Widgets;

use App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData;
use App\Filament\App\Resources\RingaDatas\Tables\RingaDatasTable;
use App\Models\RingaData;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Builder;
use Livewire\Attributes\On;

class RingaDatasQueueTableWidget extends BaseWidget
{
    public ?int $selectedRecordId = null;

    protected static ?string $heading = '';

    protected int|string|array $columnSpan = 'full';

    public function mount(): void
    {
        $this->loadInitialRecord();
    }

    #[On('record-selected')]
    public function updateRecordId(int $recordId): void
    {
        $this->selectedRecordId = $recordId;
        $this->dispatch('refresh-table');
    }

    public function table(Table $table): Table
    {
        return RingaDatasTable::configure($table)
            ->query(function () {
                if (! $this->selectedRecordId) {
                    return RingaData::query()->whereRaw('1=0');
                }

                return \App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData::getQuery()->where('id', (int) $this->selectedRecordId);
            })
            ->paginated(false)
            ->emptyStateHeading('Ingen aktuell post vald')
            ->emptyStateDescription('Välj en post från listan eller kalendern för att se detaljer.');
    }

    protected function loadInitialRecord(): Builder
    {
        $query = QueueRingaData::getQuery();
        $this->selectedRecordId = $query->first()?->id;

        return $query;
    }
}
