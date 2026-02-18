<?php

declare(strict_types=1);

namespace App\Filament\Data\Resources\RatsitPostorter;

use App\Filament\Data\Resources\RatsitPostorter\Pages\ListRatsitPostorter;
use App\Models\RatsitPostort;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Tables\Filters\SelectFilter;
use App\Jobs\RunRatsitPersonAdressJob;
use Filament\Notifications\Notification;
use Filament\Actions\BulkAction;
use Illuminate\Support\Collection;
use UnitEnum;

class RatsitPostortResource extends Resource
{
    protected static ?string $model = RatsitPostort::class;

    protected static ?int $navigationSort = 2;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedMap;

    protected static ?string $navigationLabel = 'Ratsit Postorter';

    protected static UnitEnum|string|null $navigationGroup = 'Ratsit Databas';

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('post_ort')->searchable()->sortable(),
                TextColumn::make('post_nummer')->searchable()->sortable(),
                TextColumn::make('personer_count')->label('Personer')->numeric()->sortable(),
                TextColumn::make('personer_link_status')->label('P Adress')->sortable(),
                TextColumn::make('personer_link')->label('Personer Link')->sortable()->url(fn ($record) => $record->personer_link)->openUrlInNewTab()->toggleable(),
                TextColumn::make('foretag_count')->label('Företag')->numeric()->sortable(),
                TextColumn::make('foretag_link')->label('Företag Link')->url(fn ($record) => $record->foretag_link)->openUrlInNewTab()->toggleable(),
                TextColumn::make('updated_at')->dateTime()->since()->sortable()->toggleable(),
            ])
            ->filters([
                SelectFilter::make('post_ort')
                    ->label('Post Ort')
                    ->searchable()
                    ->options(fn () => RatsitPostort::query()
                        ->select('post_ort')
                        ->distinct()
                        ->orderBy('post_ort')
                        ->pluck('post_ort', 'post_ort')
                        ->all()),
            ])
            ->bulkActions([
                BulkAction::make('run_ratsit_person_adresser')
                    ->label('Run Ratsit Scraper')
                    ->requiresConfirmation()
                    ->action(function (Collection $records) {
                        foreach ($records as $record) {
                            $url = $record->personer_link ?: null;
                            RunRatsitPersonAdressJob::dispatch($record->id, $url)->onQueue('ratsit');
                        }

                        Notification::make()
                            ->title('Queued Ratsit jobs')
                            ->body('Ratsit scraping jobs have been queued for selected rows.')
                            ->success()
                            ->send();
                    })
                    ->color('primary'),
            ])
            ->defaultSort('updated_at', 'desc')
            ->paginated([10, 25, 50, 100])
            ->defaultPaginationPageOption(25);
    }

    public static function form(Schema $schema): Schema
    {
        return Schema::make();
    }

    public static function getPages(): array
    {
        return [
            'index' => ListRatsitPostorter::route('/'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) self::getModel()::count();
    }
}
