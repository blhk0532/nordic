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
            $table->decimal('kommun_latitude', 10, 8)->nullable()->after('longitude');
            $table->decimal('kommun_longitude', 11, 8)->nullable()->after('kommun_latitude');
            $table->decimal('postort_latitude', 10, 8)->nullable()->after('kommun_longitude');
            $table->decimal('postort_longitude', 11, 8)->nullable()->after('postort_latitude');
        });
    }

    public function down(): void
    {
        if (! Schema::hasTable('post_nums')) {
            return;
        }

        Schema::table('post_nums', function (Blueprint $table) {
            $table->dropColumn(['kommun_latitude', 'kommun_longitude', 'postort_latitude', 'postort_longitude']);
        });
    }
};
