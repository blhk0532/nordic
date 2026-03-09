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
            $table->string('title')->nullable()->change();
            $table->string('short_uuid')->nullable()->change();
            $table->text('name')->nullable()->change();
            $table->text('givenNameOrFirstName')->nullable()->change();
            $table->string('personalNumber')->nullable()->change();
            $table->json('address')->nullable()->change();
            $table->string('gender')->nullable()->change();
            $table->boolean('is_celebrity')->nullable()->change();
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
