<?php

namespace Database\Factories;

use App\Models\SwedenGator;
use Illuminate\Database\Eloquent\Factories\Factory;

class SwedenGatorFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<SwedenGator>
     */
    protected $model = SwedenGator::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'gata' => $this->faker->word(),
            'post_nummer' => $this->faker->word(),
            'post_ort' => $this->faker->word(),
            'lan' => $this->faker->word(),
            'personer' => $this->faker->randomNumber(),
            'foretag' => $this->faker->randomNumber(),
            'latitude' => $this->faker->word(),
            'longitude' => $this->faker->word(),
        ];
    }
}
