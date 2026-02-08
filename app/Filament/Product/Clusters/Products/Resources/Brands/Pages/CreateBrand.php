<?php

declare(strict_types=1);

namespace App\Filament\Product\Clusters\Products\Resources\Brands\Pages;

use App\Filament\Product\Clusters\Products\Resources\Brands\BrandResource;
use Filament\Resources\Pages\CreateRecord;

final class CreateBrand extends CreateRecord
{
    protected static string $resource = BrandResource::class;
}
