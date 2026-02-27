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
        if (! Schema::hasTable('whatsapp_agents')) {
            return;
        }

        Schema::table('whatsapp_agents', function (Blueprint $table) {
            $table->foreignId('team_id')->constrained()->cascadeOnDelete();
        });
    }

    public function down(): void
    {
        if (! Schema::hasTable('whatsapp_agents')) {
            return;
        }

        Schema::table('whatsapp_agents', function (Blueprint $table) {
            $table->dropForeign(['team_id']);
            $table->dropColumn('team_id');
        });
    }
};
