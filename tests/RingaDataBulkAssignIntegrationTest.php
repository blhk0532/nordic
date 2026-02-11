<?php

declare(strict_types=1);

use App\Filament\App\Resources\RingaData\Pages\ListRingaData;
use App\Models\BookingCalendar;
use App\Models\RingaData;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;

uses(Tests\TestCase::class, RefreshDatabase::class);

it('assigns records via the Tilldela bulk action and updates fields immediately', function () {
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
        'outcome_category' => 'Later',
        'user_id' => null,
        'is_active' => false,
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
    expect($record->outcome_category)->toBeNull();
    expect($record->is_active)->toBeTrue();
    expect((string) $record->user_id)->toContain((string) $assignee->id);
    expect($record->calendar_id)->toBe($calendar->id);
    expect($record->started_at?->toDateString())->toBe(now()->format('Y-m-d'));
    expect($record->expires_at?->toDateString())->toBe(now()->addMonth()->format('Y-m-d'));
});
