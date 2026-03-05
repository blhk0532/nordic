<?php

declare(strict_types=1);

namespace App\Filament\App\Widgets;

use App\Filament\App\Resources\Contacts\Widgets\ContactWidget;
use App\Filament\App\Resources\RetryOutcomes\RetryOutcomeResource;
use App\Filament\App\Resources\RetryOutcomes\Widgets\RetryOutcomeWidget;
use App\Models\RingaData;
use SolutionForest\TabLayoutPlugin\Components\Tabs;
use SolutionForest\TabLayoutPlugin\Components\Tabs\Tab as TabLayoutTab;
use SolutionForest\TabLayoutPlugin\Widgets\TabsWidget as BaseWidget;

class MyRinglistaWidget extends BaseWidget
{
    protected int|string|array $columnSpan = 'full';

    public static function tabs(Tabs $tabs): Tabs
    {
        return $tabs
            ->contained(true);
    }

    protected function schema(): array
    {
        return [
            TabLayoutTab::make('Ring Tillbaka')
                ->icon('heroicon-o-phone-arrow-up-right')
                ->badge(fn () => auth()->user()->ringaData()->whereNotNull('aterkom_at')->whereIn('outcome', ['Aterkommer', 'RingTillbaka'])->where('user_id', auth()->id())->count())
                ->extraAttributes(['class' => 'ring-tillbaka-tab'])
                ->schema([
                    AterkomRingTableWidget::class,
                ]),
            TabLayoutTab::make('Samtalshistorik')
                ->icon('heroicon-o-phone-arrow-down-left')
                ->extraAttributes(['class' => 'samtalshistorik-tab'])
                ->badge(fn () => auth()->user()->ringaData()->whereNotNull('outcome')->where('user_id', auth()->id())->count())
                ->schema([
                    CallHistoryWidget::class,
                ]),
            TabLayoutTab::make('Väntelista')
                ->extraAttributes(['class' => 'väntelista-tab'])
                ->icon('heroicon-o-clock')
                ->badge(fn () => RetryOutcomeResource::getEloquentQuery()->where('user_id', auth()->id())->count())
                ->schema([
                    RetryOutcomeWidget::class,
                ]),
            TabLayoutTab::make('Kontakter')
                ->extraAttributes(['class' => 'kontakter-tab'])
                ->icon('heroicon-o-user-group')
                ->badge(fn () => RingaData::getContactQuery(RingaData::query())->where('user_id', auth()->id())->count())
                ->schema([
                    ContactWidget::class,
                ]),
        ];
    }
}
