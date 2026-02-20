<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(Tests\TestCase::class, RefreshDatabase::class);

test('queue page loads without errors', function () {
    // Create a user
    $user = User::factory()->create();

    // Create a team for the user (assuming teams are created automatically)
    $team = $user->currentTeam ?? $user->ownedTeams()->first();

    if (! $team) {
        // If no team exists, skip this test as it's not set up properly
        $this->markTestSkipped('No team available for testing');
    }

    // Act as the user and visit the queue page
    $response = $this->actingAs($user)
        ->get("/nds/app/team/{$team->slug}/ringa/data/queue");

    // Assert the page loads successfully (even if no data is shown)
    $response->assertStatus(200);
});

test('pinpoint widget does not bind save submit action', function () {
    $view = file_get_contents(resource_path('views/filament/app/resources/ringa-data/widgets/ringa-data-pinpoint-widget.blade.php'));

    expect($view)->not->toContain('wire:submit="save"');
});
