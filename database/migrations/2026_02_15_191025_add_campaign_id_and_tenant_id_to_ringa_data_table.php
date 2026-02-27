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
        if (! Schema::hasTable('ringa_data')) {
            return;
        }

        if (! Schema::hasColumn('ringa_data', 'campaign_id')) {
            Schema::table('ringa_data', function (Blueprint $table) {
                $table->unsignedBigInteger('campaign_id')->nullable()->index();
            });
        }

        if (! Schema::hasColumn('ringa_data', 'tenant_id')) {
            Schema::table('ringa_data', function (Blueprint $table) {
                $table->unsignedBigInteger('tenant_id')->nullable()->index();
                $table->foreign('tenant_id')->references('id')->on('teams')->onDelete('cascade');
            });
        }
    }

    public function down(): void
    {
        if (! Schema::hasTable('ringa_data')) {
            return;
        }

        Schema::table('ringa_data', function (Blueprint $table) {
            $table->dropForeign(['tenant_id']);
            $table->dropColumn(['campaign_id', 'tenant_id']);
        });
    }
};
