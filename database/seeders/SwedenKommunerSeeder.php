<?php

namespace Database\Seeders;

use App\Models\SwedenKommuner;
use Illuminate\Database\Seeder;

class SwedenKommunerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SwedenKommuner::factory()->count(10)->create();
    }
}
