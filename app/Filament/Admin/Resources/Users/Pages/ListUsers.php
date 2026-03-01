<?php

declare(strict_types=1);

namespace App\Filament\Admin\Resources\Users\Pages;

use App\Filament\Admin\Resources\Users\UserResource;
use AymanAlhattami\FilamentPageWithSidebar\FilamentPageSidebar;
use AymanAlhattami\FilamentPageWithSidebar\PageNavigationItem;
use AymanAlhattami\FilamentPageWithSidebar\Traits\HasPageSidebar;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListUsers extends ListRecords
{
    use HasPageSidebar;

    protected static string $resource = UserResource::class;

    protected function getSidebar(): FilamentPageSidebar
    {
        return FilamentPageSidebar::make()
            ->setNavigationItems([
                PageNavigationItem::make('Create Users')
                    ->url(self::getUrl())
                    ->icon('heroicon-o-users'),
                PageNavigationItem::make('Create User')
                    ->url('/create')
                    ->icon('heroicon-o-user-plus'),
            ]);
    }

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
