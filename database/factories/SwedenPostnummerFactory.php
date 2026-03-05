<?php

namespace Database\Factories;

use App\Models\SwedenPostnummer;
use Illuminate\Database\Eloquent\Factories\Factory;

class SwedenPostnummerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<SwedenPostnummer>
     */
    protected $model = SwedenPostnummer::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'post_nummer' => $this->faker->postcode(),
            'post_ort' => $this->faker->word(),
            'kommun' => $this->faker->word(),
            'lan' => $this->faker->word(),
            'latitude' => $this->faker->latitude(),
            'longitude' => $this->faker->longitude(),
            'personer' => $this->faker->randomNumber(),
            'foretag' => $this->faker->randomNumber(),
        ];
    }
}
