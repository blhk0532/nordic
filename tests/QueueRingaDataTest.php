<?php

declare(strict_types=1);

use App\Filament\App\Resources\RingaData\RingaDataResource;
use App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData;
use App\Models\RingaData;
use App\Models\Team;
use App\Models\User;
use Filament\Facades\Filament;
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
    $response->assertSuccessful();
});

test('queue query and badge require both team_id and user_id to match', function () {
    $user = User::factory()->create([
        'role' => 'booking',
    ]);

    $owner = User::factory()->create();

    $teamA = Team::forceCreate([
        'user_id' => $owner->id,
        'name' => 'Team A',
        'slug' => 'team-a',
        'personal_team' => false,
    ]);

    $teamB = Team::forceCreate([
        'user_id' => $owner->id,
        'name' => 'Team B',
        'slug' => 'team-b',
        'personal_team' => false,
    ]);

    $visible = RingaData::query()->create([
        'team_id' => $teamB->id,
        'user_id' => (string) $user->id,
        'is_active' => true,
        'started_at' => now()->subMinute(),
        'attempts' => 0,
    ]);

    $hiddenByTeamOnly = RingaData::query()->create([
        'team_id' => $teamB->id,
        'user_id' => '999999',
        'is_active' => true,
        'started_at' => now()->subMinute(),
        'attempts' => 0,
    ]);

    $hiddenByUserOnly = RingaData::query()->create([
        'team_id' => $teamA->id,
        'user_id' => (string) $user->id,
        'is_active' => true,
        'started_at' => now()->subMinute(),
        'attempts' => 0,
    ]);

    $hiddenByNeither = RingaData::query()->create([
        'team_id' => $teamA->id,
        'user_id' => '999999',
        'is_active' => true,
        'started_at' => now()->subMinute(),
        'attempts' => 0,
    ]);

    $this->actingAs($user);
    Filament::setTenant($teamB, isQuiet: true);

    $ids = QueueRingaData::getQuery()->pluck('id')->all();

    expect($ids)
        ->toContain($visible->id)
        ->not->toContain($hiddenByTeamOnly->id)
        ->not->toContain($hiddenByUserOnly->id)
        ->not->toContain($hiddenByNeither->id);

    expect(QueueRingaData::getNavigationBadge())->toBe('1');
});

test('pinpoint widget does not bind save submit action', function () {
    $view = file_get_contents(resource_path('views/filament/app/resources/ringa-data/widgets/ringa-data-pinpoint-widget.blade.php'));

    expect($view)->not->toContain('wire:submit="save"');
});

test('nummer list query and badge require both team_id and user_id to match', function () {
    $user = User::factory()->create([
        'role' => 'booking',
    ]);

    $owner = User::factory()->create();

    $teamA = Team::forceCreate([
        'user_id' => $owner->id,
        'name' => 'Team C',
        'slug' => 'team-c',
        'personal_team' => false,
    ]);

    $teamB = Team::forceCreate([
        'user_id' => $owner->id,
        'name' => 'Team D',
        'slug' => 'team-d',
        'personal_team' => false,
    ]);

    $visible = RingaData::query()->create([
        'team_id' => $teamB->id,
        'user_id' => (string) $user->id,
        'is_active' => true,
        'started_at' => now()->subMinute(),
        'attempts' => 0,
    ]);

    $hiddenByTeamOnly = RingaData::query()->create([
        'team_id' => $teamB->id,
        'user_id' => '999999',
        'is_active' => true,
        'started_at' => now()->subMinute(),
        'attempts' => 0,
    ]);

    $hiddenByUserOnly = RingaData::query()->create([
        'team_id' => $teamA->id,
        'user_id' => (string) $user->id,
        'is_active' => true,
        'started_at' => now()->subMinute(),
        'attempts' => 0,
    ]);

    $this->actingAs($user);
    Filament::setTenant($teamB, isQuiet: true);

    $ids = RingaDataResource::getEloquentQuery()->pluck('id')->all();

    expect($ids)
        ->toContain($visible->id)
        ->not->toContain($hiddenByTeamOnly->id)
        ->not->toContain($hiddenByUserOnly->id);

    expect(RingaDataResource::getNavigationBadge())->toBe('1');
});
