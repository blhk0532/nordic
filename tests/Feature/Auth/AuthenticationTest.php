<?php

use App\Models\Team;
use App\Models\User;
use Laravel\Fortify\Features;

test('login screen can be rendered', function () {
    $response = $this->get(route('login'));

    $response->assertOk();
});

test('users can authenticate using the login screen', function () {
    $user = User::factory()->create();
    $team = Team::query()->create([
        'user_id' => $user->id,
        'name' => 'Demo Team',
        'slug' => 'demo-team',
        'personal_team' => true,
    ]);

    $user->forceFill([
        'current_team_id' => $team->id,
    ])->save();

    $response = $this->post(route('login.store'), [
        'email' => $user->email,
        'password' => 'password',
    ]);

    $response
        ->assertSessionHasNoErrors()
        ->assertRedirect('/nds/app/team/demo-team');

    $this->assertAuthenticated();
});

test('authenticated users are redirected from login route to tenant app panel', function () {
    $user = User::factory()->create();
    $team = Team::query()->create([
        'user_id' => $user->id,
        'name' => 'Login Redirect Team',
        'slug' => 'login-redirect-team',
        'personal_team' => true,
    ]);

    $user->forceFill([
        'current_team_id' => $team->id,
    ])->save();

    $response = $this->actingAs($user)->get(route('login'));

    $response->assertRedirect('/nds/app/team/login-redirect-team');
});

test('users can not authenticate with invalid password', function () {
    $user = User::factory()->create();

    $response = $this->post(route('login.store'), [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);

    $response->assertSessionHasErrorsIn('email');

    $this->assertGuest();
});

test('users with two factor enabled are redirected to two factor challenge', function () {
    if (! Features::canManageTwoFactorAuthentication()) {
        $this->markTestSkipped('Two-factor authentication is not enabled.');
    }

    Features::twoFactorAuthentication([
        'confirm' => true,
        'confirmPassword' => true,
    ]);

    $user = User::factory()->withTwoFactor()->create();

    $response = $this->post(route('login.store'), [
        'email' => $user->email,
        'password' => 'password',
    ]);

    $response->assertRedirect(route('two-factor.login'));
    $this->assertGuest();
});

test('users can logout', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('logout'));

    $response->assertRedirect(route('home'));

    $this->assertGuest();
});
