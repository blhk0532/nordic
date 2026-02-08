<?php

declare(strict_types=1);

namespace Filament\Http\Controllers;

use Filament\Facades\Filament;
use Filament\Panel;
use Illuminate\Http\RedirectResponse;

class RedirectToTenantController
{
    public function __invoke(): RedirectResponse
    {
        $panel = Filament::getCurrentOrDefaultPanel();
        $tenant = Filament::getUserDefaultTenant(Filament::auth()->user());

        if (! $tenant) {
            return $this->redirectToTenantRegistration($panel);
        }

        $url = $panel->getUrl($tenant);

        if (blank($url)) {
            abort(404);
        }

        return redirect($url);
    }

    private function redirectToTenantRegistration(Panel $panel): RedirectResponse
    {
        if (! ($panel->hasTenantRegistration() && filament()->getTenantRegistrationPage()::canView())) {
            abort(404);
        }

        return redirect($panel->getTenantRegistrationUrl());
    }
}
