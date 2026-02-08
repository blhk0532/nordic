<?php

declare(strict_types=1);

namespace Adultdate\FilamentShop\Filament\Clusters\Services\Resources\Brands\Pages;

use Adultdate\FilamentShop\Filament\Clusters\Services\Resources\Brands\BrandResource;
use Filament\Resources\Pages\CreateRecord;

final class CreateBrand extends CreateRecord
{
    protected static string $resource = BrandResource::class;
}
