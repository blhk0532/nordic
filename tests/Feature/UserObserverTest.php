<?php

use App\Models\Team;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('new user joins currently logged in users non personal team', function () {
    // Create a user who will create the team
    $owner = User::factory()->create();

    // Create a non-personal team owned by this user
    $team = Team::forceCreate([
        'user_id' => $owner->id,
        'name' => 'My Business Team',
        'slug' => 'business-team',
        'personal_team' => false,
    ]);

    // Authenticate as the team owner
    $this->actingAs($owner);

    // Create a new user (this should trigger the observer)
    $newUser = User::factory()->create();

    // Refresh to get latest relationships
    $team->refresh();
    $newUser->refresh();

    // Assert the new user was added to the team
    expect($team->users()->where('users.id', $newUser->id)->exists())->toBeTrue();

    // Assert the new user's current_team_id is set to the team
    expect($newUser->current_team_id)->toBe($team->id);
});

test('new user creation without authenticated user does not throw error', function () {
    // Create a user without being authenticated
    $newUser = User::factory()->create();

    // Verify user was created successfully
    expect($newUser)->toBeInstanceOf(User::class);
    expect($newUser->current_team_id)->toBeNull();
});

test('new user joins first non personal team when owner has multiple teams', function () {
    // Create a user who will create teams
    $owner = User::factory()->create();

    // Create a personal team
    $personalTeam = Team::forceCreate([
        'user_id' => $owner->id,
        'name' => 'Personal Team',
        'slug' => 'personal-team',
        'personal_team' => true,
    ]);

    // Create a non-personal team
    $businessTeam = Team::forceCreate([
        'user_id' => $owner->id,
        'name' => 'Business Team',
        'slug' => 'business-team',
        'personal_team' => false,
    ]);

    // Authenticate as the team owner
    $this->actingAs($owner);

    // Create a new user
    $newUser = User::factory()->create();

    // Refresh
    $businessTeam->refresh();
    $personalTeam->refresh();
    $newUser->refresh();

    // Assert the new user was added to the business team (non-personal)
    expect($businessTeam->users()->where('users.id', $newUser->id)->exists())->toBeTrue();

    // Assert the new user was NOT added to the personal team
    expect($personalTeam->users()->where('users.id', $newUser->id)->exists())->toBeFalse();

    // Assert the new user's current_team_id is set to the business team
    expect($newUser->current_team_id)->toBe($businessTeam->id);
});
