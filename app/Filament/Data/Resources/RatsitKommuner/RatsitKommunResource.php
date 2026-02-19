<?php

declare(strict_types=1);

namespace App\Filament\Data\Resources\RatsitKommuner;

use App\Filament\Data\Resources\RatsitKommuner\Pages\ListRatsitKommuner;
use App\Models\RatsitKommun;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Notifications\Notification;
use Illuminate\Database\Eloquent\Collection;
use Symfony\Component\Process\Process;
use Throwable;
use UnitEnum;

class RatsitKommunResource extends Resource
{
    protected static ?string $model = RatsitKommun::class;

    protected static ?int $navigationSort = 0;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedBuildingOffice2;

    protected static ?string $navigationLabel = 'Ratsit Kommuner';

    protected static UnitEnum|string|null $navigationGroup = 'Ratsit Databas';

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('kommun')->searchable()->sortable(),
                TextColumn::make('personer_count')->label('Personer')->numeric()->sortable(),
                TextColumn::make('foretag_count')->label('Företag')->numeric()->sortable(),
                TextColumn::make('personer_link')->label('Personer Link')->url(fn ($record) => $record->personer_link)->openUrlInNewTab()->toggleable(),
                TextColumn::make('foretag_link')->label('Företag Link')->url(fn ($record) => $record->foretag_link)->openUrlInNewTab()->toggleable(),
                TextColumn::make('updated_at')->dateTime()->since()->sortable()->toggleable(),
            ])
            ->defaultSort('updated_at', 'desc')
            ->paginated([10, 25, 50, 100])
            ->defaultPaginationPageOption(25)
            ->toolbarActions([
                BulkActionGroup::make([
                    BulkAction::make('run_ratsit_person_kommuner')
                        ->label('Run Ratsit Kommuner')
                        ->icon('heroicon-o-play')
                        ->color('primary')
                        ->requiresConfirmation()
                        ->modalHeading('Run Ratsit kommuner scraper')
                        ->modalDescription('This will start the background Node scraper that fetches municipality data from Ratsit. The process runs asynchronously.')
                        ->action(function (Collection $records): void {
                            try {
                                // Dispatch a queued job that will run the Node scraper and wait for it to finish.
                                \App\Jobs\RunRatsitKommunerScraperJob::dispatch($records->pluck('personer_link')->values()->all())->onQueue('ratsit');

                                Notification::make()
                                    ->title('Ratsit kommuner scraper job dispatched')
                                    ->success()
                                    ->body('The scraper job has been queued to the "ratsit" queue.')
                                    ->send();
                            } catch (Throwable $e) {
                                Notification::make()
                                    ->title('Failed to dispatch scraper job')
                                    ->danger()
                                    ->body($e->getMessage())
                                    ->send();
                            }
                        }),
                ]),
            ]);
    }

    public static function form(Schema $schema): Schema
    {
        return Schema::make();
    }

    public static function getPages(): array
    {
        return [
            'index' => ListRatsitKommuner::route('/'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) self::getModel()::count();
    }
}
