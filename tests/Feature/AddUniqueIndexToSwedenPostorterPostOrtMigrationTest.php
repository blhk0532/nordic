<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

beforeEach(function () {
    Schema::dropIfExists('sweden_postorter');

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
});

it('adds unique index and prevents duplicate post_ort values', function () {
    DB::table('sweden_postorter')->insert([
        [
            'post_ort' => 'Stockholm',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'post_ort' => 'Stockholm',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'post_ort' => 'Göteborg',
            'created_at' => now(),
            'updated_at' => now(),
        ],
    ]);

    $migration = require database_path('migrations/2026_03_05_115710_add_unique_index_to_sweden_postorter_post_ort.php');
    $migration->up();

    expect(DB::table('sweden_postorter')->where('post_ort', 'Stockholm')->count())->toBe(1);

    DB::table('sweden_postorter')->insert([
        'post_ort' => 'Malmö',
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    expect(fn () => DB::table('sweden_postorter')->insert([
        'post_ort' => 'Malmö',
        'created_at' => now(),
        'updated_at' => now(),
    ]))->toThrow(UniqueConstraintViolationException::class);

    $migration->down();
});
