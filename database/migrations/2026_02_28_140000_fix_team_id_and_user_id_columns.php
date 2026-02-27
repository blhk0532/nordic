<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Drop foreign key and index on team_id (already handled, skip)

        // Change team_id to unsignedBigInteger (nullable)
        Schema::table('ringa_data', function (Blueprint $table) {
            $table->unsignedBigInteger('team_id')->nullable()->change();
        });

        // Optionally, re-add the foreign key if needed
        Schema::table('ringa_data', function (Blueprint $table) {
            $table->foreign('team_id')->references('id')->on('teams')->onDelete('cascade');
        });

        // Clean up user_id: if it's not already unsignedBigInteger, convert it
        // First, if user_id is not integer, set all non-integer values to null
        DB::statement("UPDATE ringa_data SET user_id = NULL WHERE user_id REGEXP '[^0-9]'");
        Schema::table('ringa_data', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable()->change();
        });
    }

    public function down(): void
    {
        // Revert user_id and team_id to text (not recommended, but for rollback)
        Schema::table('ringa_data', function (Blueprint $table) {
            $table->text('user_id')->nullable()->change();
            $table->text('team_id')->nullable()->change();
        });
    }
};
