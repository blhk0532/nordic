<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Bookings\Tables;

use Adultdate\FilamentBooking\Models\Booking\Booking;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Grouping\Group;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class BookingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->query(fn () => Booking::query()->with(['client', 'serviceUser'])->where('booking_user_id', Auth::id()))
            ->columns([
                TextColumn::make('number')
                    ->label('Bokningsnummer')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('client.name')
                    ->label('Kund Namn')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('client.address')
                    ->label('Adress')
                    ->searchable()
                    ->toggleable()
                    ->sortable(),
                TextColumn::make('client.phone')
                    ->label('Telefon')
                    ->searchable()
                    ->toggleable()
                    ->sortable(),
                TextColumn::make('serviceUser.name')
                    ->label('Tekniker Namn')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->label('Bokningsdatum')
                    ->date()
                    ->toggleable(),
                TextColumn::make('status')
                    ->badge(),

            ])
            ->filters([
                TrashedFilter::make(),

                Filter::make('created_at')
                    ->label('Booking date')
                    ->schema([
                        // keep simple - use Filament datepickers if desired
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query;
                    })
                    ->indicateUsing(function (array $data): array {
                        return [];
                    }),
            ])
            ->recordActions([
                EditAction::make()
                    ->slideOver()
                    ->extraModalFooterActions([
                        DeleteAction::make()
                            ->record(fn ($record) => $record),
                    ]),
                DeleteAction::make(),
            ])
            ->groupedBulkActions([
                DeleteBulkAction::make(),
            ])
            ->groups([
                Group::make('created_at')
                    ->label('Booking date')
                    ->date()
                    ->collapsible(),
            ]);
    }
}
