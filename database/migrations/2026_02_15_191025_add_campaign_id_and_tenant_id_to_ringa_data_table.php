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
        Schema::table('ringa_data', function (Blueprint $table) {
            $table->unsignedBigInteger('campaign_id')->nullable()->index();
            $table->unsignedBigInteger('tenant_id')->nullable()->index();
            $table->foreign('tenant_id')->references('id')->on('teams')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ringa_data', function (Blueprint $table) {
            $table->dropForeign(['tenant_id']);
            $table->dropColumn(['campaign_id', 'tenant_id']);
        });
    }
};
