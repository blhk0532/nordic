<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RetryOutcomes\Widgets;

use App\Filament\App\Resources\RetryOutcomes\RetryOutcomeResource;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class RetryOutcomeWidget extends BaseWidget
{
    protected static ?string $heading = ' ';

    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        $userId = auth()->id();

        return $table
            ->query(fn () => RetryOutcomeResource::getEloquentQuery())
            ->columns([
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
                TextColumn::make('personnamn')
                    ->label('Namn')
                    ->searchable(['fornamn', 'efternamn', 'personnamn']),
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
                TextColumn::make('attempts')
                    ->label('Försök')
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('available_at')
                    ->label('Återkom')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->toggleable(),
            ])
            ->defaultSort('available_at', 'asc')
            ->filters([
                //
            ]);
    }
}
