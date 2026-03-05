<?php

namespace Database\Factories;

use App\Models\SwedenPostorter;
use Illuminate\Database\Eloquent\Factories\Factory;

class SwedenPostorterFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<SwedenPostorter>
     */
    protected $model = SwedenPostorter::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'post_ort' => $this->faker->word(),
            'kommun' => $this->faker->word(),
            'lan' => $this->faker->word(),
            'latitude' => $this->faker->word(),
            'longitude' => $this->faker->word(),
            'personer' => $this->faker->randomNumber(),
            'foretag' => $this->faker->randomNumber(),
        ];
    }
}
