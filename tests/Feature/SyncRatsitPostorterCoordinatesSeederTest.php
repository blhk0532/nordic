<?php

use Database\Seeders\SyncRatsitPostorterCoordinatesSeeder;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

beforeEach(function () {
    Schema::dropIfExists('ratsit_postorter');
    Schema::dropIfExists('post_nums');

    Schema::create('post_nums', function (Blueprint $table): void {
        $table->string('id')->primary();
        $table->string('post_nummer');
        $table->string('post_ort')->nullable();
        $table->decimal('postort_latitude', 10, 8)->nullable();
        $table->decimal('postort_longitude', 11, 8)->nullable();
        $table->timestamps();
    });

    Schema::create('ratsit_postorter', function (Blueprint $table): void {
        $table->id();
        $table->string('post_ort');
        $table->string('kommun')->nullable();
        $table->string('post_nummer');
        $table->integer('personer_count')->default(0);
        $table->integer('foretag_count')->default(0);
        $table->string('personer_link')->nullable();
        $table->string('foretag_link')->nullable();
        $table->decimal('lat', 10, 8)->nullable();
        $table->decimal('lng', 11, 8)->nullable();
        $table->timestamps();
    });
});

it('fills missing ratsit_postorter coordinates from post_nums', function () {
    DB::table('post_nums')->insert([
        'id' => 'pn-1',
        'post_nummer' => '111 22',
        'post_ort' => 'Stockholm',
        'postort_latitude' => 59.33258000,
        'postort_longitude' => 18.06490000,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    DB::table('ratsit_postorter')->insert([
        'post_ort' => 'Stockholm',
        'kommun' => 'Stockholm',
        'post_nummer' => '11122',
        'personer_count' => 123,
        'foretag_count' => 45,
        'personer_link' => 'https://example.test/p',
        'foretag_link' => 'https://example.test/f',
        'lat' => null,
        'lng' => null,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $exitCode = Artisan::call('db:seed', ['--class' => SyncRatsitPostorterCoordinatesSeeder::class]);

    expect($exitCode)->toBe(0);

    $row = DB::table('ratsit_postorter')->where('post_nummer', '11122')->first();

    expect((float) $row->lat)->toBe(59.33258)
        ->and((float) $row->lng)->toBe(18.0649)
        ->and((int) $row->personer_count)->toBe(123)
        ->and((int) $row->foretag_count)->toBe(45)
        ->and($row->personer_link)->toBe('https://example.test/p')
        ->and($row->foretag_link)->toBe('https://example.test/f');
});

it('does not overwrite already existing coordinates', function () {
    DB::table('post_nums')->insert([
        'id' => 'pn-2',
        'post_nummer' => '222 33',
        'post_ort' => 'Malmö',
        'postort_latitude' => 55.60498000,
        'postort_longitude' => 13.00382000,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    DB::table('ratsit_postorter')->insert([
        'post_ort' => 'Malmö',
        'kommun' => 'Malmö',
        'post_nummer' => '22233',
        'personer_count' => 5,
        'foretag_count' => 3,
        'personer_link' => null,
        'foretag_link' => null,
        'lat' => 1.11111111,
        'lng' => 2.22222222,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $exitCode = Artisan::call('db:seed', ['--class' => SyncRatsitPostorterCoordinatesSeeder::class]);

    expect($exitCode)->toBe(0);

    $row = DB::table('ratsit_postorter')->where('post_nummer', '22233')->first();

    expect((float) $row->lat)->toBe(1.11111111)
        ->and((float) $row->lng)->toBe(2.22222222);
});
