<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

beforeEach(function () {
    Schema::dropIfExists('settings');
    Schema::dropIfExists('sweden_kommuner');
    Schema::dropIfExists('ratsit_kommuner');

    Schema::create('settings', function (Blueprint $table): void {
        $table->id();
        $table->string('group');
        $table->string('name');
        $table->boolean('locked')->default(false);
        $table->json('payload');
        $table->timestamps();

        $table->unique(['group', 'name']);
    });

    Schema::create('sweden_kommuner', function (Blueprint $table): void {
        $table->id();
        $table->string('kommun');
        $table->string('lan')->nullable();
        $table->integer('personer')->nullable();
        $table->integer('foretag')->nullable();
        $table->string('latitude')->nullable();
        $table->string('longitude')->nullable();
        $table->timestamps();
        $table->softDeletes();
    });

    Schema::create('ratsit_kommuner', function (Blueprint $table): void {
        $table->id();
        $table->string('kommun');
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
});

it('imports kommun counts from ratsit aggregates without overwriting unrelated data', function () {
    DB::table('sweden_kommuner')->insert([
        [
            'kommun' => 'Stockholm',
            'lan' => 'Stockholm',
            'personer' => null,
            'foretag' => null,
            'latitude' => '59.3293',
            'longitude' => '18.0686',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'kommun' => 'Malmö',
            'lan' => 'Skåne',
            'personer' => 1,
            'foretag' => 1,
            'latitude' => '55.604981',
            'longitude' => '13.003822',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'kommun' => 'Unknown',
            'lan' => 'Unknown',
            'personer' => 12,
            'foretag' => 3,
            'latitude' => '1.23',
            'longitude' => '4.56',
            'created_at' => now(),
            'updated_at' => now(),
        ],
    ]);

    DB::table('ratsit_kommuner')->insert([
        [
            'kommun' => 'Stockholms',
            'personer_count' => 830607,
            'foretag_count' => 213058,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'kommun' => 'Stockholm - Bromma',
            'personer_count' => 67791,
            'foretag_count' => 14693,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'kommun' => 'Malmö',
            'personer_count' => 299863,
            'foretag_count' => 46569,
            'created_at' => now(),
            'updated_at' => now(),
        ],
    ]);

    $exitCode = Artisan::call('app:import-sweden-kommuner-counts-from-ratsit');

    expect($exitCode)->toBe(0)
        ->and(DB::table('sweden_kommuner')->count())->toBe(3)
        ->and(DB::table('ratsit_kommuner')->count())->toBe(3);

    $stockholm = DB::table('sweden_kommuner')->where('kommun', 'Stockholm')->first();
    $malmo = DB::table('sweden_kommuner')->where('kommun', 'Malmö')->first();
    $unknown = DB::table('sweden_kommuner')->where('kommun', 'Unknown')->first();

    expect($stockholm)->not->toBeNull()
        ->and((int) $stockholm->personer)->toBe(830607)
        ->and((int) $stockholm->foretag)->toBe(213058)
        ->and($stockholm->lan)->toBe('Stockholm')
        ->and($stockholm->latitude)->toBe('59.3293')
        ->and($stockholm->longitude)->toBe('18.0686');

    expect($malmo)->not->toBeNull()
        ->and((int) $malmo->personer)->toBe(299863)
        ->and((int) $malmo->foretag)->toBe(46569)
        ->and($malmo->lan)->toBe('Skåne');

    expect($unknown)->not->toBeNull()
        ->and((int) $unknown->personer)->toBe(12)
        ->and((int) $unknown->foretag)->toBe(3)
        ->and($unknown->latitude)->toBe('1.23')
        ->and($unknown->longitude)->toBe('4.56');
});

it('updates soft deleted sweden kommuner rows without restoring them', function () {
    DB::table('sweden_kommuner')->insert([
        'kommun' => 'Göteborg',
        'lan' => 'Västra Götaland',
        'personer' => null,
        'foretag' => null,
        'latitude' => '57.7089',
        'longitude' => '11.9746',
        'created_at' => now(),
        'updated_at' => now(),
        'deleted_at' => now(),
    ]);

    DB::table('ratsit_kommuner')->insert([
        'kommun' => 'Göteborgs',
        'personer_count' => 510594,
        'foretag_count' => 78032,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $exitCode = Artisan::call('app:import-sweden-kommuner-counts-from-ratsit');

    expect($exitCode)->toBe(0);

    $goteborg = DB::table('sweden_kommuner')->where('kommun', 'Göteborg')->first();

    expect($goteborg)->not->toBeNull()
        ->and((int) $goteborg->personer)->toBe(510594)
        ->and((int) $goteborg->foretag)->toBe(78032)
        ->and($goteborg->deleted_at)->not->toBeNull();
});
