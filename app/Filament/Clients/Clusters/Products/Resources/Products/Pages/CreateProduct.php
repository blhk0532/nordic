<?php

declare(strict_types=1);

namespace App\Filament\Clients\Clusters\Products\Resources\Products\Pages;

use App\Filament\Clients\Clusters\Products\Resources\Products\ProductResource;
use Filament\Resources\Pages\CreateRecord;

class CreateProduct extends CreateRecord
{
    protected static string $resource = ProductResource::class;
}
