<?php

declare(strict_types=1);

namespace App\Filament\App\Pages;

use App\Filament\App\Widgets\KommunerMapWidget;
use BackedEnum;
use Filament\Pages\Dashboard as BaseDashboard;
use Wallacemartinss\FilamentIconPicker\Enums\Remix;

class KommunerMap extends BaseDashboard
{
    protected static ?string $title = 'Kommuner Map';

    protected static ?string $slug = 'kommuner-map-page';

    protected static ?string $navigationLabel = 'Kommuner Map';

    protected static string|BackedEnum|null $navigationIcon = Remix::RiMap2Fill;

    protected static ?int $navigationSort = 100;

    public function getWidgets(): array
    {
        return [
            KommunerMapWidget::class,
        ];
    }

    public function getColumns(): int|array
    {
        return [
            'default' => 1,
        ];
    }
}
