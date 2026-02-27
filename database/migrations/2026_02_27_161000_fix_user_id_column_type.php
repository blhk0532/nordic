<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Step 1: Change user_id to TEXT so we can update values
        Schema::table('ringa_data', function (Blueprint $table) {
            $table->text('user_id')->nullable()->change();
        });

        // Step 2: Convert all user_id values to the first value or null
        $rows = DB::table('ringa_data')->select('id', 'user_id')->get();
        foreach ($rows as $row) {
            $val = $row->user_id;
            if (is_null($val) || $val === '') {
                $single = null;
            } else {
                $decoded = json_decode($val, true);
                if (is_array($decoded)) {
                    $single = $decoded[0] ?? null;
                } else {
                    $single = $val;
                }
            }
            DB::table('ringa_data')->where('id', $row->id)->update(['user_id' => $single]);
        }

        // Step 3: Change column type to unsignedBigInteger
        Schema::table('ringa_data', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable()->change();
        });
    }

    public function down(): void
    {
        // Revert to JSON (if needed)
        Schema::table('ringa_data', function (Blueprint $table) {
            $table->json('user_id')->nullable()->change();
        });
    }
};
