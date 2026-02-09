<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDatas\Widgets;

use App\Filament\App\Resources\RingaDatas\Tables\RingaDatasTable;
use App\Models\RingaData;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Livewire\Attributes\On;

class RingaDatasQueueTableWidget extends BaseWidget
{
    public ?int $selectedRecordId = null;

    protected static ?string $heading = '';

    protected int|string|array $columnSpan = 'full';

    public function mount(): void
    {
        logger()->info('RingaDatasQueueTableWidget mount');
        // Load initial record
        $this->loadInitialRecord();
    }

    #[On('record-selected')]
    public function updateRecordId(int $recordId): void
    {
        logger()->info('RingaDatasQueueTableWidget updateRecordId', ['recordId' => $recordId]);
        $this->selectedRecordId = $recordId;
        // Force table refresh
        $this->dispatch('refresh-table');
    }

    public function table(Table $table): Table
    {
        logger()->info('RingaDatasQueueTableWidget table query', [
            'selectedRecordId' => $this->selectedRecordId,
        ]);

        return RingaDatasTable::configure($table)
            ->query(function () {
                if (! $this->selectedRecordId) {
                    return RingaData::query()->whereRaw('1=0');
                }

                return \App\Filament\App\Resources\RingaDatas\RingaDatasResource::getEloquentQuery()->where('id', (int) $this->selectedRecordId);
            })
            ->paginated(false)
            ->emptyStateHeading('Ingen aktuell post vald')
            ->emptyStateDescription('Välj en post från listan eller kalendern för att se detaljer.');
    }

    private function loadInitialRecord(): void
    {
        // Load the first unprocessed record using the same logic as the page
        $record = \App\Filament\App\Resources\RingaDatas\RingaDatasResource::getEloquentQuery()
            ->where(function ($query) {
                $query->where('user_id', auth()->id());
                if (filament()->getTenant()) {
                    $query->orWhere('team_id', filament()->getTenant()->id);
                }
            })
            ->where('is_active', true)
            ->whereDate('started_at', '<=', now())
            ->where(function ($query) {
                $query->whereRaw('attempts < COALESCE((
                    SELECT MAX(max_retry_count)
                    FROM outcome_settings
                    WHERE is_active = TRUE
                ), 3)');
            })
            ->where(function ($query) {
                $query->whereNull('available_at')
                    ->orWhere('available_at', '<=', now());
            })
            ->where(function ($query) {
                $query->whereNull('aterkom_at')
                    ->orWhere('aterkom_at', '<=', now());
            })
            ->whereNull('outcome_category')
            ->whereNull('outcome')
            ->orderBy('id', 'desc')
            ->first();

        $this->selectedRecordId = $record?->id;
        logger()->info('RingaDatasQueueTableWidget loaded initial record', ['recordId' => $this->selectedRecordId]);
    }
}
