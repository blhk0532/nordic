<?php

declare(strict_types=1);

use App\Models\User;

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
