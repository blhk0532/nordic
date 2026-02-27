<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('ratsit_adresser')) {
            return;
        }

        if (! Schema::hasColumn('ratsit_adresser', 'kommun')) {
            Schema::table('ratsit_adresser', function (Blueprint $table) {
                $table->string('kommun')->nullable()->after('post_nummer');
                $table->index(['kommun']);
            });
        }

        // Backfill kommun from ratsit_postorter where possible
        if (Schema::hasTable('ratsit_postorter') && DB::connection()->getDriverName() !== 'sqlite') {
            DB::statement(<<<'SQL'
                UPDATE ratsit_adresser a
                JOIN ratsit_postorter p ON a.post_ort = p.post_ort AND a.post_nummer = p.post_nummer
                SET a.kommun = p.kommun
                WHERE (a.kommun IS NULL OR a.kommun = '') AND (p.kommun IS NOT NULL AND p.kommun <> '');
            SQL
            );
        }
    }

    public function down(): void
    {
        if (! Schema::hasTable('ratsit_adresser')) {
            return;
        }

        Schema::table('ratsit_adresser', function (Blueprint $table) {
            $table->dropIndex(['kommun']);
            $table->dropColumn('kommun');
        });
    }
};
