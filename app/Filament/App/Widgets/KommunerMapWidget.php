<?php

declare(strict_types=1);

namespace App\Filament\App\Widgets;

use App\Models\RatsitKommun;
use EduardoRibeiroDev\FilamentLeaflet\Enums\Color;
use EduardoRibeiroDev\FilamentLeaflet\Support\Markers\Marker;
use EduardoRibeiroDev\FilamentLeaflet\Widgets\MapWidget;

class KommunerMapWidget extends MapWidget
{
    protected static ?int $sort = 1;

    protected ?string $heading = 'Sweden Kommuner Map';

    protected array $mapCenter = [60.1282, 18.6435];

    protected int $defaultZoom = 5;

    protected int $mapHeight = 500;

    protected function getMarkers(): array
    {
        $kommuner = RatsitKommun::query()
            ->whereNotNull('lat')
            ->whereNotNull('lng')
            ->where('personer_count', '>', 0)
            ->get();

        $markers = [];
        foreach ($kommuner as $kommun) {
            $markers[] = Marker::make($kommun->lat, $kommun->lng)
                ->title($kommun->kommun)
                ->popupContent($kommun->kommun.': '.number_format($kommun->personer_count).' personer')
                ->color($this->getMarkerColor($kommun->personer_count));
        }

        return $markers;
    }

    protected function getTotalKommuner(): int
    {
        return RatsitKommun::query()
            ->whereNotNull('lat')
            ->whereNotNull('lng')
            ->count();
    }

    protected function getTotalPersoner(): int
    {
        return (int) RatsitKommun::query()
            ->whereNotNull('lat')
            ->whereNotNull('lng')
            ->sum('personer_count');
    }

    protected function getMarkerColor(int $personerCount): Color
    {
        if ($personerCount > 100000) {
            return Color::Red;
        }
        if ($personerCount > 50000) {
            return Color::Orange;
        }
        if ($personerCount > 20000) {
            return Color::Gold;
        }

        return Color::Blue;
    }
}
