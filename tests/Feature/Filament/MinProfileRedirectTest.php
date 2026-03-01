<?php

use App\Http\Middleware\UpdateUserActiveAt;
use App\Models\User;
use Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage;

test('min profile fallback redirects with tenant parameter', function () {
    $this->withoutMiddleware(UpdateUserActiveAt::class);

    $user = User::factory()->make();
    $tenant = 'demo-team';

    $response = $this->actingAs($user)->get("/{$tenant}/min-profile");

    $response->assertRedirect(EditProfilePage::getUrl(parameters: ['tenant' => $tenant]));
});
