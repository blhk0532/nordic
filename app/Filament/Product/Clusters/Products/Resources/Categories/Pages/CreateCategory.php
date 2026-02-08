<?php

declare(strict_types=1);

namespace App\Filament\Product\Clusters\Products\Resources\Categories\Pages;

use App\Filament\Product\Clusters\Products\Resources\Categories\CategoryResource;
use Filament\Resources\Pages\CreateRecord;

final class CreateCategory extends CreateRecord
{
    protected static string $resource = CategoryResource::class;
}
