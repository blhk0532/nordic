<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\TerminalLogResource\Pages;

use Filament\Actions\Action;
use Filament\Resources\Pages\ViewRecord;
use App\Filament\Queue\Resources\TerminalLogResource;

class ViewTerminalLog extends ViewRecord
{
    protected static string $resource = TerminalLogResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('back')
                ->label(__('web-terminal::terminal.resource.back'))
                ->icon('heroicon-o-arrow-left')
                ->url(TerminalLogResource::getUrl('index'))
                ->color('gray'),
        ];
    }
}
