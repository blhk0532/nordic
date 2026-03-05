<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('ratsit_postorter')) {
            return;
        }

        Schema::table('ratsit_postorter', function (Blueprint $table) {
            if (! Schema::hasColumn('ratsit_postorter', 'lat')) {
                $table->decimal('lat', 10, 8)->nullable()->after('kommun');
            }

            if (! Schema::hasColumn('ratsit_postorter', 'lng')) {
                $table->decimal('lng', 11, 8)->nullable()->after('lat');
            }
        });
    }

    public function down(): void
    {
        if (! Schema::hasTable('ratsit_postorter')) {
            return;
        }

        Schema::table('ratsit_postorter', function (Blueprint $table) {
            $dropColumns = [];

            if (Schema::hasColumn('ratsit_postorter', 'lat')) {
                $dropColumns[] = 'lat';
            }

            if (Schema::hasColumn('ratsit_postorter', 'lng')) {
                $dropColumns[] = 'lng';
            }

            if ($dropColumns !== []) {
                $table->dropColumn($dropColumns);
            }
        });
    }
};
