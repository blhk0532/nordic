<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RetryOutcomes\Tables;

use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class RetryOutcomesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID')
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('personnamn')
                    ->label('Namn')
                    ->searchable(['fornamn', 'efternamn', 'personnamn']),
                TextColumn::make('telefon')
                    ->label('Telefon')
                    ->searchable(),
                TextColumn::make('gatuadress')
                    ->label('Adress')
                    ->searchable()
                    ->toggleable(),
                TextColumn::make('postnummer')
                    ->label('Postnr')
                    ->toggleable(),
                TextColumn::make('postort')
                    ->label('Ort')
                    ->toggleable(),
                TextColumn::make('outcome')
                    ->label('Utfall')
                    ->badge()
                    ->toggleable(),
                TextColumn::make('outcome_category')
                    ->label('Kategori')
                    ->badge()
                    ->color(fn (?string $state): string => match ($state) {
                        'Retry' => 'warning',
                        'Later' => 'info',
                        default => 'gray',
                    })
                    ->toggleable(),
                TextColumn::make('aterkom_at')
                    ->label('Återkom')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('attempts')
                    ->label('Försök')
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('user.name')
                    ->label('Ansvarig')
                    ->toggleable(),
                TextColumn::make('created_at')
                    ->label('Skapad')
                    ->dateTime('d M Y')
                    ->toggleable()
                    ->sortable(),
            ])
            ->defaultSort('aterkom_at', 'asc')
            ->filters([
                //
            ]);
    }
}
