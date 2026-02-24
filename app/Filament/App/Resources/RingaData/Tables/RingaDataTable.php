<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaData\Tables;

use App\Enums\Outcomes;
use App\Enums\OutcomeType;
use App\Models\BookingCalendar;
use App\Models\Campaign;
use App\Models\RingaData;
use App\Models\Team;
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
use Filament\Schemas\Components\Grid;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Collection;
use Shreejan\ActionableColumn\Tables\Columns\ActionableColumn;
use Webbingbrasil\FilamentCopyActions\Tables\CopyableTextColumn;
use Zvizvi\UserFields\Components\UserColumn;

class RingaDataTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->headerActions([
                \EightyNine\ExcelImport\ExcelImportAction::make()
                    ->color('primary')
                    ->extraAttributes(['class' => 'absolute top-11 right-90 z-0']),
            ])
            ->columns([
                UserColumn::make('user')
                    ->label('Användare'),
                ActionableColumn::make('outcome_category')
                    ->badge()
                    ->sortable()
                    ->default('...')
                    ->toggleable(false)
                    ->label('Utfall')                                  // Display as badge (or remove for simple text)
                    ->color(
                        static fn ($state) => $state instanceof OutcomeType
                            ? $state->getColor()
                            : (is_string($state) ? OutcomeType::tryFrom($state)?->getColor() ?? 'success' : 'success')
                    )                           // Badge/text color: success, danger, warning, info, primary
                    ->actionIcon(
                        static fn ($state) => $state instanceof OutcomeType
                            ? $state->getIcon()
                            : (is_string($state) ? OutcomeType::tryFrom($state)?->getIcon() ?? 'heroicon-o-clock' : 'heroicon-o-clock')
                    )         // Action button icon (Heroicon enum or string)
                    ->actionIconColor(static fn ($state) => $state instanceof OutcomeType
                            ? $state->getColor()
                            : (is_string($state) ? OutcomeType::tryFrom($state)?->getColor() ?? 'success' : 'success')
                    )                 // Icon color (independent from badge color)
                    ->clickableColumn()                          // Make entire column clickable (or remove for button-only)
                    ->tapAction(
                        Action::make('changeOutcome')              // Any Filament Action: edit, delete, approve, etc.
                            ->label('Change Outcome')
                            ->tooltip('Click to change outcome')
                            ->schema([
                                Select::make('outcome')
                                    ->options(fn () => collect(OutcomeType::cases())->mapWithKeys(
                                        fn (OutcomeType $outcome) => [$outcome->value => $outcome->getLabel()]
                                    )->toArray())
                                    ->required(),
                            ])
                            ->fillForm(fn ($record) => [
                                'outcome' => $record->outcome,
                            ])
                            ->action(function ($record, array $data) {
                                $record->update($data);
                            })
                    ),

                TextColumn::make('personnamn')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('fodelsedag')
                    ->label('Age')
                    ->state(fn (RingaData $record) => $record->fodelsedag ? \Carbon\Carbon::parse($record->fodelsedag)->age : '-')
                    ->sortable(),
                TextColumn::make('gatuadress')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('postnummer')
                    ->label('postnr')
                    ->searchable()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('postort')
                    ->searchable()
                    ->sortable(),

                CopyableTextColumn::make('telefon')
                    ->searchable()
                    ->sortable(),

                IconColumn::make('outcome')
                    ->label('🕻')
                    ->sortable()
    //               ->color(
    //                   static fn ($state) => $state instanceof Outcomes
    //                       ? $state->getColor()
    //                       : (is_string($state) ? Outcomes::tryFrom($state)?->getColor() ?? 'primary' : 'primary')
    //               )
                    ->color('gray')
                    ->tooltip(fn ($state) => $state instanceof Outcomes
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
                                    ->options(fn () => collect(Outcomes::cases())->mapWithKeys(
                                        fn (Outcomes $outcome) => [$outcome->value => $outcome->getLabel()]
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
                                fn ($q, $date) => $q->whereDate('fodelsedag', '>=', $date),
                            )
                            ->when(
                                $data['fodelsedag_max'] ?? null,
                                fn ($q, $date) => $q->whereDate('fodelsedag', '<=', $date),
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
                            fn ($q, $postnummer) => $q->where('postnummer', 'like', '%'.$postnummer.'%'),
                        );
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
                    ->options(fn () => collect(Outcomes::cases())->mapWithKeys(
                        fn (Outcomes $outcome) => [$outcome->value => $outcome->getLabel()]
                    )->toArray())
                    ->searchable(),
            ])
            ->paginated([10, 25, 50, 100, 150, 200, 250, 300, 400, 500, 1000, 2000])
            ->defaultPaginationPageOption(25)
            ->recordAction('view')
            ->recordActions([
                EditAction::make()
                    ->label(''),
                Action::make('view_details')
                    ->label('')
                    ->icon('heroicon-o-phone-arrow-up-right')
                    ->color('success')
                    ->url(fn (RingaData $record) => 'tel:'.$record->telefon),

            ])
            ->toolbarActions([
                BulkActionGroup::make([
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
                                ->body(count($records).' record(s) transferred.')
                                ->send();
                        })
                        ->visible(fn () => in_array(auth()->user()->role, ['admin', 'super', 'super_admin', 'superadmin', 'manager'])),
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
                                ->body(count($records).' post(er) har nollställts.')
                                ->send();
                        })
                        ->visible(fn () => in_array(auth()->user()->role, ['admin', 'super', 'super_admin', 'superadmin', 'manager'])),
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
                                ->body(count($records).' post(er) har tilldelats en arbetsgrupp.')
                                ->send();
                        })
                        ->visible(fn () => in_array(auth()->user()->role, ['super', 'super_admin', 'superadmin'])),
                    BulkAction::make('assignToUsers')
                        ->label('Tilldela användare')
                        ->color('gray')
                        ->icon('heroicon-o-users')
                        ->schema([
                            Grid::make(2)
                                ->schema([
                                    Select::make('users')
                                        ->label('Välj användare')
                                        ->columnSpan(1)
                                        ->multiple()
                                        ->searchable()
                                        ->options(function () {
                                            $tenantId = filament()->getTenant()?->id
                                                ?? auth()->user()?->current_team_id;

                                            if (! $tenantId) {
                                                return [];
                                            }

                                            // Force fresh query evaluation
                                            $users = \Illuminate\Support\Facades\DB::table('users')
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

                                            return $users;
                                        })
                                        ->validationMessages([
                                            'required' => 'Detta fält är obligatoriskt.',
                                        ])
                                        ->required(),
                                    Select::make('calendar_id')
                                        ->label('Välj kalender')
                                        ->searchable()
                                        ->options(BookingCalendar::all()->pluck('name', 'id'))
                                        ->validationMessages([
                                            'required' => 'Detta fält är obligatoriskt.',
                                        ])
                                        ->required(),
                                    DatePicker::make('started_at')
                                        ->default(today())
                                        ->label('Startdatum')
                                        ->validationMessages([
                                            'required' => 'Detta fält är obligatoriskt.',
                                        ])
                                        ->required(),
                                    DatePicker::make('expires_at')
                                        ->default(today()->addMonth())
                                        ->label('Slutdatum')
                                        ->validationMessages([
                                            'required' => 'Detta fält är obligatoriskt.',
                                        ])
                                        ->required(),
                                ]),
                        ])
                        ->action(function (Collection $records, array $data): void {
                            $recordIds = $records->pluck('id')->toArray();
                            $userIds = implode(',', $data['users']);

                            RingaData::whereIn('id', $recordIds)->update([
                                'user_id' => $userIds,
                                'calendar_id' => $data['calendar_id'],
                                'started_at' => $data['started_at'],
                                'expires_at' => $data['expires_at'],
                                'is_active' => true,
                                'outcome' => null,
                                'outcome_category' => null,
                                'attempts' => 0,
                            ]);

                            Notification::make()
                                ->title('Användare tilldelade')
                                ->success()
                                ->send();
                        })
                        ->visible(fn () => in_array(auth()->user()->role, ['admin', 'super', 'super_admin', 'superadmin', 'manager'])),
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
            \EightyNine\ExcelImport\ExcelImportAction::make()
                ->color('primary'),
        ];
    }
}
