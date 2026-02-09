<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Pages;

use App\Filament\App\Resources\RingaListan\RingaListanResource;
use App\Filament\App\Resources\RingaListan\Widgets\RingaDataCalendar;
use App\Filament\App\Resources\RingaListan\Widgets\RingaDataDisplayWidget;
use App\Filament\App\Resources\RingaListan\Widgets\RingaDataOutcomeFormWidget;
use App\Filament\App\Resources\RingaListan\Widgets\RingaDataOutcomeWidget;
use App\Filament\App\Resources\RingaListan\Widgets\RingaDataPinpointWidget;
use App\Filament\App\Resources\RingaListan\Widgets\RingaDataTableWidget;
use App\Models\RingaData;
use BackedEnum;
use Exception;
use Filament\Resources\Pages\Page;
use Filament\Support\Enums\Width;
use Illuminate\Database\Eloquent\Builder;
use Livewire\Attributes\On;
use UnitEnum;
use Wallacemartinss\FilamentIconPicker\Enums\Tabler;

class QueueRingaData extends Page
{
    public ?int $selectedRecordId = null;

    protected static string $resource = RingaListanResource::class;

    protected static ?string $slug = 'queues';

    protected static ?string $model = RingaData::class;

    protected static ?string $navigationLabel = 'Ringlista';

    protected static ?string $title = 'Ringlista';

    // public static bool $shouldRegisterNavigation = true;

    //  protected static UnitEnum|string|null $navigationGroup = '';

    protected static ?int $navigationSort = 2;

    protected static string|BackedEnum|null $navigationIcon = Tabler::PhoneRinging;

    protected string $view = 'filament.app.resources.ringa-data.pages.queue';

    public static function getNavigationBadge(): ?string
    {
        return self::getResource()::getEloquentQuery()
            ->whereNull('outcome')
            ->count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'danger';
    }

    public function mount(): void
    {
        try {
            if (! $this->selectedRecordId) {
                $first = $this->getQuery()
                    ->orderBy('id')
                    ->first();

                $this->selectedRecordId = $first?->id;
            }

            // Dispatch event to inform widgets of the selected record
            if ($this->selectedRecordId) {
                $this->dispatch('record-selected', recordId: $this->selectedRecordId);
            }
        } catch (Exception $e) {
            logger('QueueRingaData mount error: '.$e->getMessage(), ['exception' => $e]);
            throw $e;
        }
    }

    public function getHeaderWidgetsColumns(): int|array
    {
        return 2;
    }

    public function getHeaderWidgetsData(): array
    {
        $record = null;

        if ($this->selectedRecordId) {
            $record = $this->getQuery()->find($this->selectedRecordId);
        }

        if (! $record) {
            $record = $this->getQuery()
                ->orderBy('id')
                ->first();

            $this->selectedRecordId = $record?->id;
        }

        return [
            'record' => $record,
            'recordId' => $this->selectedRecordId,
        ];
    }

    public function selectRecord(int $recordId): void
    {
        $this->selectedRecordId = $recordId;
        $this->dispatch('record-selected', recordId: $recordId);
    }

    #[On('record-selected')]
    public function handleRecordSelected(int $recordId): void
    {
        $this->selectedRecordId = $recordId;
    }

    public function getMaxContentWidth(): Width
    {
        return Width::Full;
    }

    protected function getQuery(): Builder
    {
        return self::getResource()::getEloquentQuery()
            ->where(function (Builder $query) {
                $query->whereNull('outcome');
                //    ->orWhere('attempts', '<', 3);
            });
    }

    protected function getHeaderWidgets(): array
    {
        return [

            RingaDataPinpointWidget::class,
            RingaDataDisplayWidget::class,
            RingaDataOutcomeFormWidget::class,
            RingaDataOutcomeWidget::class,

            RingaDataTableWidget::class,

            RingaDataCalendar::class,
        ];
    }
}
