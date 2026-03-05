<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Contacts\Widgets;

use App\Models\RingaData;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class ContactWidget extends BaseWidget
{
    protected static ?string $heading = ' ';

    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        $userId = auth()->id();

        return $table
            ->query(fn () => RingaData::getContactQuery(RingaData::query())->where('user_id', $userId))
            ->columns([
                TextColumn::make('personnamn')
                    ->label('Namn')
                    ->searchable(),
                TextColumn::make('gatuadress')
                    ->label('Adress')
                    ->searchable(),
                TextColumn::make('telefon')
                    ->label('Telefon')
                    ->formatStateUsing(fn ($state) => is_array($state) ? ($state[0] ?? '') : $state),
            ])
            ->toolbarActions([

            ])
            ->paginated(true)
            ->emptyStateHeading('Inga resultat hittades')
            ->emptyStateDescription('Du har ingen utfallshistorik.');
    }
}
