<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

describe('User fillable mass assignment', function () {
    it('allows mass assignment for name_first, name_last, assigned_to_id, author_id', function () {
        $data = [
            'name_first' => 'Alice',
            'name_last' => 'Smith',
            'assigned_to_id' => 42,
            'author_id' => 7,
        ];
        $user = User::factory()->make($data);
        expect($user->name_first)->toBe('Alice');
        expect($user->name_last)->toBe('Smith');
        expect($user->assigned_to_id)->toBe(42);
        expect($user->author_id)->toBe(7);
    });
});
