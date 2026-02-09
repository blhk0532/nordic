<?php

declare(strict_types=1);

use App\Models\PostNum;

test('RunHittaSearchPersonsJob updates status without mass assignment error', function () {
    // Create a PostNum instance manually
    $postNum = PostNum::create([
        'id' => 'test-123',
        'post_nummer' => '12345',
        'post_ort' => 'Test Ort',
        'post_lan' => 'Test Lan',
        'status' => 'pending',
    ]);

    // Test that the update works without mass assignment error
    $postNum->update(['status' => 'complete']);

    expect($postNum->fresh()->status)->toBe('complete');
    expect($postNum->fresh()->updated_at)->not->toBeNull();
});
