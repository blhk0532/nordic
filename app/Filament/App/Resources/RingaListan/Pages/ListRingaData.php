<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Pages;

use App\Filament\App\Resources\RingaListan\RingaListanResource;
use App\Filament\App\Resources\RingaListan\Widgets\RingaDataDisplayWidget;
use App\Filament\App\Resources\RingaListan\Widgets\RingaDataOutcomeWidget;
use App\Filament\App\Resources\RingaListan\Widgets\RingaDataStatsWidget;
use App\Filament\App\Widgets\MyRinglistaWidget;
use App\Filament\App\Widgets\RingaKanbanWidget;
use App\Models\RingaData;
use Filament\Actions\Action;
use Filament\Resources\Pages\ListRecords;
use Filament\Support\Assets\Css;
use Filament\Support\Enums\Width;
use Filament\Support\Facades\FilamentAsset;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class ListRingaData extends ListRecords
{
    public ?int $selectedRecordId = null;

    protected static string $resource = RingaListanResource::class;

    public function getHeaderWidgetsColumns(): int|array
    {
        return 4;
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

        $currentTab = request()->get('tab', 'pending');

        return [
            Action::make('pending_tab')
                ->label('Pending')
                ->url(fn () => request()->fullUrlWithQuery(['tab' => 'pending']))
                ->color($currentTab === 'pending' ? 'primary' : 'gray')
                ->badge(fn () => RingaListanResource::getEloquentQuery()->whereIn('outcome', [
                    \App\Enums\Outcomes::Aterkommer->value,
                    \App\Enums\Outcomes::RingTillbaka->value,
                ])->count()),

            Action::make('completed_tab')
                ->label('Completed')
                ->url(fn () => request()->fullUrlWithQuery(['tab' => 'completed']))
                ->color($currentTab === 'completed' ? 'primary' : 'gray')
                ->badge(fn () => RingaListanResource::getEloquentQuery()->whereNotIn('outcome', [
                    \App\Enums\Outcomes::Aterkommer->value,
                    \App\Enums\Outcomes::RingTillbaka->value,
                ])->count()),

            Action::make('all_tab')
                ->label('All')
                ->url(fn () => request()->fullUrlWithQuery(['tab' => 'all']))
                ->color($currentTab === 'all' ? 'primary' : 'gray')
                ->badge(fn () => RingaListanResource::getEloquentQuery()->count()),
        ];
    }

    public function table(Table $table): Table
    {
        return parent::table($table)
            ->modifyQueryUsing(function (Builder $query) {
                $tab = request()->get('tab', 'pending');

                return match ($tab) {
                    'pending' => $query->whereIn('outcome', [
                        \App\Enums\Outcomes::Aterkommer->value,
                        \App\Enums\Outcomes::RingTillbaka->value,
                    ]),
                    'completed' => $query->whereNotIn('outcome', [
                        \App\Enums\Outcomes::Aterkommer->value,
                        \App\Enums\Outcomes::RingTillbaka->value,
                    ]),
                    default => $query,
                };
            });
    }

    protected function getHeaderWidgets(): array
    {
        return [
            //    RingaDataPinpointWidget::class,
            //    RingaDataDisplayWidget::class,
            //    RingaDataOutcomeWidget::class,
            // RingaDataStatsWidget::class,
            RingaDataStatsWidget::class,
            MyRinglistaWidget::class,
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
            //    RingaKanbanWidget::class,

        ];
    }
}
