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
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('current_company_id')->nullable();
            $table->foreignId('current_connected_account_id')->nullable();
            $table->string('profile_photo_path', 2048)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['current_company_id']);
            $table->dropForeign(['current_connected_account_id']);
            $table->dropColumn(['current_company_id', 'current_connected_account_id', 'profile_photo_path']);
        });
    }
};
