<?php

declare(strict_types=1);

namespace Filament\Support;

use Closure;
use Filament\Support\Concerns\EvaluatesClosures;

class TimezoneManager
{
    use EvaluatesClosures;

    protected string|Closure|null $timezone = null;

    public function set(string|Closure|null $timezone = null): void
    {
        $this->timezone = $timezone;
    }

    public function get(): string
    {
        return $this->evaluate($this->timezone) ?? config('app.timezone');
    }
}
