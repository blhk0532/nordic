<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Step 1: (Skip dropping foreign keys and indexes, already handled)

        // Step 2: Change team_id and user_id to TEXT so we can update values
        Schema::table('ringa_data', function (Blueprint $table) {
            $table->text('user_id')->nullable()->change();
            $table->text('team_id')->nullable()->change();
        });

        // Step 3: Convert all user_id and team_id values to the first value or null
        $rows = DB::table('ringa_data')->select('id', 'user_id', 'team_id')->get();
        foreach ($rows as $row) {
            // user_id
            $val = $row->user_id;
            if (is_null($val) || $val === '') {
                $singleUser = null;
            } else {
                $decoded = json_decode($val, true);
                if (is_array($decoded)) {
                    $singleUser = $decoded[0] ?? null;
                } else {
                    $singleUser = $val;
                }
            }
            // team_id
            $valT = $row->team_id;
            if (is_null($valT) || $valT === '') {
                $singleTeam = null;
            } else {
                $decodedT = json_decode($valT, true);
                if (is_array($decodedT)) {
                    $singleTeam = $decodedT[0] ?? null;
                } else {
                    $singleTeam = $valT;
                }
            }
            DB::table('ringa_data')->where('id', $row->id)->update([
                'user_id' => $singleUser,
                'team_id' => $singleTeam,
            ]);
        }

        // Step 4: Change columns to unsignedBigInteger
        Schema::table('ringa_data', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable()->change();
            $table->unsignedBigInteger('team_id')->nullable()->change();
        });

        // Step 5: Optionally, re-add foreign key (uncomment if needed)
        // Schema::table('ringa_data', function (Blueprint $table) {
        //     $table->foreign('team_id')->references('id')->on('teams')->nullOnDelete();
        // });
    }

    public function down(): void
    {
        // Revert to JSON (if needed)
        Schema::table('ringa_data', function (Blueprint $table) {
            $table->json('user_id')->nullable()->change();
            $table->json('team_id')->nullable()->change();
        });
    }
};
