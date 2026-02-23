<?php

declare(strict_types=1);

namespace App\Filament\Data\Widgets;

use App\Models\RatsitPostort;
use App\Models\SwedishKommun;
use EduardoRibeiroDev\FilamentLeaflet\Enums\Color;
use EduardoRibeiroDev\FilamentLeaflet\Support\Markers\Marker;
use EduardoRibeiroDev\FilamentLeaflet\Widgets\MapWidget;
use Livewire\Attributes\On;

class PostorterMapWidget extends MapWidget
{
    protected static ?int $sort = 1;

    protected ?string $heading = 'Sweden Kommuner Map';

    protected array $mapCenter = [60.1282, 18.6435];

    protected int $defaultZoom = 5;

    protected int $mapHeight = 600;

    public ?string $selectedKommun = null;

    #[On('show-postorter')]
    public function handleShowPostorter(string $kommun): void
    {
        $this->selectedKommun = $kommun;
        $this->heading = "Postnummer i {$kommun}";
    }

    #[On('clear-selection')]
    public function handleClearSelection(): void
    {
        $this->selectedKommun = null;
        $this->heading = 'Sweden Kommuner Map';
    }

    protected function getMarkers(): array
    {
        if ($this->selectedKommun) {
            return $this->getPostorterMarkersForKommun();
        }

        return $this->getKommunerMarkers();
    }

    protected function getKommunerMarkers(): array
    {
        $kommuner = SwedishKommun::whereNotNull('lat')
            ->whereNotNull('lng')
            ->get();

        $markers = [];

        foreach ($kommuner as $kommun) {
            $postortCount = RatsitPostort::whereRaw('LOWER(COALESCE(kommun, personer_kommun)) LIKE ?', ['%'.strtolower($kommun->kommun).'%'])
                ->where('personer_count', '>', 0)
                ->count();

            if ($postortCount === 0) {
                continue;
            }

            $markers[] = Marker::make((float) $kommun->lat, (float) $kommun->lng)
                ->title($kommun->kommun)
                ->popupContent($kommun->kommun.'<br>Län: '.$kommun->lan.'<br>Postnummer: '.number_format($postortCount).'<br>Klicka för att se alla postnummer')
                ->color($this->getKommunColor($postortCount));
        }

        return $markers;
    }

    protected function getKommunColor(int $postortCount): Color
    {
        if ($postortCount > 100) {
            return Color::Red;
        }
        if ($postortCount > 50) {
            return Color::Orange;
        }
        if ($postortCount > 20) {
            return Color::Gold;
        }

        return Color::Blue;
    }

    protected function getPostorterMarkersForKommun(): array
    {
        $kommun = SwedishKommun::whereRaw('LOWER(kommun) = ?', [strtolower($this->selectedKommun)])->first();

        if (! $kommun) {
            return [];
        }

        $postorter = RatsitPostort::whereRaw('LOWER(COALESCE(kommun, personer_kommun)) LIKE ?', ['%'.strtolower($this->selectedKommun).'%'])
            ->where('personer_count', '>', 0)
            ->selectRaw('post_nummer, post_ort, SUM(personer_count) as personer_count, SUM(foretag_count) as foretag_count')
            ->groupBy('post_nummer', 'post_ort')
            ->get();

        $markers = [];
        $index = 0;
        $total = $postorter->count();

        foreach ($postorter as $postort) {
            $latOffset = sin($index * 2 * M_PI / max($total, 1)) * 0.1;
            $lngOffset = cos($index * 2 * M_PI / max($total, 1)) * 0.1;

            $markers[] = Marker::make(
                (float) $kommun->lat + $latOffset,
                (float) $kommun->lng + $lngOffset
            )
                ->title($postort->post_nummer.' - '.$postort->post_ort)
                ->popupContent($postort->post_nummer.' '.$postort->post_ort.'<br>Personer: '.number_format($postort->personer_count).'<br>Företag: '.number_format($postort->foretag_count))
                ->color(Color::Blue);
            $index++;
        }

        return $markers;
    }
}
