<?php

declare(strict_types=1);

namespace App\Filament\Booking\Clusters\Services\Resources\Bookings\Tables;

use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\Summarizers\Sum;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Grouping\Group;
use Filament\Tables\Table;
use Guava\FilamentIconSelectColumn\Tables\Columns\IconSelectColumn;
use Illuminate\Database\Eloquent\Builder;

class BookingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('number')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('client.name')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('total_price')
                    ->searchable()
                    ->sortable()
                    ->summarize([
                        Sum::make()
                            ->money(),
                    ]),
                IconSelectColumn::make('status')
                    ->label('Status')
                    ->options(\Adultdate\FilamentBooking\Enums\BookingStatus::toOptions())
                    ->icons([
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Booked->getIcon() => 'heroicon-o-calendar',
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Pending->getIcon() => 'heroicon-o-clock',
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Confirmed->getIcon() => 'heroicon-o-check-circle',
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Updated->getIcon() => 'heroicon-o-pencil-square',
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Cancelled->getIcon() => 'heroicon-o-x-circle',
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Problem->getIcon() => 'heroicon-o-exclamation-triangle',
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Complete->getIcon() => 'heroicon-o-check-badge',
                    ])
                    ->colors([
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Booked->value => 'primary',
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Pending->value => 'gray',
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Confirmed->value => 'warning',
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Updated->value => 'info',
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Cancelled->value => 'danger',
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Problem->value => 'danger',
                        \Adultdate\FilamentBooking\Enums\BookingStatus::Complete->value => 'success',
                    ]),
                TextColumn::make('created_at')
                    ->label('Booking date')
                    ->date()
                    ->toggleable(),
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
                EditAction::make(),
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
