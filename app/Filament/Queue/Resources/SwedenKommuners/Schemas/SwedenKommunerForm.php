<?php

namespace App\Filament\Queue\Resources\SwedenKommuners\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class SwedenKommunerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('kommun')
                    ->required(),
                TextInput::make('lan')
                    ->required(),
                TextInput::make('personer')
                    ->numeric(),
                TextInput::make('foretag')
                    ->numeric(),
                TextInput::make('latitude'),
                TextInput::make('longitude')
                    ->required(),
            ]);
    }
}
