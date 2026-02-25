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
        Schema::create('sweden', function (Blueprint $table) {
            $table->id();
            $table->string('luid')->nullable();
            $table->string('gatuadress')->nullable();
            $table->string('postnummer')->nullable();
            $table->string('postort')->nullable();
            $table->string('forsamling')->nullable();
            $table->string('kommun')->nullable();
            $table->string('lan')->nullable();
            $table->decimal('gatuadress_longitude', 11, 8)->nullable();
            $table->decimal('gatuadress_latitude', 10, 8)->nullable();
            $table->decimal('postnummer_longitude', 11, 8)->nullable();
            $table->decimal('postnummer_latitude', 10, 8)->nullable();
            $table->decimal('postort_longitude', 11, 8)->nullable();
            $table->decimal('postort_latitude', 10, 8)->nullable();
            $table->decimal('kommun_longitude', 11, 8)->nullable();
            $table->decimal('kommun_latitude', 10, 8)->nullable();
            $table->integer('gatuadress_personer_count')->default(0);
            $table->integer('postnummer_personer_count')->default(0);
            $table->integer('postort_personer_count')->default(0);
            $table->integer('kommun_personer_count')->default(0);
            $table->integer('gatuadress_total')->default(0);
            $table->integer('postnummer_total')->default(0);
            $table->integer('postort_total')->default(0);
            $table->integer('forsamling_total')->default(0);
            $table->integer('kommun_total')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sweden');
    }
};
