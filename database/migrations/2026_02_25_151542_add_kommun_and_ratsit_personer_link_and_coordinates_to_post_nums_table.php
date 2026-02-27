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
        if (! Schema::hasTable('post_nums')) {
            return;
        }

        Schema::table('post_nums', function (Blueprint $table) {
            $table->string('kommun')->nullable()->after('post_ort');
            $table->string('ratsit_personer_link')->nullable()->after('status');
            $table->decimal('latitude', 10, 8)->nullable()->after('ratsit_personer_link');
            $table->decimal('longitude', 11, 8)->nullable()->after('latitude');
        });
    }

    public function down(): void
    {
        if (! Schema::hasTable('post_nums')) {
            return;
        }

        Schema::table('post_nums', function (Blueprint $table) {
            $table->dropColumn(['kommun', 'ratsit_personer_link', 'latitude', 'longitude']);
        });
    }
};
