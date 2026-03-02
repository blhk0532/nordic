<?php

declare(strict_types=1);

use App\Support\Filament\AppPanelRedirect;

it('redirects users without a tenant to app tenant registration', function (): void {
    $url = AppPanelRedirect::urlFor(null);

    expect($url)->toBe(route('filament.app.tenant.registration'));
});
