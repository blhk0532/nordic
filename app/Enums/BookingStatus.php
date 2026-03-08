<?php

declare(strict_types=1);

namespace App\Enums;

use Filament\Support\Contracts\HasColor;
use Filament\Support\Contracts\HasIcon;
use Filament\Support\Contracts\HasLabel;

enum BookingStatus: string implements HasColor, HasIcon, HasLabel
{

    case Booked = 'booked';
    case Pending = 'pending';
    case Confirm = 'confirm';
    case Update = 'update';
    case Cancel = 'cancel';
    case Problem = 'problem';
    case Complete = 'complete';

    public static function toOptions(): array
    {
        return array_map(fn (self $s) => $s->getLabel(), self::cases());
    }

    public static function restrictedOptions(): array
    {
        return [
            self::Booked->value => self::Booked->getLabel(),
            self::Confirm->value => self::Confirm->getLabel(),
            self::Problem->value => self::Problem->getLabel(),
            self::Complete->value => self::Complete->getLabel(),
        ];
    }

    public function getLabel(): ?string
    {
        return match ($this) {

            self::Booked => 'Booked',
            self::Pending => 'Pending',
            self::Confirm => 'Confirm',
            self::Update => 'Update',
            self::Cancel => 'Cancel',
            self::Problem => 'Problem',
            self::Complete => 'Complete',
        };
    }

    public function getColor(): string|array|null
    {
        return match ($this) {
            self::Booked => 'primary',
            self::Pending => 'gray',
            self::Confirm => 'warning',
            self::Update => 'info',
            self::Cancel => 'danger',
            self::Problem => 'danger',
            self::Complete => 'success',
        };
    }

    public function getIcon(): ?string
    {
        return match ($this) {
            self::Booked => 'heroicon-o-calendar',
            self::Pending => 'heroicon-o-clock',
            self::Confirm => 'heroicon-o-check-circle',
            self::Update => 'heroicon-o-pencil-square',
            self::Cancel => 'heroicon-o-x-circle',
            self::Problem => 'heroicon-o-exclamation-triangle',
            self::Complete => 'heroicon-o-check-badge',
        };
    }

    public function getCalendarColor(): string
    {
        return match ($this) {
            self::Booked => 'primary',
            self::Pending => 'gray',
            self::Confirm => 'warning',
            self::Update => 'info',
            self::Cancel => 'danger',
            self::Problem => 'danger',
            self::Complete => 'success',
        };
    }
}
