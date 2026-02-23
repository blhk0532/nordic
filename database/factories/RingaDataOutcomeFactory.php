<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\RingaData;
use App\Models\RingaDataOutcome;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class RingaDataOutcomeFactory extends Factory
{
    protected $model = RingaDataOutcome::class;

    public function definition(): array
    {
        return [
            'ringa_data_id' => RingaData::factory(),
            'user_id' => User::factory(),
            'coutcome' => fake()->randomElement(['Bokad', 'Inget Svar', 'Ej Framkopplad', 'Upptagen', 'Telefonsvar']),
        ];
    }
}
