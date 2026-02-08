<?php

declare(strict_types=1);

namespace Filament\Resources\Pages\Concerns;

trait CanAuthorizeResourceAccess
{
    public static function authorizeResourceAccess(): void
    {
        abort_unless(static::getResource()::canAccess(), 403);

        if ($parentResource = static::getParentResource()) {
            abort_unless($parentResource::canAccess(), 403);
        }
    }

    public function mountCanAuthorizeResourceAccess(): void
    {
        static::authorizeResourceAccess();
    }
}
