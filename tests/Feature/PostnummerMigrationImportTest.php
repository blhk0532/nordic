<?php

declare(strict_types=1);

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

it('imports postnummer rows from post_nums and merges matching ratsit_postorter values', function () {
    if (! Schema::hasTable('post_nums') || ! Schema::hasTable('ratsit_postorter') || ! Schema::hasTable('postnummer')) {
        $this->markTestSkipped('Required tables are missing in the current test database.');
    }

    $testId = 'pn-test-'.Str::uuid()->toString();
    $testPostNummerWithSpace = '123 45';
    $testPostNummerWithoutSpace = '12345';
    $testPostOrtCanonical = 'Stockholm';
    $testPostOrtRatsit = 'stockholm';

    // insert a row from the legacy post_nums table with a lan value that
    // should be preserved unless ratsit data explicitly provides another value.
    DB::table('post_nums')->insert([
        'id' => $testId,
        'post_nummer' => $testPostNummerWithSpace,
        'post_ort' => $testPostOrtCanonical,
        'post_lan' => 'Stockholms lan',
        'merinfo_personer_total' => 10,
        'hitta_personer_total' => 5,
        'status' => 'idle',
        'is_active' => true,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    // the matching ratsit row does _not_ include a lan, which previously caused
    // a migration failure.  after the fix we expect the resulting postnummer
    // record to have an empty string for lan (we coerce null -> '').
    DB::table('ratsit_postorter')->insert([
        'post_ort' => $testPostOrtRatsit,
        'post_nummer' => $testPostNummerWithoutSpace,
        'kommun' => 'Stockholms kommun',
        'personer_count' => 99,
        'foretag_count' => 33,
        'personer_link' => 'https://example.test/personer',
        'foretag_link' => 'https://example.test/foretag',
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    // create a second pair where ratsit provides its own lan value.  this lets
    // us verify the merge prefers ratsit data when it's available.
    $secondId = $testId.'-2';
    $secondNumWithSpace = '543 21';
    $secondNumWithoutSpace = '54321';
    $secondOrtCanonical = 'Other';
    $secondOrtRatsit = 'other';

    // additional test rows for the fillMissingKommunAndLan helper:
    $stockholmId = $testId.'-stock';
    $stockholmNum = '999 99';
    DB::table('post_nums')->insert([
        'id' => $stockholmId,
        'post_nummer' => $stockholmNum,
        'post_ort' => 'Whatever',
        'post_lan' => '',
        'status' => 'idle',
        'is_active' => true,
        'created_at' => now(),
        'updated_at' => now(),
    ]);
    DB::table('ratsit_postorter')->insert([
        'post_ort' => 'Stockholm - Bandhagen mfl',
        'post_nummer' => '99999',
        'personer_count' => 0,
        'foretag_count' => 0,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $lanId = $testId.'-lan';
    $lanNum = '555 55';
    DB::table('post_nums')->insert([
        'id' => $lanId,
        'post_nummer' => $lanNum,
        'post_ort' => 'Something',
        'post_lan' => 'Test lan',
        'status' => 'idle',
        'is_active' => true,
        'created_at' => now(),
        'updated_at' => now(),
    ]);
    DB::table('ratsit_postorter')->insert([
        'post_ort' => 'Something',
        'post_nummer' => '55555',
        'personer_count' => 0,
        'foretag_count' => 0,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    DB::table('post_nums')->insert([
        'id' => $secondId,
        'post_nummer' => $secondNumWithSpace,
        'post_ort' => $secondOrtCanonical,
        'post_lan' => 'Original lan',
        'merinfo_personer_total' => 0,
        'hitta_personer_total' => 0,
        'status' => 'idle',
        'is_active' => true,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    DB::table('ratsit_postorter')->insert([
        'post_ort' => $secondOrtRatsit,
        'post_nummer' => $secondNumWithoutSpace,
        'lan' => 'Incoming lan',
        'kommun' => 'Second kommun',
        'personer_count' => 1,
        'foretag_count' => 2,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $migration = require base_path('database/migrations/2025_11_16_192902_create_postnummer.php');
    $reflectionClass = new ReflectionClass($migration);

    $backfillFromPostNums = $reflectionClass->getMethod('backfillFromPostNums');
    $backfillFromPostNums->setAccessible(true);
    $backfillFromPostNums->invoke($migration);

    $mergeFromRatsitPostorter = $reflectionClass->getMethod('mergeFromRatsitPostorter');
    $mergeFromRatsitPostorter->setAccessible(true);
    $mergeFromRatsitPostorter->invoke($migration);

    // run the post‑import patch that fills remaining kommun/lan
    $fillHelper = $reflectionClass->getMethod('fillMissingKommunAndLan');
    $fillHelper->setAccessible(true);
    $fillHelper->invoke($migration);

    // verify first record (ratsit lan was null) now has blank split lan
    $record = DB::table('postnummer')->where('id', $testId)->first();

    expect($record)->not->toBeNull()
        ->and($record->post_nummer)->toBe($testPostNummerWithSpace)
        ->and($record->post_ort)->toBe($testPostOrtCanonical)
        // lan became empty string after merge
        ->and($record->post_lan)->toBe('')
        ->and($record->kommun)->toBe('Stockholms kommun')
        ->and($record->personer_count)->toBe(99)
        ->and($record->foretag_count)->toBe(33)
        ->and($record->personer_link)->toBe('https://example.test/personer')
        ->and($record->foretag_link)->toBe('https://example.test/foretag');

    // confirm the helper applied hard‑coded stockholm mapping
    $stock = DB::table('postnummer')->where('id', $stockholmId)->first();
    expect($stock)->not->toBeNull()->and($stock->kommun)->toBe('Stockholms kommun');

    // lan value should be copied from post_nums for the separate record
    $lanRec = DB::table('postnummer')->where('id', $lanId)->first();
    expect($lanRec)->not->toBeNull()->and($lanRec->post_lan)->toBe('Test lan');

    // now verify second record, where ratsit supplied its own lan
    $secondRecord = DB::table('postnummer')->where('id', $secondId)->first();

    expect($secondRecord)->not->toBeNull()
        ->and($secondRecord->post_nummer)->toBe($secondNumWithSpace)
        ->and($secondRecord->post_ort)->toBe($secondOrtCanonical)
        ->and($secondRecord->post_lan)->toBe('Incoming lan')
        ->and($secondRecord->kommun)->toBe('Second kommun')
        ->and($secondRecord->personer_count)->toBe(1)
        ->and($secondRecord->foretag_count)->toBe(2);

    // simulate duplicate ratsit rows: a later one without kommun should not
    // erase the value from the existing entry.
    DB::table('ratsit_postorter')->insert([
        'post_ort' => $testPostOrtRatsit,
        'post_nummer' => $testPostNummerWithoutSpace,
        'kommun' => null,
        'personer_count' => 0,
        'foretag_count' => 0,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $mergeFromRatsitPostorter->invoke($migration);

    $record = DB::table('postnummer')->where('id', $testId)->first();
    expect($record->kommun)->toBe('Stockholms kommun');

    // cleanup both test sets
    foreach ([$testId, $secondId, $stockholmId, $lanId] as $id) {
        DB::table('postnummer')->where('id', $id)->delete();
        DB::table('post_nums')->where('id', $id)->delete();
    }
    DB::table('ratsit_postorter')->where('post_ort', $testPostOrtRatsit)
        ->where('post_nummer', $testPostNummerWithoutSpace)->delete();
    DB::table('ratsit_postorter')->where('post_ort', $secondOrtRatsit)
        ->where('post_nummer', $secondNumWithoutSpace)->delete();
});

it('also patches blanks when the sverige_postnummer table already exists', function () {
    if (! Schema::hasTable('post_nums') || ! Schema::hasTable('ratsit_postorter')) {
        $this->markTestSkipped('Required tables missing.');
    }

    // build a minimal version of the table ourselves
    Schema::create('sverige_postnummer', function (\Illuminate\Database\Schema\Blueprint $table) {
        $table->string('id')->primary();
        $table->string('post_nummer');
        $table->string('post_ort');
        $table->string('post_lan')->nullable();
        $table->string('kommun')->nullable();
    });

    // insert a row with blanks
    DB::table('sverige_postnummer')->insert([
        'id' => 'exists-1',
        'post_nummer' => '22222',
        'post_ort' => 'Stockholm - Bromma',
        'post_lan' => '',
        'kommun' => null,
    ]);

    // ensure supporting data
    DB::table('post_nums')->insert([
        'id' => 'pn-22222',
        'post_nummer' => '22222',
        'post_ort' => 'X',
        'post_lan' => 'Some lan',
        'status' => 'idle',
        'is_active' => true,
        'created_at' => now(),
        'updated_at' => now(),
    ]);
    DB::table('ratsit_postorter')->insert([
        'post_ort' => 'Stockholm - Bromma',
        'post_nummer' => '22222',
        'personer_count' => 0,
        'foretag_count' => 0,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $migration = require base_path('database/migrations/2025_11_16_192902_create_postnummer.php');
    $reflectionClass = new ReflectionClass($migration);

    // run up() which should hit the existing‑table branch
    $reflectionClass->getMethod('up')->invoke($migration);

    $rec = DB::table('sverige_postnummer')->where('id', 'exists-1')->first();
    expect($rec->kommun)->toBe('Stockholms kommun')
        ->and($rec->post_lan)->toBe('Some lan');

    Schema::dropIfExists('sverige_postnummer');
});
