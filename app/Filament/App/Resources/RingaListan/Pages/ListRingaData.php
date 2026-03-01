<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Pages;

use App\Filament\App\Resources\RingaListan\RingaListanResource;
use App\Filament\App\Resources\RingaListan\Widgets\CallHistoryWidget;
use App\Filament\App\Resources\RingaListan\Widgets\RingaDataDisplayWidget;
use App\Filament\App\Resources\RingaListan\Widgets\RingaDataOutcomeWidget;
use App\Filament\App\Resources\RingaListan\Widgets\RingaDataStatsWidget;
use App\Models\RingaData;
use Filament\Resources\Pages\ListRecords;
use Filament\Support\Assets\Css;
use Filament\Support\Enums\Width;
use Filament\Support\Facades\FilamentAsset;

class ListRingaData extends ListRecords
{
    public ?int $selectedRecordId = null;

    protected static string $resource = RingaListanResource::class;

    public function getHeaderWidgetsColumns(): int|array
    {
        return 3;
    }

    public function selectRecord(int $recordId): void
    {
        $this->selectedRecordId = $recordId;
        $this->dispatch('record-selected', recordId: $recordId);
    }

    public function getMaxContentWidth(): Width
    {
        return Width::Full;
    }

    protected function getHeaderActions(): array
    {
        FilamentAsset::register([
            Css::make('custom', __DIR__.'/../../resources/css/custom.css'),
        ]);

        return [

        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [
            //    RingaDataPinpointWidget::class,
            //    RingaDataDisplayWidget::class,
            //    RingaDataOutcomeWidget::class,
            // RingaDataStatsWidget::class,

        ];
    }

    protected function getHeaderWidgetsData(): array
    {
        return [
            'record' => $this->selectedRecordId ? RingaData::find($this->selectedRecordId) : null,
        ];
    }

    protected function getFooterWidgets(): array
    {
        return [
            CallHistoryWidget::class,
        ];
    }
}
