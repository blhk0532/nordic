<?php

declare(strict_types=1);

use App\Models\RingaDataOutcome;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(Tests\TestCase::class, RefreshDatabase::class);

test('outcome fillable fields are set correctly', function () {
    $fillable = (new RingaDataOutcome)->getFillable();

    expect($fillable)->toContain('ringa_data_id')
        ->toContain('user_id')
        ->toContain('coutcome');
});

test('outcome has relationships defined', function () {
    $outcome = new RingaDataOutcome;

    expect(method_exists($outcome, 'ringaData'))->toBeTrue()
        ->and(method_exists($outcome, 'user'))->toBeTrue();
});

test('outcome table exists with correct columns', function () {
    expect(\Illuminate\Support\Facades\Schema::hasTable('ringa_data_outcomes'))->toBeTrue()
        ->and(\Illuminate\Support\Facades\Schema::hasColumn('ringa_data_outcomes', 'ringa_data_id'))->toBeTrue()
        ->and(\Illuminate\Support\Facades\Schema::hasColumn('ringa_data_outcomes', 'user_id'))->toBeTrue()
        ->and(\Illuminate\Support\Facades\Schema::hasColumn('ringa_data_outcomes', 'coutcome'))->toBeTrue();
});
