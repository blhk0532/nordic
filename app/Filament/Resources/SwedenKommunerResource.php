<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SwedenKommunerResource\Pages;
use App\Models\SwedenKommuner;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SwedenKommunerResource extends Resource
{
    protected static ?string $model = SwedenKommuner::class;

    protected static \BackedEnum|string|null $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Forms\Components\TextInput::make('kommun')
                    ->required()
                    ->unique(ignoreRecord: true),
                Forms\Components\TextInput::make('lan')
                    ->required(),
                Forms\Components\TextInput::make('personer')->numeric(),
                Forms\Components\TextInput::make('foretag')->numeric(),
                Forms\Components\TextInput::make('latitude'),
                Forms\Components\TextInput::make('longitude')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('kommun')
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
                Tables\Filters\TrashedFilter::make(),
            ])
            ->recordActions([
                \Filament\Actions\EditAction::make(),
                \Filament\Actions\DeleteAction::make(),
            ])
            ->toolbarActions([
                \Filament\Actions\BulkActionGroup::make([
                    \Filament\Actions\DeleteBulkAction::make(),
                    \Filament\Actions\ForceDeleteBulkAction::make(),
                    \Filament\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function infolist(Schema $schema): Schema
    {
        return $schema
            ->components([
                \Filament\Infolists\Components\TextEntry::make('kommun'),
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
            'index' => Pages\ListSwedenKommuners::route('/'),
            'create' => Pages\CreateSwedenKommuner::route('/create'),
            'edit' => Pages\EditSwedenKommuner::route('/{record}/edit'),
            'view' => Pages\ViewSwedenKommuner::route('/{record}'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
