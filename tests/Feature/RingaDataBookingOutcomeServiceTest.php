<?php

declare(strict_types=1);

use App\Enums\Outcomes;
use App\Models\RingaData;
use App\Services\RingaDataBookingOutcomeService;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

beforeEach(function (): void {
    if (! Schema::hasTable('ringa_data')) {
        Schema::create('ringa_data', function (Blueprint $table): void {
            $table->id();
            $table->string('gatuadress')->nullable();
            $table->string('postnummer')->nullable();
            $table->string('outcome')->nullable();
            $table->boolean('is_outcome')->default(false);
            $table->integer('attempts')->default(0);
            $table->unsignedBigInteger('booking_id')->nullable();
            $table->timestamp('booked_at')->nullable();
            $table->timestamps();
        });
    }

    if (! Schema::hasTable('ringa_data_outcomes')) {
        Schema::create('ringa_data_outcomes', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('ringa_data_id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('coutcome');
            $table->timestamps();
        });
    }
});

it('records booking outcome as enum Yes (Bokning)', function (): void {
    $record = RingaData::query()->create([
        'gatuadress' => 'Testgatan 1',
        'postnummer' => '11122',
        'attempts' => 0,
    ]);

    app(RingaDataBookingOutcomeService::class)->recordBooking($record, 12345);

    $updatedRecord = DB::table('ringa_data')->where('id', $record->id)->first();

    expect($updatedRecord)->not->toBeNull();
    expect((int) $updatedRecord->booking_id)->toBe(12345);
    expect((string) $updatedRecord->outcome)->toBe(Outcomes::Yes->value);
    expect((int) $updatedRecord->is_outcome)->toBe(1);
    expect((int) $updatedRecord->attempts)->toBe(1);

    $outcomeHistory = DB::table('ringa_data_outcomes')
        ->where('ringa_data_id', $record->id)
        ->where('coutcome', Outcomes::Yes->value)
        ->first();

    expect($outcomeHistory)->not->toBeNull();
});
