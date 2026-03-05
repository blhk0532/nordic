<?php

namespace Database\Seeders;

use App\Models\SwedenGator;
use Illuminate\Database\Seeder;

class SwedenGatorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SwedenGator::factory()->count(10)->create();
    }
}
