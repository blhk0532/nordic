<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('swedish_kommuner', function (Blueprint $table) {
            $table->id();
            $table->string('kommun');
            $table->string('lan');
            $table->decimal('lat', 10, 7)->nullable();
            $table->decimal('lng', 10, 7)->nullable();
            $table->timestamps();

            $table->unique('kommun');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('swedish_kommuner');
    }
};
