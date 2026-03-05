<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SwedenGatorResource\Pages;
use App\Models\SwedenGator;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables;
use Filament\Tables\Table;

class SwedenGatorResource extends Resource
{
    protected static ?string $model = SwedenGator::class;

    protected static \BackedEnum|string|null $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Forms\Components\TextInput::make('gata')
                    ->required(),
                Forms\Components\TextInput::make('post_nummer')
                    ->required(),
                Forms\Components\TextInput::make('post_ort')
                    ->required(),
                Forms\Components\TextInput::make('lan')
                    ->required(),
                Forms\Components\TextInput::make('personer')->numeric()
                    ->required(),
                Forms\Components\TextInput::make('foretag')->numeric()
                    ->required(),
                Forms\Components\TextInput::make('latitude')
                    ->required(),
                Forms\Components\TextInput::make('longitude')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('gata')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('post_nummer')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('post_ort')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('lan')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('personer'),
                Tables\Columns\TextColumn::make('foretag'),
                Tables\Columns\TextColumn::make('latitude'),
                Tables\Columns\TextColumn::make('longitude'),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                \Filament\Actions\EditAction::make(),
                \Filament\Actions\DeleteAction::make(),
            ])
            ->toolbarActions([
                \Filament\Actions\BulkActionGroup::make([
                    \Filament\Actions\DeleteBulkAction::make(),

                ]),
            ]);
    }

    public static function infolist(Schema $schema): Schema
    {
        return $schema
            ->components([
                \Filament\Infolists\Components\TextEntry::make('gata'),
                \Filament\Infolists\Components\TextEntry::make('post_nummer'),
                \Filament\Infolists\Components\TextEntry::make('post_ort'),
                \Filament\Infolists\Components\TextEntry::make('lan'),
                \Filament\Infolists\Components\TextEntry::make('personer'),
                \Filament\Infolists\Components\TextEntry::make('foretag'),
                \Filament\Infolists\Components\TextEntry::make('latitude'),
                \Filament\Infolists\Components\TextEntry::make('longitude'),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSwedenGators::route('/'),
            'create' => Pages\CreateSwedenGator::route('/create'),
            'edit' => Pages\EditSwedenGator::route('/{record}/edit'),
            'view' => Pages\ViewSwedenGator::route('/{record}'),
        ];
    }
}
