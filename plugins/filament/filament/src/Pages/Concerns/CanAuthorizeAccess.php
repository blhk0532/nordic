<?php

declare(strict_types=1);

namespace Filament\Pages\Concerns;

trait CanAuthorizeAccess
{
    public static function canAccess(): bool
    {
        return true;
    }

    public function mountCanAuthorizeAccess(): void
    {
        abort_unless(static::canAccess(), 403);
    }
}
