<?php

namespace Database\Factories;

use App\Models\SwedenKommuner;
use Illuminate\Database\Eloquent\Factories\Factory;

class SwedenKommunerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<SwedenKommuner>
     */
    protected $model = SwedenKommuner::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'kommun' => $this->faker->word(),
            'lan' => $this->faker->word(),
            'personer' => $this->faker->randomNumber(),
            'foretag' => $this->faker->randomNumber(),
            'latitude' => $this->faker->word(),
            'longitude' => $this->faker->word(),
        ];
    }
}
