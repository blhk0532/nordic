<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

beforeEach(function () {
    Schema::dropIfExists('settings');
    Schema::dropIfExists('sweden_geo');

    Schema::create('settings', function (Blueprint $table): void {
        $table->id();
        $table->string('group');
        $table->string('name');
        $table->boolean('locked')->default(false);
        $table->json('payload');
        $table->timestamps();

        $table->unique(['group', 'name']);
    });

    DB::table('settings')->insert([
        [
            'group' => 'fin-mail-logging',
            'name' => 'enabled',
            'locked' => false,
            'payload' => json_encode(true, JSON_THROW_ON_ERROR),
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'group' => 'fin-mail-logging',
            'name' => 'store_rendered_body',
            'locked' => false,
            'payload' => json_encode(true, JSON_THROW_ON_ERROR),
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'group' => 'fin-mail-logging',
            'name' => 'retention_days',
            'locked' => false,
            'payload' => json_encode(90, JSON_THROW_ON_ERROR),
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'group' => 'fin-mail-logging',
            'name' => 'cleanup_enabled',
            'locked' => false,
            'payload' => json_encode(false, JSON_THROW_ON_ERROR),
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'group' => 'fin-mail-logging',
            'name' => 'cleanup_frequency',
            'locked' => false,
            'payload' => json_encode(1, JSON_THROW_ON_ERROR),
            'created_at' => now(),
            'updated_at' => now(),
        ],
    ]);

    Schema::create('sweden_geo', function (Blueprint $table): void {
        $table->id();
        $table->string('postnummer')->unique();
        $table->string('postort')->nullable()->index();
        $table->string('kommun')->nullable()->index();
        $table->string('lan')->nullable()->index();
        $table->decimal('latitude', 10, 7)->nullable();
        $table->decimal('longitude', 10, 7)->nullable();
        $table->timestamps();
    });
});

it('imports sweden geo rows from csv', function () {
    $csvPath = base_path('tests/tmp_sweden_geo.csv');

    file_put_contents(
        $csvPath,
        implode("\n", [
            'postnummer,postort,kommun,lan,latitude,longitude',
            '100 04,Stockholm,Stockholm,Stockholm,59.3326,18.0649',
            '100 05,Stockholm,Stockholm,Stockholm,59.3326,18.0649',
        ]),
    );

    $exitCode = Artisan::call('app:import-sweden-geo-csv', ['path' => $csvPath]);

    expect($exitCode)->toBe(0);
    expect(Schema::hasTable('sweden_geo'))->toBeTrue();
    expect(DB::table('sweden_geo')->count())->toBe(2);

    $firstRow = DB::table('sweden_geo')->where('postnummer', '100 04')->first();

    expect($firstRow)->not->toBeNull();
    expect($firstRow->postort)->toBe('Stockholm');
    expect($firstRow->kommun)->toBe('Stockholm');
    expect($firstRow->lan)->toBe('Stockholm');
    expect((float) $firstRow->latitude)->toBe(59.3326);
    expect((float) $firstRow->longitude)->toBe(18.0649);

    @unlink($csvPath);
});
