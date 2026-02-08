<?php

declare(strict_types=1);

namespace App\Filament\Product\Clusters\Products\Resources\Categories\Pages;

use Adultdate\FilamentBooking\Filament\Imports\Booking\CategoryImporter;
use App\Filament\Product\Clusters\Products\Resources\Categories\CategoryResource;
use Filament\Actions\CreateAction;
use Filament\Actions\ImportAction;
use Filament\Resources\Pages\ListRecords;

final class ListCategories extends ListRecords
{
    protected static string $resource = CategoryResource::class;

    protected function getActions(): array
    {
        return [
            ImportAction::make()
                ->importer(CategoryImporter::class),
            CreateAction::make(),
        ];
    }
}
