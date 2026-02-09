<?php

declare(strict_types=1);

use App\Filament\App\Resources\RingaData\Pages\ListRingaData;
use App\Models\BookingCalendar;
use App\Models\RingaData;
use App\Models\User;

use Livewire\Livewire;



it('assigns records via the Tilldela bulk action and resets attempts/outcome', function () {
    $admin = User::factory()->create(['role' => 'admin']);
    $assignee = User::factory()->create();

    $calendar = BookingCalendar::create([
        'name' => 'Test cal',
        'owner_id' => $admin->id,
        'is_active' => true,
    ]);

    $record = RingaData::factory()->create([
        'attempts' => 5,
        'outcome' => 'SomeOutcome',
        'user_id' => null,
        'is_active' => true,
    ]);

    $this->actingAs($admin);

    Livewire::test(ListRingaData::class)
        ->callTableBulkAction(
            'assignToUsers',
            [$record->id],
            [
                'users' => [$assignee->id],
                'calendar_id' => $calendar->id,
                'started_at' => now()->format('Y-m-d'),
                'expires_at' => now()->addMonth()->format('Y-m-d'),
            ]
        );

    $record->refresh();

    expect($record->attempts)->toBe(0);
    expect($record->outcome)->toBeNull();
    expect((string) $record->user_id)->toContain((string) $assignee->id);
    expect($record->calendar_id)->toBe($calendar->id);
});
