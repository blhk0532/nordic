<?php

declare(strict_types=1);

namespace Filament\Forms\Components;

class DatePicker extends DateTimePicker
{
    public function hasTime(): bool
    {
        return false;
    }
}
