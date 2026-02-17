<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('hitta_se', function (Blueprint $table) {
            if (! Schema::hasColumn('hitta_se', 'is_telefon')) {
                $table->boolean('is_telefon')->default(false);
            }
            if (! Schema::hasColumn('hitta_se', 'is_ratsit')) {
                $table->boolean('is_ratsit')->default(false);
            }
            if (! Schema::hasColumn('hitta_se', 'is_hus')) {
                $table->boolean('is_hus')->default(false);
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('hitta_se', function (Blueprint $table) {
            $table->dropColumnIfExists(['is_telefon', 'is_ratsit', 'is_hus']);
        });
    }
};
