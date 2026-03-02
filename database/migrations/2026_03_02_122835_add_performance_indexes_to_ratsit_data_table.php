<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * TEXT columns in MySQL require a key length prefix.
     * The created_at index may already exist from previous migration.
     */
    public function up(): void
    {
        // Check if indexes exist before creating
        $indexes = DB::select('SHOW INDEX FROM ratsit_data WHERE Key_name IN (
            "ratsit_data_postnummer_index",
            "ratsit_data_postort_index",
            "ratsit_data_kommun_index",
            "ratsit_data_lan_index",
            "ratsit_data_agandeform_index",
            "ratsit_data_bostadstyp_index"
        )');

        $existingIndexes = collect($indexes)->pluck('Key_name')->unique()->values()->all();

        // Indexes on TEXT columns with 20-char prefix for filtering/sorting
        if (! in_array('ratsit_data_postnummer_index', $existingIndexes)) {
            DB::statement('ALTER TABLE ratsit_data ADD INDEX ratsit_data_postnummer_index (postnummer(20))');
        }

        if (! in_array('ratsit_data_postort_index', $existingIndexes)) {
            DB::statement('ALTER TABLE ratsit_data ADD INDEX ratsit_data_postort_index (postort(20))');
        }

        if (! in_array('ratsit_data_kommun_index', $existingIndexes)) {
            DB::statement('ALTER TABLE ratsit_data ADD INDEX ratsit_data_kommun_index (kommun(20))');
        }

        if (! in_array('ratsit_data_lan_index', $existingIndexes)) {
            DB::statement('ALTER TABLE ratsit_data ADD INDEX ratsit_data_lan_index (lan(20))');
        }

        if (! in_array('ratsit_data_agandeform_index', $existingIndexes)) {
            DB::statement('ALTER TABLE ratsit_data ADD INDEX ratsit_data_agandeform_index (agandeform(20))');
        }

        if (! in_array('ratsit_data_bostadstyp_index', $existingIndexes)) {
            DB::statement('ALTER TABLE ratsit_data ADD INDEX ratsit_data_bostadstyp_index (bostadstyp(20))');
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Drop indexes if they exist
        $indexes = DB::select('SHOW INDEX FROM ratsit_data WHERE Key_name IN (
            "ratsit_data_postnummer_index",
            "ratsit_data_postort_index",
            "ratsit_data_kommun_index",
            "ratsit_data_lan_index",
            "ratsit_data_agandeform_index",
            "ratsit_data_bostadstyp_index"
        )');

        $existingIndexes = collect($indexes)->pluck('Key_name')->unique()->values()->all();

        if (in_array('ratsit_data_postnummer_index', $existingIndexes)) {
            DB::statement('ALTER TABLE ratsit_data DROP INDEX ratsit_data_postnummer_index');
        }

        if (in_array('ratsit_data_postort_index', $existingIndexes)) {
            DB::statement('ALTER TABLE ratsit_data DROP INDEX ratsit_data_postort_index');
        }

        if (in_array('ratsit_data_kommun_index', $existingIndexes)) {
            DB::statement('ALTER TABLE ratsit_data DROP INDEX ratsit_data_kommun_index');
        }

        if (in_array('ratsit_data_lan_index', $existingIndexes)) {
            DB::statement('ALTER TABLE ratsit_data DROP INDEX ratsit_data_lan_index');
        }

        if (in_array('ratsit_data_agandeform_index', $existingIndexes)) {
            DB::statement('ALTER TABLE ratsit_data DROP INDEX ratsit_data_agandeform_index');
        }

        if (in_array('ratsit_data_bostadstyp_index', $existingIndexes)) {
            DB::statement('ALTER TABLE ratsit_data DROP INDEX ratsit_data_bostadstyp_index');
        }
    }
};
