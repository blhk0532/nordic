<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

beforeEach(function () {
    Schema::dropIfExists('sweden_postorter');
    Schema::dropIfExists('ratsit_postorter');
    Schema::dropIfExists('sweden_postnummer');

    Schema::create('ratsit_postorter', function (Blueprint $table): void {
        $table->id();
        $table->string('post_ort');
        $table->string('kommun')->nullable();
        $table->decimal('lat', 10, 8)->nullable();
        $table->decimal('lng', 11, 8)->nullable();
        $table->string('post_nummer');
        $table->integer('personer_count')->default(0);
        $table->integer('foretag_count')->default(0);
        $table->timestamps();
    });

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
        $table->string('lan')->nullable();
        $table->timestamps();
    });
});

it('populates unique postorter with aggregated data from ratsit_postorter', function () {
    DB::table('ratsit_postorter')->insert([
        [
            'post_ort' => 'Stockholm',
            'kommun' => 'Stockholm',
            'lat' => 59.33258000,
            'lng' => 18.06490000,
            'post_nummer' => '11122',
            'personer_count' => 10,
            'foretag_count' => 3,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'post_ort' => 'Stockholm',
            'kommun' => 'Stockholm',
            'lat' => 59.33300000,
            'lng' => 18.06500000,
            'post_nummer' => '11123',
            'personer_count' => 5,
            'foretag_count' => 2,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'post_ort' => 'Göteborg',
            'kommun' => 'Göteborg',
            'lat' => 57.70887000,
            'lng' => 11.97456000,
            'post_nummer' => '41103',
            'personer_count' => 7,
            'foretag_count' => 4,
            'created_at' => now(),
            'updated_at' => now(),
        ],
    ]);

    DB::table('sweden_postnummer')->insert([
        [
            'post_nummer' => '111 22',
            'post_ort' => 'Stockholm',
            'lan' => 'Stockholm',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'post_nummer' => '411 03',
            'post_ort' => 'Göteborg',
            'lan' => 'Västra Götaland',
            'created_at' => now(),
            'updated_at' => now(),
        ],
    ]);

    $exitCode = Artisan::call('app:populate-sweden-postorter-from-ratsit');

    expect($exitCode)->toBe(0);
    expect(DB::table('sweden_postorter')->count())->toBe(2);

    $stockholm = DB::table('sweden_postorter')->where('post_ort', 'Stockholm')->first();

    expect($stockholm)->not->toBeNull();
    expect($stockholm->kommun)->toBe('Stockholm');
    expect($stockholm->lan)->toBe('Stockholm');
    expect((int) $stockholm->personer)->toBe(15);
    expect((int) $stockholm->foretag)->toBe(5);

    $exitCodeSecondRun = Artisan::call('app:populate-sweden-postorter-from-ratsit');

    expect($exitCodeSecondRun)->toBe(0);
    expect(DB::table('sweden_postorter')->count())->toBe(2);
});
