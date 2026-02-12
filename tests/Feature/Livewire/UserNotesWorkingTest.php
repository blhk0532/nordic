<?php

use App\Livewire\UserNotesWorking;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;

uses(RefreshDatabase::class);

it('saves and reloads notes per user', function () {
    $user = User::factory()->create();

    Livewire::actingAs($user)
        ->test(UserNotesWorking::class)
        ->set('data', ['notes' => '<p>test-note</p>'])
        ->call('save')
        ->assertHasNoErrors();

    // mount again and assert persisted value is loaded for the same user
    Livewire::actingAs($user)
        ->test(UserNotesWorking::class)
        ->assertSet('data.notes', '<p>test-note</p>');
});

it('keeps notes isolated between users', function () {
    $userA = User::factory()->create();
    $userB = User::factory()->create();

    Livewire::actingAs($userA)
        ->test(UserNotesWorking::class)
        ->set('data', ['notes' => '<p>note-a</p>'])
        ->call('save');

    Livewire::actingAs($userB)
        ->test(UserNotesWorking::class)
        ->assert(fn ($component) => $component->get('data.notes') === null || $component->get('data.notes') === '');
});

it('opens slide-over when openModal is called', function () {
    $user = User::factory()->create();

    Livewire::actingAs($user)
        ->test(UserNotesWorking::class)
        ->call('openModal')
        ->assertSet('slideOverOpen', true);
});
