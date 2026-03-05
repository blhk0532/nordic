<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // New table
        Schema::create('SwedenGator', function (Blueprint $table) {
            $table->id();
            $table->string('gata')->index();
            $table->string('post_nummer')->index();
            $table->string('post_ort')->index();
            $table->string('lan')->index();
            $table->integer('personer');
            $table->integer('foretag');
            $table->string('latitude');
            $table->string('longitude');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('{{ table }}');
    }
};
