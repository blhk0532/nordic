<?php

use Database\Seeders\SyncRatsitKommunCoordinatesSeeder;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

beforeEach(function () {
    Schema::dropIfExists('ratsit_kommuner');
    Schema::dropIfExists('swedish_kommuner');

    Schema::create('swedish_kommuner', function (Blueprint $table): void {
        $table->id();
        $table->string('kommun')->unique();
        $table->string('lan')->nullable();
        $table->decimal('lat', 10, 7)->nullable();
        $table->decimal('lng', 10, 7)->nullable();
        $table->timestamps();
    });

    Schema::create('ratsit_kommuner', function (Blueprint $table): void {
        $table->id();
        $table->string('kommun')->unique();
        $table->integer('personer_count')->default(0);
        $table->integer('foretag_count')->default(0);
        $table->string('personer_link')->nullable();
        $table->integer('personer_postorter')->default(0);
        $table->string('foretag_link')->nullable();
        $table->integer('foretag_postorter')->default(0);
        $table->decimal('lat', 10, 7)->nullable();
        $table->decimal('lng', 10, 7)->nullable();
        $table->timestamps();
    });
});

it('fills missing coordinates without modifying other ratsit kommun fields', function () {
    DB::table('swedish_kommuner')->insert([
        'kommun' => 'Stockholm',
        'lan' => 'Stockholm',
        'lat' => 59.3293,
        'lng' => 18.0686,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    DB::table('ratsit_kommuner')->insert([
        'kommun' => 'Stockholms',
        'personer_count' => 123,
        'foretag_count' => 45,
        'personer_link' => 'https://example.test/personer',
        'foretag_link' => 'https://example.test/foretag',
        'personer_postorter' => 3,
        'foretag_postorter' => 2,
        'lat' => null,
        'lng' => null,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $exitCode = Artisan::call('db:seed', ['--class' => SyncRatsitKommunCoordinatesSeeder::class]);

    expect($exitCode)->toBe(0);

    $row = DB::table('ratsit_kommuner')->where('kommun', 'Stockholms')->first();

    expect((float) $row->lat)->toBe(59.3293)
        ->and((float) $row->lng)->toBe(18.0686)
        ->and((int) $row->personer_count)->toBe(123)
        ->and((int) $row->foretag_count)->toBe(45)
        ->and($row->personer_link)->toBe('https://example.test/personer')
        ->and($row->foretag_link)->toBe('https://example.test/foretag')
        ->and((int) $row->personer_postorter)->toBe(3)
        ->and((int) $row->foretag_postorter)->toBe(2);
});

it('does not overwrite existing coordinates', function () {
    DB::table('swedish_kommuner')->insert([
        'kommun' => 'Uppsala',
        'lan' => 'Uppsala',
        'lat' => 59.8586,
        'lng' => 17.6389,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    DB::table('ratsit_kommuner')->insert([
        'kommun' => 'Uppsala',
        'personer_count' => 50,
        'foretag_count' => 20,
        'personer_link' => null,
        'foretag_link' => null,
        'personer_postorter' => 1,
        'foretag_postorter' => 1,
        'lat' => 1.1111,
        'lng' => 2.2222,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $exitCode = Artisan::call('db:seed', ['--class' => SyncRatsitKommunCoordinatesSeeder::class]);

    expect($exitCode)->toBe(0);

    $row = DB::table('ratsit_kommuner')->where('kommun', 'Uppsala')->first();

    expect((float) $row->lat)->toBe(1.1111)
        ->and((float) $row->lng)->toBe(2.2222);
});
