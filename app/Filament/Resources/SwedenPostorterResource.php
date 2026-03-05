<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SwedenPostorterResource\Pages;
use App\Models\SwedenPostorter;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables;
use Filament\Tables\Table;

class SwedenPostorterResource extends Resource
{
    protected static ?string $model = SwedenPostorter::class;

    protected static \BackedEnum|string|null $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Forms\Components\TextInput::make('post_ort')
                    ->required(),
                Forms\Components\TextInput::make('kommun'),
                Forms\Components\TextInput::make('lan'),
                Forms\Components\TextInput::make('latitude'),
                Forms\Components\TextInput::make('longitude'),
                Forms\Components\TextInput::make('personer')->numeric(),
                Forms\Components\TextInput::make('foretag')->numeric(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('post_ort'),
                Tables\Columns\TextColumn::make('kommun'),
                Tables\Columns\TextColumn::make('lan'),
                Tables\Columns\TextColumn::make('latitude'),
                Tables\Columns\TextColumn::make('longitude'),
                Tables\Columns\TextColumn::make('personer'),
                Tables\Columns\TextColumn::make('foretag'),
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
                \Filament\Infolists\Components\TextEntry::make('post_ort'),
                \Filament\Infolists\Components\TextEntry::make('kommun'),
                \Filament\Infolists\Components\TextEntry::make('lan'),
                \Filament\Infolists\Components\TextEntry::make('latitude'),
                \Filament\Infolists\Components\TextEntry::make('longitude'),
                \Filament\Infolists\Components\TextEntry::make('personer'),
                \Filament\Infolists\Components\TextEntry::make('foretag'),
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
            'index' => Pages\ListSwedenPostorters::route('/'),
            'create' => Pages\CreateSwedenPostorter::route('/create'),
            'edit' => Pages\EditSwedenPostorter::route('/{record}/edit'),
            'view' => Pages\ViewSwedenPostorter::route('/{record}'),
        ];
    }
}
