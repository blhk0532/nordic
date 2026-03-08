<?php

declare(strict_types=1);

namespace App\Filament\App\Widgets;

use App\Filament\App\Resources\Contacts\Widgets\ContactWidget;
use App\Filament\App\Resources\RetryOutcomes\Widgets\RetryOutcomeWidget;
use App\Filament\App\Resources\RingaData\Widgets\RingaDataWidget;
use App\Filament\App\Resources\RingaListan\Widgets\CallAgainWidget;
use App\Models\RingaData;
use SolutionForest\TabLayoutPlugin\Components\Tabs;
use SolutionForest\TabLayoutPlugin\Components\Tabs\Tab as TabLayoutTab;
use SolutionForest\TabLayoutPlugin\Widgets\TabsWidget as BaseWidget;
use Wallacemartinss\FilamentIconPicker\Enums\Remix;

class MyRinglistaWidget extends BaseWidget
{
    public static function tabs(Tabs $tabs): Tabs
    {
        return $tabs->contained(true);
    }

    protected function schema(): array
    {
        return [
            TabLayoutTab::make('Ring Igen')
                ->icon(Remix::RiTimerFlashLine)
                ->badge(fn () => RingaData::getQueryRingIgen()->count())
                ->extraAttributes(['class' => 'ring-tillbaka-tab'])
                ->schema([
                    CallAgainWidget::class,
                ]),
            TabLayoutTab::make('Samtalskö')
                ->icon('heroicon-o-queue-list')
                ->badge(fn () => RingaData::getQueryRinglista()->count())
                ->extraAttributes(['class' => 'ring-tillbaka-tab'])
                ->schema([
                    RingaDataWidget::class,
                ]),
            TabLayoutTab::make('Kontakter')
                ->extraAttributes(['class' => 'kontakter-tab'])
                ->icon('heroicon-o-user')
                ->badge(fn () => $this->getContactCount())
                ->schema([
                    ContactWidget::class,
                ]),
            TabLayoutTab::make('Offerter')
                ->extraAttributes(['class' => 'offerter-tab'])
                ->icon('heroicon-o-document-text')
                ->badge(fn () => 0)
                ->schema([
                    OffertWidget::class,
                ]),
            TabLayoutTab::make('Väntelista')
                ->extraAttributes(['class' => 'väntelista-tab'])
                ->icon('heroicon-o-clock')
                ->badge(fn () => RingaData::getQueryWaitinglist()->count())
                ->schema([
                    RetryOutcomeWidget::class,
                ]),
            TabLayoutTab::make('Historik')
                ->icon('heroicon-o-phone-arrow-down-left')
                ->extraAttributes(['class' => 'samtalshistorik-tab'])
                ->badge(fn () => 0)
                ->schema([
                    CallHistoryWidget::class,
                ]),
        ];
    }

    protected function getRingAgainCount(): int
    {
        try {
            return RingaData::getQueryRinglista()->count();
        } catch (\Throwable) {
            return 0;
        }
    }

    protected function getContactCount(): int
    {
        try {
            return RingaData::getContactQuery(RingaData::query())->count();
        } catch (\Throwable) {
            return 0;
        }
    }
}
