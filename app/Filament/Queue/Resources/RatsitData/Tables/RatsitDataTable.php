<?php

namespace App\Filament\Queue\Resources\RatsitData\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use App\Actions\TransferRatsitDataToRingaDataAction;
use App\Filament\Exports\RatsitDataExporter;
use App\Models\RatsitData;
use Filament\Actions\BulkAction;
use Filament\Actions\ExportBulkAction;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Illuminate\Support\Collection;

class RatsitDataTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID')
                    ->sortable()
                    ->weight('medium')
                    ->limit(50),
                TextColumn::make('gatuadress')
                    ->label('Address')
                    ->searchable()
                    ->sortable()
                    ->limit(50)
                    ->toggleable(),
                TextColumn::make('postnummer')
                    ->label('Postnummer')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('postort')
                    ->label('City')
                    ->searchable()
                    ->sortable(),
                                TextColumn::make('personnamn')
                    ->label('Name')
                    ->searchable()
                    ->sortable()
                    ->weight('medium')
                    ->limit(50),
                TextColumn::make('personnummer')
                    ->label('Personnummer')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('alder')
                    ->label('Age')
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('kon')
                    ->label('Gender')
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('forsamling')
                    ->label('Parish')
                    ->searchable()
                    ->sortable()
                    ->toggleable()
                    ->toggledHiddenByDefault(true),
                TextColumn::make('kommun')
                    ->label('Municipality')
                    ->searchable()
                    ->sortable()
                    ->toggleable()
                    ->toggledHiddenByDefault(true),
                TextColumn::make('lan')
                    ->label('County')
                    ->searchable()
                    ->sortable()
                    ->toggleable()
                    ->toggledHiddenByDefault(true),
                TextColumn::make('telefon')
                    ->label('Phone')
                    ->searchable()
                    ->toggleable()
                    ->toggledHiddenByDefault(false),
                TextColumn::make('telfonnummer')
                    ->label('Alt Phone')
                    ->searchable()
                    ->toggleable()
                    ->toggledHiddenByDefault(false),
                IconColumn::make('is_active')
                    ->label('Active')
                    ->boolean()
                    ->sortable()
                    ->toggleable()
                    ->toggledHiddenByDefault(true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
