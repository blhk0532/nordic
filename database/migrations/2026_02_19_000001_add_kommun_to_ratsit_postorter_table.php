<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('ratsit_postorter', function (Blueprint $table) {
            if (! Schema::hasColumn('ratsit_postorter', 'kommun')) {
                $table->string('kommun')->nullable()->after('post_ort');
                $table->index(['kommun']);
            }
        });
    }

    public function down(): void
    {
        Schema::table('ratsit_postorter', function (Blueprint $table) {
            if (Schema::hasColumn('ratsit_postorter', 'kommun')) {
                $table->dropIndex(['kommun']);
                $table->dropColumn('kommun');
            }
        });
    }
};
