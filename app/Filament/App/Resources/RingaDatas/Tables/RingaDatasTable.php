<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDatas\Tables;

use App\Models\RingaData;
use Filament\Actions;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class RingaDatasTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('gatuadress', 'asc')
            ->toolbarActions([
            ])
            ->headerActions([

            ])
            ->columns([
                TextColumn::make('fornamn')
                    ->sortable(),

                TextColumn::make('efternamn')
                    ->sortable(),
                TextColumn::make('gatuadress')
                    ->sortable(),
                TextColumn::make('postort')
                    ->sortable(),
                TextColumn::make('telefon'),
                TextColumn::make('outcome')
                    ->sortable()
                    ->badge(),
                TextColumn::make('attempts')
                    ->sortable()
                    ->alignCenter(),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->hidden()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->hidden()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                Actions\Action::make('view_details')
                    ->label('Ring')
                    ->icon('heroicon-o-phone-arrow-up-right')
                    ->color('primary')
                    ->url(fn (RingaData $record) => 'tel:'.$record->telefon),
            ]);
    }

    private function getHeaderActions(): array
    {
        return [

        ];
    }
}
