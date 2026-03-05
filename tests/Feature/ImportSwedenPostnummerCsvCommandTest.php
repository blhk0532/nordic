<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schema;

beforeEach(function () {
    Schema::dropIfExists('sweden_postnummer');

    Schema::create('sweden_postnummer', function (Blueprint $table): void {
        $table->id();
        $table->unsignedInteger('csv_id')->nullable()->index();
        $table->string('post_nummer')->unique();
        $table->string('post_ort')->nullable()->index();
        $table->string('lan')->nullable()->index();
        $table->string('kommun')->nullable()->index();
        $table->string('country', 2)->nullable()->index();
        $table->decimal('latitude', 10, 7)->nullable();
        $table->decimal('longitude', 10, 7)->nullable();
        $table->integer('personer')->nullable();
        $table->integer('foretag')->nullable();
        $table->timestamp('personer_saved')->nullable();
        $table->timestamp('foretag_saved')->nullable();
        $table->timestamps();
    });
});

it('imports sweden postnummer rows from csv', function () {
    $csvPath = base_path('tests/tmp_sweden_postnummer.csv');

    file_put_contents(
        $csvPath,
        implode("\n", [
            'id,post_nummer,post_ort,lan,kommun,country,latitude,longitude,personer,foretag,created_at,updated_at',
            '10004,100 04,Stockholm,Stockholm,Stockholm,SE,59.3326,18.0649,10,5,2026-01-01 10:00:00,2026-01-01 11:00:00',
            '10005,100 05,Stockholm,Stockholm,Stockholm,SE,59.3326,18.0649,20,7,2026-01-01 10:00:00,2026-01-01 11:00:00',
        ]),
    );

    $exitCode = Artisan::call('app:import-sweden-postnummer-csv', ['path' => $csvPath]);

    expect($exitCode)->toBe(0);

    expect(Schema::hasTable('sweden_postnummer'))->toBeTrue();
    expect(\Illuminate\Support\Facades\DB::table('sweden_postnummer')->count())->toBe(2);

    $firstRow = \Illuminate\Support\Facades\DB::table('sweden_postnummer')
        ->where('post_nummer', '100 04')
        ->first();

    expect($firstRow)->not->toBeNull();
    expect($firstRow->post_ort)->toBe('Stockholm');
    expect((float) $firstRow->latitude)->toBe(59.3326);
    expect((float) $firstRow->longitude)->toBe(18.0649);
    expect((int) $firstRow->personer)->toBe(10);
    expect((int) $firstRow->foretag)->toBe(5);

    @unlink($csvPath);
});
