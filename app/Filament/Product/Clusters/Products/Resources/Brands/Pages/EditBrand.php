<?php

declare(strict_types=1);

namespace App\Filament\Product\Clusters\Products\Resources\Brands\Pages;

use App\Filament\Product\Clusters\Products\Resources\Brands\BrandResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

final class EditBrand extends EditRecord
{
    protected static string $resource = BrandResource::class;

    protected function getActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
