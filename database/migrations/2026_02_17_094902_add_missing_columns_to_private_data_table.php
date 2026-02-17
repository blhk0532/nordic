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
        Schema::table('private_data', function (Blueprint $table) {
            // Hitta specific fields
            if (! Schema::hasColumn('private_data', 'hitta_bostadstyp')) {
                $table->text('hitta_bostadstyp')->nullable();
            }
            if (! Schema::hasColumn('private_data', 'hitta_alder')) {
                $table->text('hitta_alder')->nullable();
            }
            if (! Schema::hasColumn('private_data', 'hitta_telefon')) {
                $table->longText('hitta_telefon')->nullable();
            }

            // IDs for cross-reference
            if (! Schema::hasColumn('private_data', 'hitta_id')) {
                $table->bigInteger('hitta_id')->nullable();
            }
            if (! Schema::hasColumn('private_data', 'ratsit_id')) {
                $table->bigInteger('ratsit_id')->nullable();
            }
            if (! Schema::hasColumn('private_data', 'luid')) {
                $table->string('luid')->nullable();
            }

            // Queue flags
            if (! Schema::hasColumn('private_data', 'ratsit_queue')) {
                $table->boolean('ratsit_queue')->default(false);
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('private_data', function (Blueprint $table) {
            $table->dropColumnIfExists(['hitta_bostadstyp', 'hitta_alder', 'hitta_telefon', 'hitta_id', 'ratsit_id', 'luid', 'ratsit_queue']);
        });
    }
};
