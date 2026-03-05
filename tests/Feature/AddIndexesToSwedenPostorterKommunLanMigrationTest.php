<?php

use Illuminate\Database\Schema\Blueprint;
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

it('adds and removes kommun and lan indexes', function () {
    expect(Schema::hasIndex('sweden_postorter', 'sweden_postorter_kommun_index'))->toBeFalse();
    expect(Schema::hasIndex('sweden_postorter', 'sweden_postorter_lan_index'))->toBeFalse();

    $migration = require database_path('migrations/2026_03_05_121628_add_indexes_to_sweden_postorter_kommun_lan.php');
    $migration->up();

    expect(Schema::hasIndex('sweden_postorter', 'sweden_postorter_kommun_index'))->toBeTrue();
    expect(Schema::hasIndex('sweden_postorter', 'sweden_postorter_lan_index'))->toBeTrue();

    $migration->down();

    expect(Schema::hasIndex('sweden_postorter', 'sweden_postorter_kommun_index'))->toBeFalse();
    expect(Schema::hasIndex('sweden_postorter', 'sweden_postorter_lan_index'))->toBeFalse();
});
