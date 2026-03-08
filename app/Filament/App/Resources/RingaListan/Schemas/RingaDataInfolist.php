<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Schemas;

use Anish\TextInputEntry\Infolists\Components\TextInputEntry;
use App\Models\OutcomeSetting;
use Fahiem\FilamentPinpoint\PinpointEntry;
use Filament\Actions\Action;
use Filament\Forms\Components\RichEditor;
use Filament\Notifications\Notification;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

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
        $text = strtolower(trim(($outcomeSetting->title ?? '').' '.($outcomeSetting->outcome ?? '')));

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
        // Get record from schema if not passed as parameter
        if (! $record) {
            $record = $schema->getRecord();
        }

        return $schema
            ->components([
                Grid::make(2)
                    ->gridContainer()
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
                                    ->height(480)
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

                                TextInputEntry::make('fornamn')
                                    ->columnSpan(3),
                                TextInputEntry::make('efternamn')
                                    ->columnSpan(3),
                                TextInputEntry::make('personnummer')
                                    ->columnSpan(6),
                                TextInputEntry::make('alder')
                                    ->columnSpan(3),
                                TextInputEntry::make('kon')
                                    ->columnSpan(3),
                                TextInputEntry::make('civilstand')
                                    ->columnSpan(6),
                                TextInputEntry::make('gatuadress')
                                    ->columnSpan(6),
                                TextInputEntry::make('postnummer')
                                    ->columnSpan(3),
                                TextInputEntry::make('postort')
                                    ->columnSpan(3),
                                TextInputEntry::make('adressandring')
                                    ->columnSpan(4),
                                TextInputEntry::make('boarea')
                                    ->columnSpan(4),
                                TextInputEntry::make('byggar')
                                    ->columnSpan(4),
                                TextInputEntry::make('bostadstyp')
                                    ->columnSpan(4),
                                TextInputEntry::make('agandeform')
                                    ->columnSpan(4),
                                TextInputEntry::make('fastighetsbeteckning')
                                    ->columnSpan(4),
                            ])
                            ->columns([
                                'md' => 12,
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

                ...($record && ! empty($record->telfonnummer) ? [
                    Section::make('✆')
                        ->description('')
                        ->extraAttributes([
                            'class' => 'phone-numbers-section',
                        ])
                        ->schema([
                            TextInputEntry::make('epost'),
                            //             ->columnSpan(3),
                        ])
                        ->compact()
                        ->headerActions(
                            collect($record->telfonnummer)
                                ->filter(fn ($phone) => ! empty(trim((string) $phone)))
                                ->map(function (string $phone, int $index): Action {
                                    $dialable = preg_replace('/\s+/', '', $phone);

                                    return Action::make("call_{$index}")
                                        ->label($phone)
                                        ->button()
                                        ->url("tel:{$dialable}")
                                        ->extraAttributes([
                                            'class' => 'phone-numbers-button',
                                        ])
                                        ->openUrlInNewTab()
                                        ->color('gray')
                                        ->size('lg')
                                        ->extraAttributes([
                                            'class' => 'phone-button',
                                        ])
                                        ->icon('heroicon-o-phone');
                                })
                                ->all()
                        ),
                ] : []),

                Section::make('Anteckningar')
                    ->extraAttributes([
                        'class' => 'user-notes-section',
                    ])
                    ->schema([
                        RichEditor::make('user_notes'),

                    ])
                    ->footerActions([
                        Action::make('save_notes')
                            ->label('Spara anteckningar')
                            ->button()
                            ->color('primary')
                            ->action(function ($record, $data) {
                                if ($record) {
                                    $record->update([
                                        'user_notes' => $data['user_notes'] ?? '',
                                    ]);

                                    Notification::make()
                                        ->title('Anteckningar sparade')
                                        ->success()
                                        ->send();
                                }
                            }),
                    ])
                    ->columns([
                        'md' => 1,
                    ])
                    ->columnSpan('full'),
            ]);
    }
}
