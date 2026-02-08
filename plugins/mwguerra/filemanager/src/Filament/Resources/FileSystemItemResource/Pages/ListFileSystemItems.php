<?php

declare(strict_types=1);

namespace MWGuerra\FileManager\Filament\Resources\FileSystemItemResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use MWGuerra\FileManager\Filament\Resources\FileSystemItemResource;

final class ListFileSystemItems extends ListRecords
{
    protected static string $resource = FileSystemItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
