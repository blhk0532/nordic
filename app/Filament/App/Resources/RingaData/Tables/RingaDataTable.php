<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaData\Tables;

use App\Enums\Outcomes;
use App\Enums\OutcomeType;
use App\Enums\Priority;
use App\Models\BookingCalendar;
use App\Models\Campaign;
use App\Models\RatsitData;
use App\Models\RingaData;
use App\Models\Team;
use App\Models\User;
use Faker\Factory as Faker;
use Filament\Actions\Action;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;
use Guava\FilamentIconSelectColumn\Tables\Columns\IconSelectColumn;
use Illuminate\Database\Eloquent\Collection;
use Shreejan\ActionableColumn\Tables\Columns\ActionableColumn;
use Webbingbrasil\FilamentCopyActions\Tables\CopyableTextColumn;
use Zvizvi\UserFields\Components\UserColumn;
use Zvizvi\UserFields\Components\UserSelectColumn;
use AlperenErsoy\FilamentExport\Actions\FilamentExportBulkAction;
use AlperenErsoy\FilamentExport\Actions\FilamentExportHeaderAction;

final class RingaDataTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->headerActions([
                \Filament\Actions\Action::make('advancedExport')
                    ->label('Export')
                    ->color('success')
                    ->icon('heroicon-o-arrow-down-tray')
                    ->modal()
                    ->modalHeading('Export Records')
                    ->modalDescription('Select the columns you want to export. Maximum of 2000 records will be exported.')
                    ->schema([
                        \Filament\Forms\Components\Select::make('order_column')
                            ->label('Order by Column')
                            ->options(\App\Models\RingaData::getExportColumns())
                            ->default('created_at'),
                        \Filament\Forms\Components\Select::make('order_direction')
                            ->label('Order Direction')
                            ->options([
                                'asc' => 'Ascending',
                                'desc' => 'Descending',
                            ])
                            ->default('desc'),
                        \Filament\Forms\Components\Repeater::make('columns')
                            ->label('Configure Export Columns')
                            ->schema([
                                \Filament\Forms\Components\Select::make('field')
                                    ->label('Field')
                                    ->options(\App\Models\RingaData::getExportColumns())
                                    ->required(),
                                \Filament\Forms\Components\TextInput::make('title')
                                    ->label('Custom Title')
                                    ->required(),
                            ])
                            ->default(\App\Models\RingaData::getDefaultExportColumns())
                            ->addActionLabel('Add Column')
                            ->collapsible(),
                    ])
                    ->action(function () {
                        // Simple test export - just export first 10 records directly
                        $data = \App\Models\RingaData::query()->limit(10)->get();

                        return response()->streamDownload(function () use ($data) {
                            $handle = fopen('php://output', 'w');
                            // CSV header
                            fputcsv($handle, ['ID', 'Name', 'Phone', 'Address', 'Postnr', 'Ort']);

                            foreach ($data as $row) {
                                fputcsv($handle, [
                                    $row->id,
                                    $row->personnamn ?? '',
                                    $row->telefon ?? '',
                                    $row->gatuadress ?? '',
                                    $row->postnummer ?? '',
                                    $row->postort ?? '',
                                ]);
                            }
                            fclose($handle);
                        }, 'test-export.csv', ['Content-Type' => 'text/csv']);
                    }),
                \EightyNine\ExcelImport\ExcelImportAction::make()
                    ->color('primary'),
                \Filament\Actions\CreateAction::make(),
            ])
            ->columns([
                UserColumn::make('user')
                    ->label('Användare'),
                ActionableColumn::make('outcome_category')
                    ->badge()
                    ->sortable()
                    ->default('...')
                    ->toggleable(false)
                    ->label('Utfall')
                    ->color(
                        static fn($state) => $state instanceof OutcomeType
                            ? $state->getColor()
                            : (is_string($state) ? OutcomeType::tryFrom($state)?->getColor() ?? 'success' : 'success')
                    )
                    ->actionIcon(
                        static fn($state) => $state instanceof OutcomeType
                            ? $state->getIcon()
                            : (is_string($state) ? OutcomeType::tryFrom($state)?->getIcon() ?? 'heroicon-o-clock' : 'heroicon-o-clock')
                    )
                    ->actionIconColor(
                        static fn($state) => $state instanceof OutcomeType
                            ? $state->getColor()
                            : (is_string($state) ? OutcomeType::tryFrom($state)?->getColor() ?? 'success' : 'success')
                    )
                    ->clickableColumn()
                    ->tapAction(
                        Action::make('changeOutcome')
                            ->label('Change Outcome')
                            ->tooltip('Click to change outcome')
                            ->schema([
                                Select::make('outcome')
                                    ->options(fn() => collect(OutcomeType::cases())->mapWithKeys(
                                        fn(OutcomeType $outcome) => [$outcome->value => $outcome->getLabel()]
                                    )->toArray())
                                    ->required(),
                            ])
                            ->fillForm(fn($record) => [
                                'outcome' => $record->outcome,
                            ])
                            ->action(function ($record, array $data) {
                                $record->update($data);
                            })
                    ),
                IconSelectColumn::make('state')
                    ->options(fn() => collect(Priority::cases())->mapWithKeys(
                        fn(Priority $priority) => [$priority->value => $priority->getLabel()]
                    )->toArray())
                    ->icons([
                        \Adultdate\FilamentBooking\Enums\Pending::class => 'heroicon-o-clock',
                        \Adultdate\FilamentBooking\Enums\Paid::class => 'heroicon-o-check-circle',
                        \Adultdate\FilamentBooking\Enums\Failed::class => 'heroicon-o-x-circle',
                    ]),
                TextColumn::make('personnamn')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                TextColumn::make('fodelsedag')
                    ->label('Age')
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->state(fn(RingaData $record) => $record->fodelsedag ? \Carbon\Carbon::parse($record->fodelsedag)->age : '-')
                    ->sortable(),
                TextColumn::make('gatuadress')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                TextColumn::make('postnummer')
                    ->label('postnr')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('postort')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                CopyableTextColumn::make('telefon')
                    ->state(function ($record) {
                        $telefon = $record->telefon;
                        if (is_array($telefon)) {
                            $telefon = $telefon[0] ?? '';
                        }
                        if (is_string($telefon) && str_contains($telefon, ',')) {
                            $telefon = explode(',', $telefon)[0];
                        }
                        // Remove [, ], ", - characters and replace +46 with 0
                        $telefon = preg_replace('/[\[\]\"\-]/', '', $telefon);
                        $telefon = preg_replace('/^\+46/', '0', $telefon);

                        return $telefon;
                    })
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                TextColumn::make('bostadstyp')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                TextColumn::make('byggar')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                TextColumn::make('adressandring')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                TextColumn::make('agandeform')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),

                IconColumn::make('outcome')
                    ->label('🕻')
                    ->sortable()
                    ->color('gray')
                    ->tooltip(
                        fn($state) => $state instanceof Outcomes
                            ? $state->getLabel()
                            : (is_string($state) ? Outcomes::tryFrom($state)?->getLabel() ?? 'Unknown' : 'Unknown')
                    )
                    ->action(
                        Action::make('changeOutcome')
                            ->label('Change Outcome')
                            ->icon('heroicon-o-pencil')
                            ->modalHeading('Change Outcome')
                            ->modalSubmitActionLabel('Update')
                            ->schema([
                                Select::make('outcome')
                                    ->label('Select New Outcome')
                                    ->options(fn() => collect(Outcomes::cases())->mapWithKeys(
                                        fn(Outcomes $outcome) => [$outcome->value => $outcome->getLabel()]
                                    )->toArray())
                                    ->required()
                                    ->native(false)
                                    ->searchable(),
                            ])
                            ->action(function (RingaData $record, array $data): void {
                                $record->update(['outcome' => $data['outcome']]);

                                Notification::make()
                                    ->title('Outcome Updated')
                                    ->success()
                                    ->send();
                            })
                    ),
                TextColumn::make('attempts')
                    ->label('Try')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->alignCenter(),
                ToggleColumn::make('is_active')
                    ->label('Active')
                    ->sortable(),
                TextColumn::make('expires_at')
                    ->dateTime()
                    ->hidden()
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


                Filter::make('fodelsedag')
                    ->schema([
                        DatePicker::make('fodelsedag_min')
                            ->label('Min födelsedag'),
                        DatePicker::make('fodelsedag_max')
                            ->label('Max födelsedag'),
                    ])
                    ->query(function ($query, array $data) {
                        return $query
                            ->when(
                                $data['fodelsedag_min'] ?? null,
                                fn($q, $date) => $q->whereDate('fodelsedag', '>=', $date),
                            )
                            ->when(
                                $data['fodelsedag_max'] ?? null,
                                fn($q, $date) => $q->whereDate('fodelsedag', '<=', $date),
                            );
                    }),

                Filter::make('postnummer')
                    ->schema([
                        TextInput::make('postnummer')
                            ->label('Postnummer'),
                    ])
                    ->query(function ($query, array $data) {
                        return $query->when(
                            $data['postnummer'] ?? null,
                            fn($q, $postnummer) => $q->where('postnummer', 'like', '%' . $postnummer . '%'),
                        );
                    }),

                SelectFilter::make('postort')
                    ->label('City')
                    ->multiple()
                    ->searchable()
                    ->options(function () {
                        return RatsitData::query()
                            ->whereNotNull('postort')
                            ->distinct()
                            ->orderBy('postort')
                            ->pluck('postort', 'postort')
                            ->toArray();
                    }),

                SelectFilter::make('kommun')
                    ->label('Municipality')
                    ->multiple()
                    ->searchable()
                    ->options(function () {
                        return RatsitData::query()
                            ->whereNotNull('kommun')
                            ->distinct()
                            ->orderBy('kommun')
                            ->pluck('kommun', 'kommun')
                            ->toArray();
                    }),

                SelectFilter::make('lan')
                    ->label('State')
                    ->multiple()
                    ->searchable()
                    ->options(function () {
                        return RatsitData::query()
                            ->whereNotNull('lan')
                            ->distinct()
                            ->orderBy('lan')
                            ->pluck('lan', 'lan')
                            ->toArray();
                    }),

                SelectFilter::make('agandeform')
                    ->label('Ownership Form')
                    ->multiple()
                    ->searchable()
                    ->options(function () {
                        return RatsitData::query()
                            ->whereNotNull('agandeform')
                            ->distinct()
                            ->orderBy('agandeform')
                            ->pluck('agandeform', 'agandeform')
                            ->toArray();
                    }),

                SelectFilter::make('bostadstyp')
                    ->label('Housing Type')
                    ->multiple()
                    ->searchable()
                    ->options(function () {
                        return RatsitData::query()
                            ->whereNotNull('bostadstyp')
                            ->distinct()
                            ->orderBy('bostadstyp')
                            ->pluck('bostadstyp', 'bostadstyp')
                            ->toArray();
                    }),

                SelectFilter::make('campaign_id')
                    ->label('Kampanj')
                    ->options(function () {
                        $tenantId = filament()->getTenant()?->id;
                        if (! $tenantId) {
                            return [];
                        }

                        return Campaign::where('team_id', $tenantId)
                            ->pluck('title', 'id')
                            ->toArray();
                    })
                    ->searchable(),
                SelectFilter::make('outcome')
                    ->label('Outcome')
                    ->options(fn() => collect(Outcomes::cases())->mapWithKeys(
                        fn(Outcomes $outcome) => [$outcome->value => $outcome->getLabel()]
                    )->toArray())
                    ->searchable(),
                TernaryFilter::make('is_active')
                    ->label('Active')
                    ->placeholder('All records')
                    ->trueLabel('Active only')
                    ->falseLabel('Inactive only'),

            ], layout: FiltersLayout::AboveContentCollapsible)
            ->persistFiltersInSession(false)
            ->paginated([10, 25, 50, 100, 150, 200, 250, 300, 400, 500])
            ->defaultPaginationPageOption(25)
            ->recordAction('view')
            ->recordActions([
                EditAction::make()
                    ->iconButton(),
                \Filament\Actions\ViewAction::make('view')
                    ->iconButton()
                    ->icon('heroicon-o-eye')
                    ->iconButton()
                    ->modalHeading('Info')
                    ->modalWidth('xl'),
                Action::make('view_details')
                    ->iconButton()
                    ->icon('heroicon-o-phone-arrow-up-right')
                    ->color('success')
                    ->url(fn(RingaData $record) => 'tel:' . $record->telefon),

            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    FilamentExportBulkAction::make('export')
                        ->fileName('My File') // Default file name
                        ->timeFormat('m y d') // Default time format for naming exports
                        ->disablePdf() // Disable PDF format for download
                        ->disableXlsx() // Disable XLSX format for download
                        ->disableCsv() // Disable CSV format for download
                        ->defaultFormat('csv') // xlsx, csv or pdf
                        ->defaultPageOrientation('landscape') // Page orientation for pdf files. portrait or landscape
                        ->directDownload() // Download directly without showing modal
                        ->disableAdditionalColumns() // Disable additional columns input
                        ->disableFilterColumns() // Disable filter columns input
                        ->disableFileName() // Disable file name input
                        ->disableFileNamePrefix() // Disable file name prefix
                        ->disablePreview() // Disable export preview
                        ->disableTableColumns() // Disable table columns in the export
                        ->withHiddenColumns() //Show the columns which are toggled hidden
                        ->fileNameFieldLabel('File Name') // Label for file name input
                        ->formatFieldLabel('Format') // Label for format input
                        ->pageOrientationFieldLabel('Page Orientation') // Label for page orientation input
                        ->filterColumnsFieldLabel('filter columns') // Label for filter columns input
                        ->additionalColumnsFieldLabel('Additional Columns') // Label for additional columns input
                        ->additionalColumnsTitleFieldLabel('Title') // Label for additional columns' title input
                        ->additionalColumnsDefaultValueFieldLabel('Default Value') // Label for additional columns' default value input
                        ->additionalColumnsAddButtonLabel('Add Column') // Label for additional columns' add button
                        ->withColumns([TextColumn::make('additionalModelColumn')]) // Export additional model columns that aren't visible in the table results
                        ->csvDelimiter(',') // Delimiter for csv files
                        ->modifyExcelWriter(fn(\Spatie\SimpleExcel\SimpleExcelWriter $writer) => $writer->nameCurrentSheet('Sheet')) // Modify SimpleExcelWriter before download
                        ->modifyPdfWriter(fn(\Barryvdh\DomPDF\PDF|\Barryvdh\Snappy\PdfWrapper $writer) => $writer->setPaper('a4', 'landscape')) // Modify DomPdf or Snappy writer before download
                        ->formatStates([
                            'name' => fn(?RingaData $record) => strtoupper($record->name),
                        ]),
                    DeleteBulkAction::make()
                        ->label('Radera Uppgifterna'),
                    BulkAction::make('transferCampaign')
                        ->label('Kampanjöverföring')
                        ->icon('heroicon-o-arrow-path')
                        ->color('info')
                        ->schema([
                            Select::make('campaign_id')
                                ->label('Välj Kampanj')
                                ->searchable()
                                ->options(function () {
                                    $tenantId = filament()->getTenant()?->id;
                                    if (! $tenantId) {
                                        return [];
                                    }

                                    return Campaign::where('title', '!=', 'Unassigned')
                                        ->pluck('title', 'id')
                                        ->toArray();
                                })
                                ->required()
                                ->validationMessages([
                                    'required' => 'Please select a campaign.',
                                ]),
                        ])
                        ->action(function (Collection $records, array $data): void {
                            $records->each(function ($record) use ($data) {
                                $record->update(['campaign_id' => $data['campaign_id']]);
                            });

                            Notification::make()
                                ->title('Campaign transferred successfully')
                                ->success()
                                ->body(count($records) . ' record(s) transferred.')
                                ->send();
                        })
                        ->visible(fn() => in_array(auth()->user()->role, ['admin', 'super', 'super_admin', 'superadmin', 'manager'])),
                    BulkAction::make('resetResults')
                        ->label('Nollställ Resultat')
                        ->icon('heroicon-o-arrow-path-rounded-square')
                        ->color('warning')
                        ->requiresConfirmation()
                        ->modalHeading('Nollställ Resultaten')
                        ->modalDescription('Detta kommer att återställa user_id, outcome och attempts för de valda posterna.')
                        ->modalSubmitActionLabel('Nollställ')
                        ->action(function (Collection $records): void {
                            $records->each(function ($record) {
                                $record->update([
                                    'user_id' => null,
                                    'outcome' => null,
                                    'outcome_category' => null,
                                    'attempts' => 0,
                                    'is_active' => false,
                                ]);
                            });

                            Notification::make()
                                ->title('Resultat nollställda')
                                ->success()
                                ->body(count($records) . ' post(er) har nollställts.')
                                ->send();
                        })
                        ->visible(fn() => in_array(auth()->user()->role, ['admin', 'super', 'super_admin', 'superadmin', 'manager'])),
                    BulkAction::make('selectTeam')
                        ->label('Välj Arbetsgrupp')
                        ->icon('heroicon-o-user-group')
                        ->color('primary')
                        ->schema([
                            Select::make('team_id')
                                ->label('Välj Arbetsgrupp')
                                ->searchable()
                                ->options(Team::pluck('name', 'id')->toArray())
                                ->required()
                                ->validationMessages([
                                    'required' => 'Vänligen välj en arbetsgrupp.',
                                ]),
                        ])
                        ->action(function (Collection $records, array $data): void {
                            $records->each(function ($record) use ($data) {
                                $record->update(['team_id' => $data['team_id']]);
                            });

                            Notification::make()
                                ->title('Arbetsgrupp tilldelad')
                                ->success()
                                ->body(count($records) . ' post(er) har tilldelats en arbetsgrupp.')
                                ->send();
                        })
                        ->visible(fn() => in_array(auth()->user()->role, ['super', 'super_admin', 'superadmin'])),
                    BulkAction::make('assignToUsers')
                        ->label('Tilldela användare')
                        ->color('gray')
                        ->icon('heroicon-o-users')
                        ->schema([
                            Select::make('users')
                                ->label('Välj användare')
                                ->multiple()
                                ->searchable()
                                ->options(function () {
                                    $tenantId = filament()->getTenant()?->id
                                        ?? auth()->user()?->current_team_id;

                                    if (! $tenantId) {
                                        return [];
                                    }

                                    return \Illuminate\Support\Facades\DB::table('users')
                                        ->where(function ($query) use ($tenantId) {
                                            $query->where('current_team_id', $tenantId)
                                                ->orWhereExists(function ($sub) use ($tenantId) {
                                                    $sub->selectRaw(1)
                                                        ->from('membership')
                                                        ->whereColumn('membership.user_id', 'users.id')
                                                        ->where('membership.team_id', $tenantId);
                                                })
                                                ->orWhereExists(function ($sub) use ($tenantId) {
                                                    $sub->selectRaw(1)
                                                        ->from('teams')
                                                        ->whereColumn('teams.user_id', 'users.id')
                                                        ->where('teams.id', $tenantId);
                                                });
                                        })
                                        ->orderBy('name')
                                        ->pluck('name', 'id')
                                        ->toArray();
                                })
                                ->required()
                                ->validationMessages([
                                    'required' => 'Detta fält är obligatoriskt.',
                                ]),
                            Select::make('teams')
                                ->label('Välj Arbetsgrupp')
                                ->multiple()
                                ->searchable()
                                ->options(Team::pluck('name', 'id')->toArray()),
                            Select::make('campaign_id')
                                ->label('Välj Kampanj')
                                ->searchable()
                                ->options(function () {
                                    $tenantId = filament()->getTenant()?->id
                                        ?? auth()->user()?->current_team_id;

                                    if (! $tenantId) {
                                        return Campaign::pluck('title', 'id')->toArray();
                                    }

                                    return Campaign::where('team_id', $tenantId)
                                        ->orderBy('title')
                                        ->pluck('title', 'id')
                                        ->toArray();
                                }),
                            Select::make('calendar_id')
                                ->label('Välj kalender')
                                ->searchable()
                                ->options(BookingCalendar::all()->pluck('name', 'id'))
                                ->required()
                                ->validationMessages([
                                    'required' => 'Detta fält är obligatoriskt.',
                                ]),
                            DatePicker::make('started_at')
                                ->default(today())
                                ->label('Startdatum')
                                ->required()
                                ->validationMessages([
                                    'required' => 'Detta fält är obligatoriskt.',
                                ]),
                            DatePicker::make('expires_at')
                                ->default(today()->addMonth())
                                ->label('Slutdatum')
                                ->required()
                                ->validationMessages([
                                    'required' => 'Detta fält är obligatoriskt.',
                                ]),
                        ])
                        ->action(function (Collection $records, array $data): void {
                            $userIds = $data['users'];
                            $teamIds = $data['teams'] ?? null;

                            // Only assign the first user ID (or null)
                            $singleUserId = is_array($userIds) ? ($userIds[0] ?? null) : $userIds;
                            // Only assign the first team ID (or null)
                            $singleTeamId = is_array($teamIds) ? ($teamIds[0] ?? null) : $teamIds;

                            foreach ($records as $record) {
                                $updateData = [
                                    'user_id' => $singleUserId,
                                    'calendar_id' => $data['calendar_id'],
                                    'started_at' => $data['started_at'],
                                    'expires_at' => $data['expires_at'],
                                    'attempts' => 0,
                                    'outcome' => null,
                                    'outcome_category' => null,
                                    'is_active' => true,
                                ];

                                if ($singleTeamId) {
                                    $updateData['team_id'] = $singleTeamId;
                                }

                                if (isset($data['campaign_id'])) {
                                    $updateData['campaign_id'] = $data['campaign_id'];
                                }

                                $record->update($updateData);
                            }

                            Notification::make()
                                ->title('Användare tilldelade')
                                ->success()
                                ->body(count($records) . ' post(er) uppdaterade.')
                                ->send();
                        })
                        ->visible(fn() => in_array(auth()->user()->role, ['admin', 'super', 'super_admin', 'superadmin', 'manager'])),
                ]),
            ]);
    }

    private static function generateFakeDataAction(): Action
    {
        return Action::make('generateFakeData')
            ->label('Generate Fake Data')
            ->icon('heroicon-o-sparkles')
            ->color('warning')
            ->schema([
                TextInput::make('count')
                    ->label('Number of records')
                    ->numeric()
                    ->required()
                    ->default(10)
                    ->minValue(1)
                    ->maxValue(500)
                    ->helperText('Generate between 1 and 500 fake records'),
            ])
            ->requiresConfirmation()
            ->modalHeading('Generate Fake RingaData Records')
            ->modalDescription('This will create fake RingaData records for testing purposes.')
            ->modalSubmitActionLabel('Generate')
            ->action(function (array $data): void {
                $count = $data['count'] ?? 10;
                $faker = Faker::create('sv_SE');

                $created = 0;
                for ($i = 0; $i < $count; $i++) {
                    RingaData::create([
                        'gatuadress' => $faker->streetAddress(),
                        'postnummer' => $faker->postcode(),
                        'postort' => $faker->city(),
                        'forsamling' => $faker->word(),
                        'kommun' => $faker->city(),
                        'kommun_ratsit' => $faker->city(),
                        'lan' => $faker->randomElement(['Västra Götaland', 'Stockholms', 'Skåne', 'Örebro', 'Värmland', 'Dalarna', 'Gävleborg', 'Västernorrland', 'Jämtland', 'Norrbotten']),
                        'adressandring' => $faker->optional()->text(100),
                        'telfonnummer' => [$faker->phoneNumber(), $faker->optional()->phoneNumber()],
                        'stjarntacken' => $faker->optional()->word(),
                        'fodelsedag' => $faker->dateTimeBetween('-100 years', '-18 years')->format('Y-m-d'),
                        'personnummer' => $faker->numerify('##########'),
                        'alder' => $faker->numberBetween(18, 100),
                        'kon' => $faker->randomElement(['M', 'K']),
                        'civilstand' => $faker->randomElement(['ogift', 'gift', 'skild', 'änka']),
                        'fornamn' => $faker->firstName(),
                        'efternamn' => $faker->lastName(),
                        'personnamn' => $faker->name(),
                        'telefon' => $faker->phoneNumber(),
                        'epost_adress' => [$faker->email(), $faker->optional()->email()],
                        'agandeform' => $faker->randomElement(['ägo', 'hyres', 'andels']),
                        'bostadstyp' => $faker->randomElement(['villa', 'lägenhet', 'radhus']),
                        'boarea' => $faker->numberBetween(30, 200),
                        'byggar' => $faker->year(),
                        'fastighet' => $faker->word(),
                        'personer' => [$faker->firstName(), $faker->optional()->firstName()],
                        'foretag' => [$faker->optional()->company()],
                        'grannar' => [$faker->firstName(), $faker->optional()->firstName()],
                        'fordon' => [$faker->optional()->word()],
                        'hundar' => [$faker->optional()->word()],
                        'bolagsengagemang' => [$faker->optional()->company()],
                        'longitude' => $faker->longitude(),
                        'latitud' => $faker->latitude(),
                        'google_maps' => $faker->url(),
                        'google_streetview' => $faker->url(),
                        'ratsit_se' => $faker->url(),
                        'is_active' => $faker->boolean(80),
                        'is_hus' => $faker->boolean(50),
                        'is_telefon' => $faker->boolean(70),
                        'is_queued' => $faker->boolean(20),
                        'started_at' => $faker->dateTimeThisYear(),
                        'expires_at' => $faker->dateTimeBetween('now', '+1 year'),
                    ]);
                    $created++;
                }

                Notification::make()
                    ->success()
                    ->title('Fake data generated')
                    ->body("Successfully created {$created} fake RingaData records.")
                    ->send();
            });
    }

    private function getHeaderActions(): array
    {
        return [
            FilamentExportHeaderAction::make('export'),
            \EightyNine\ExcelImport\ExcelImportAction::make()
                ->color('primary'),
        ];
    }
    protected function getTableHeaderActions(): array
    {
        return [
            FilamentExportHeaderAction::make('Exportera'),
        ];
    }
}
