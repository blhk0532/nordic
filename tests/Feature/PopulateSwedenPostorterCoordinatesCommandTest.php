<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

beforeEach(function () {
    Schema::dropIfExists('sweden_postorter');
    Schema::dropIfExists('sweden_postnummer');

    Schema::create('sweden_postorter', function (Blueprint $table): void {
        $table->id();
        $table->string('post_ort');
        $table->string('kommun')->nullable();
        $table->string('lan')->nullable();
        $table->string('latitude')->nullable();
        $table->string('longitude')->nullable();
        $table->integer('personer')->nullable();
        $table->integer('foretag')->nullable();
        $table->timestamps();
    });

    Schema::create('sweden_postnummer', function (Blueprint $table): void {
        $table->id();
        $table->string('post_nummer')->unique();
        $table->string('post_ort')->nullable();
        $table->decimal('latitude', 10, 7)->nullable();
        $table->decimal('longitude', 10, 7)->nullable();
        $table->timestamps();
    });
});

it('updates sweden_postorter with first available matching coordinates from sweden_postnummer', function () {
    DB::table('sweden_postnummer')->insert([
        [
            'post_nummer' => '100 01',
            'post_ort' => 'Stockholm',
            'latitude' => null,
            'longitude' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'post_nummer' => '100 02',
            'post_ort' => 'Stockholm',
            'latitude' => 59.3010000,
            'longitude' => 18.1010000,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'post_nummer' => '100 03',
            'post_ort' => 'Stockholm',
            'latitude' => 59.3020000,
            'longitude' => 18.1020000,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'post_nummer' => '400 10',
            'post_ort' => 'Goteborg',
            'latitude' => 57.7000000,
            'longitude' => 11.9000000,
            'created_at' => now(),
            'updated_at' => now(),
        ],
    ]);

    DB::table('sweden_postorter')->insert([
        [
            'post_ort' => 'Stockholm',
            'latitude' => null,
            'longitude' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'post_ort' => 'Göteborg',
            'latitude' => null,
            'longitude' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'post_ort' => 'Uppsala',
            'latitude' => '10.0000000',
            'longitude' => '20.0000000',
            'created_at' => now(),
            'updated_at' => now(),
        ],
    ]);

    $exitCode = Artisan::call('app:populate-sweden-postorter-coordinates');

    expect($exitCode)->toBe(0);

    $stockholm = DB::table('sweden_postorter')->where('post_ort', 'Stockholm')->first();
    expect($stockholm)->not->toBeNull();
    expect((float) $stockholm->latitude)->toBe(59.301);
    expect((float) $stockholm->longitude)->toBe(18.101);

    $goteborg = DB::table('sweden_postorter')->where('post_ort', 'Göteborg')->first();
    expect($goteborg)->not->toBeNull();
    expect((float) $goteborg->latitude)->toBe(57.7);
    expect((float) $goteborg->longitude)->toBe(11.9);

    $uppsala = DB::table('sweden_postorter')->where('post_ort', 'Uppsala')->first();
    expect($uppsala)->not->toBeNull();
    expect($uppsala->latitude)->toBe('10.0000000');
    expect($uppsala->longitude)->toBe('20.0000000');
});
