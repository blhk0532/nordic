<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('hitta_se')) {
            return;
        }

        // SQLite doesn't support CHECK constraints, skip on SQLite
        if (DB::connection()->getDriverName() === 'sqlite') {
            return;
        }

        // Fix existing constraint violations: mark houses with phones as requiring Ratsit check
        DB::statement(
            'UPDATE hitta_se SET is_ratsit = 1
            WHERE is_hus = 1 AND is_telefon = 1 AND is_ratsit = 0'
        );

        // Drop constraint if it exists (ignore errors if not exists)
        try {
            DB::statement('ALTER TABLE hitta_se DROP CONSTRAINT check_ratsit_required');
        } catch (\Exception $e) {
            // Constraint doesn't exist, that's ok
        }

        // Add CHECK constraint: if is_hus=1 AND is_telefon=1, then is_ratsit MUST be 1
        DB::statement(
            'ALTER TABLE hitta_se ADD CONSTRAINT check_ratsit_required CHECK (
                NOT (is_hus = 1 AND is_telefon = 1 AND is_ratsit = 0)
            )'
        );
    }

    public function down(): void
    {
        if (DB::connection()->getDriverName() === 'sqlite') {
            return;
        }

        // Drop the constraint
        try {
            DB::statement('ALTER TABLE hitta_se DROP CONSTRAINT check_ratsit_required');
        } catch (\Exception $e) {
            // Already dropped, that's ok
        }
    }
};
