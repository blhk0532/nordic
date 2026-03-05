<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Schemas;

use Anish\TextInputEntry\Infolists\Components\TextInputEntry;
use App\Models\OutcomeSetting;
use Fahiem\FilamentPinpoint\PinpointEntry;
use Filament\Actions\Action;
use Filament\Notifications\Notification;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Enums\TextSize;
use Filament\Infolists\Components\TextEntry;

class RingaDataInfolist
{
    protected static function normalizeActionColor(?string $color): string
    {
        $value = strtolower(trim((string) $color));

        if (in_array($value, ['danger', 'gray', 'info', 'primary', 'success', 'warning'], true)) {
            return $value;
        }

        return 'gray';
    }

    protected static function normalizeActionIcon(?string $icon): ?string
    {
        $value = trim((string) $icon);

        if ($value === '') {
            return null;
        }

        if (str_contains($value, '-') || str_contains($value, ':')) {
            return $value;
        }

        return "heroicon-o-{$value}";
    }

    protected static function getFallbackIcon(OutcomeSetting $outcomeSetting): string
    {
        $text = strtolower(trim(($outcomeSetting->title ?? '') . ' ' . ($outcomeSetting->outcome ?? '')));

        return match (true) {
            str_contains($text, 'ring ej'), str_contains($text, 'dmc') => 'heroicon-o-no-symbol',
            str_contains($text, 'fel nummer'), str_contains($text, 'fel telefon') => 'heroicon-o-phone-x-mark',
            str_contains($text, 'klick') => 'heroicon-o-hand-thumb-up',
            str_contains($text, 'ej intresse'), str_contains($text, 'inte intresse') => 'heroicon-o-hand-thumb-down',
            str_contains($text, 'upptagen') => 'heroicon-o-pause-circle',
            str_contains($text, 'ej kopplad'), str_contains($text, 'framkopplad') => 'heroicon-o-phone-x-mark',
            str_contains($text, 'inget svar'), str_contains($text, 'telefonsvar') => 'heroicon-o-phone',
            str_contains($text, 'nästa gång'), str_contains($text, 'aterkommer'), str_contains($text, 'ring tillbaka') => 'heroicon-o-clock',
            str_contains($text, 'offert') => 'heroicon-o-document-text',
            str_contains($text, 'bokad'), str_contains($text, 'kontakt') => 'heroicon-o-calendar-days',
            default => 'heroicon-o-check',
        };
    }

    protected static function getButtonStyle(?string $color): ?string
    {
        $value = trim((string) $color);

        if ($value === '') {
            return null;
        }

        $filamentColors = [
            'primary' => '#6366f1',
            'success' => '#16a34a',
            'warning' => '#f59e0b',
            'danger' => '#ef4444',
            'info' => '#0ea5e9',
            'gray' => '#6b7280',
        ];

        $lower = strtolower($value);

        if (array_key_exists($lower, $filamentColors)) {
            $value = $filamentColors[$lower];
        }

        if (preg_match('/^[a-f0-9]{3,8}$/i', $value) === 1) {
            $value = "#{$value}";
        }

        return "background-color: {$value} !important; border-color: {$value} !important; color: #ffffff !important;";
    }

    public static function configure(Schema $schema, $record = null, $component = null): Schema
    {
        return $schema
            ->components([
                Grid::make(2)
                      ->extraAttributes([
                                'class' => 'queue-data-section',
                            ])
                    ->schema([
                        Section::make()
                            ->description('')
                            ->hiddenLabel()
                            ->extraAttributes([
                                'class' => 'outcome-buttons-section',
                            ])
                            ->schema([
                                PinpointEntry::make('location')
                                    ->label('gatuadress')
                                    ->defaultZoom(18)
                                    ->latField('latitud')
                                    ->lngField('longitude')
                                    ->mapType('satellite')
                                    ->height(500)
                                    ->columnSpanFull(),
                            ])
                            ->compact()
                            ->headerActions([
                                // Outcome buttons will be added here as actions in the form schema
                            ]),
                        Section::make('Adress')
                                                    ->extraAttributes([
                                'class' => 'queue-address-section',
                            ])
                            ->schema([

                                TextInputEntry::make('fornamn'),
                                TextInputEntry::make('efternamn'),
                                TextInputEntry::make('personnummer'),
                            TextInputEntry::make('alder'),
                        TextInputEntry::make('kon'),
                        TextInputEntry::make('civilstand'),
                                TextInputEntry::make('gatuadress'),
                                TextInputEntry::make('postnummer'),
                                TextInputEntry::make('postort'),
                        TextInputEntry::make('adressandring'),
                        TextInputEntry::make('boarea'),
                        TextInputEntry::make('byggar'),
                            ])
                            ->columns([
                                'md' => 3,
                            ]),


                    ])
                    ->columnSpanFull(),

                Section::make()
                    ->description('')
                    ->hiddenLabel()
                    ->extraAttributes([
                        'class' => 'outcome-buttons-section',
                    ])
                    ->schema([
                        // We'll add the outcome buttons as actions instead
                    ])
                    ->compact()
                    ->headerActions([
                        ...OutcomeSetting::query()
                            ->where('is_active', true)
                            ->orderBy('order')
                            ->orderBy('id')
                            ->get()
                            ->map(function (OutcomeSetting $outcomeSetting) use ($record, $component): Action {
                                $label = $outcomeSetting->title ?: (string) $outcomeSetting->outcome;
                                $color = self::normalizeActionColor($outcomeSetting->color);
                                $icon = self::normalizeActionIcon($outcomeSetting->icon) ?? self::getFallbackIcon($outcomeSetting);
                                $style = self::getButtonStyle($outcomeSetting->color);

                                $action = Action::make("outcome_{$outcomeSetting->id}")
                                    ->label($label)
                                    ->button()
                                    ->extraAttributes([
                                        'class' => 'outcome-button',
                                        'style' => $style,
                                    ])
                                    ->color($color)
                                    ->action(function ($record) use ($outcomeSetting, $component, $label, $color): void {
                                        if ($record) {
                                            $record->update([
                                                'is_active' => false,
                                                'outcome' => $outcomeSetting->outcome,
                                                'outcome_category' => $outcomeSetting->category,
                                                'is_outcome' => true,
                                                'attempts' => ($record->attempts ?? 0) + 1,
                                            ]);

                                            Notification::make()
                                                ->title('Utfall registrerat')
                                                ->body("➤ {$label}")
                                                ->color($color)
                                                ->success()
                                                ->send();

                                            if ($component) {
                                                if (method_exists($component, 'redirect')) {
                                                    $component->redirect(request()->fullUrl(), navigate: true);

                                                    return;
                                                }

                                                $component->js('window.location.reload()');
                                            }
                                        }
                                    });

                                $action->icon($icon);

                                return $action;
                            })
                            ->all(),
                    ]),

                Section::make('Personuppgifter')
                    ->schema([
                        TextInputEntry::make('fornamn'),
                        TextInputEntry::make('efternamn'),
                        TextInputEntry::make('personnamn')
                            ->columnSpanFull(),
                        TextInputEntry::make('fodelsedag'),
                        TextInputEntry::make('personnummer'),
                        TextInputEntry::make('alder'),
                        TextInputEntry::make('kon'),
                        TextInputEntry::make('civilstand'),
                    ])
                    ->columns([
                        'md' => 2,
                    ])
                    ->columnSpanFull(),

                Section::make('Kontakt')
                    ->schema([
                        TextInputEntry::make('telfonnummer'),
                        TextInputEntry::make('telefon')
                            ->editable(true)
                            ->border(true)
                            ->size(TextSize::Large),
                        TextInputEntry::make('epost_adress')
                            ->editable(true)
                            ->border(true)
                            ->size(TextSize::Large),
                    ])
                    ->columns([
                        'md' => 2,
                    ])
                    ->columnSpanFull(),

                Section::make('Boende')
                    ->schema([
                        TextInputEntry::make('agandeform'),
                        TextInputEntry::make('bostadstyp'),
                        TextInputEntry::make('boarea'),
                        TextInputEntry::make('byggar'),
                    ])
                    ->columns([
                        'md' => 2,
                    ])
                    ->columnSpanFull(),

                Section::make('Övrigt')
                    ->schema([
                        TextInputEntry::make('personer'),
                        TextInputEntry::make('foretag'),
                        TextInputEntry::make('grannar'),
                        TextInputEntry::make('fordon'),
                        TextInputEntry::make('hundar'),
                        TextInputEntry::make('bolagsengagemang'),
                        TextInputEntry::make('attempts'),
                    ])
                    ->columns([
                        'md' => 3,
                    ])
                    ->columnSpanFull(),
            ]);
    }
}
