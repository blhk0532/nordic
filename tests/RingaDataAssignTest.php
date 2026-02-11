<?php

declare(strict_types=1);

use App\Models\RingaData;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(Tests\TestCase::class, RefreshDatabase::class);

it('resets attempts, outcome, outcome_category, and sets is_active when a record is assigned (Tilldela)', function () {
    $user = User::factory()->create();

    $record = RingaData::factory()->create([
        'attempts' => 5,
        'outcome' => 'SomeOutcome',
        'outcome_category' => 'Later',
        'is_active' => false,
        'user_id' => null,
    ]);

    // Simulate the updates applied by the Tilldela bulk action
    $record->update([
        'user_id' => (string) $user->id,
        'calendar_id' => null,
        'started_at' => now()->format('Y-m-d'),
        'expires_at' => now()->addMonth()->format('Y-m-d'),
        'is_active' => true,
        'outcome' => null,
        'outcome_category' => null,
        'attempts' => 0,
    ]);

    $record->refresh();

    expect($record->attempts)->toBe(0);
    expect($record->outcome)->toBeNull();
    expect($record->outcome_category)->toBeNull();
    expect($record->is_active)->toBeTrue();
    expect((string) $record->user_id)->toContain((string) $user->id);
});
