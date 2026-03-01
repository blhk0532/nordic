<?php

declare(strict_types=1);

namespace App\Support\Filament;

use Filament\Facades\Filament;
use Filament\Panel;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Route;

final class AppPanelRedirect
{
    public static function urlFor(?Authenticatable $user): string
    {
        $panel = Filament::getPanel('app') ?? Filament::getCurrentOrDefaultPanel();

        if (! $panel) {
            return url('/');
        }

        $tenant = self::resolveTenant($user, $panel);
        $tenantSlug = $tenant?->getAttribute('slug');

        if (filled($tenantSlug) && Route::has('filament.app.pages.dashboard')) {
            return route('filament.app.pages.dashboard', ['tenant' => $tenantSlug]);
        }

        return $panel->getUrl();
    }

    private static function resolveTenant(?Authenticatable $user, Panel $panel): ?Model
    {
        if (! $user) {
            return null;
        }

        if (method_exists($user, 'getDefaultTenant')) {
            $defaultTenant = $user->getDefaultTenant($panel);

            if ($defaultTenant instanceof Model) {
                return $defaultTenant;
            }
        }

        if (! method_exists($user, 'getTenants')) {
            return null;
        }

        $tenants = $user->getTenants($panel);
        $tenant = $tenants instanceof Collection ? $tenants->first() : collect($tenants)->first();

        return $tenant instanceof Model ? $tenant : null;
    }
}
