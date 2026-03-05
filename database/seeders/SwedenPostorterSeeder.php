<?php

namespace Database\Seeders;

use App\Models\SwedenPostorter;
use Illuminate\Database\Seeder;

class SwedenPostorterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SwedenPostorter::factory()->count(10)->create();
    }
}
