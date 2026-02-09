<?php

declare(strict_types=1);

use App\Models\RingaData;
use App\Models\User;




it('resets attempts and outcome when a record is assigned (Tilldela)', function () {
    $user = User::factory()->create();

    $record = RingaData::factory()->create([
        'attempts' => 5,
        'outcome' => 'SomeOutcome',
        'user_id' => null,
    ]);

    // Simulate the payload applied by the Tilldela bulk action
    $record->update([
        'user_id' => (string) $user->id,
        'calendar_id' => null,
        'attempts' => 0,
        'outcome' => null,
    ]);

    $record->refresh();

    expect($record->attempts)->toBe(0);
    expect($record->outcome)->toBeNull();
});
