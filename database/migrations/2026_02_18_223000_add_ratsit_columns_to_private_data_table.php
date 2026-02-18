<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('private_data', function (Blueprint $table): void {
            if (! Schema::hasColumn('private_data', 'kommun_ratsit')) {
                $table->text('kommun_ratsit')->nullable()->after('kommun');
            }
            if (! Schema::hasColumn('private_data', 'ratsit_se')) {
                $table->text('ratsit_se')->nullable()->after('ratsit_link');
            }
        });
    }

    public function down(): void
    {
        Schema::table('private_data', function (Blueprint $table): void {
            $table->dropColumnIfExists(['kommun_ratsit', 'ratsit_se']);
        });
    }
};
