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
        Schema::table('merinfos', function (Blueprint $table) {
            $table->boolean('has_company_engagement')->nullable()->change();
            $table->integer('number_plus_count')->nullable()->change();
            $table->json('phone_number')->nullable()->change();
            $table->text('url')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
