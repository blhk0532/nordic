<?php

namespace Database\Factories;

use App\Models\PrivateData;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @template TModel of \App\Models\PrivateData
 *
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<TModel>
 */
class PrivateDataFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<TModel>
     */
    protected $model = PrivateData::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fornamn' => $this->faker->firstName(),
            'efternamn' => $this->faker->lastName(),
            'personnamn' => fn (array $attributes) => $attributes['fornamn'].' '.$attributes['efternamn'],
            'personnummer' => $this->faker->numerify('########-####'),
            'fodelsedag' => $this->faker->date(),
            'alder' => (string) $this->faker->numberBetween(18, 90),
            'kon' => $this->faker->randomElement(['M', 'F']),
            'civilstand' => $this->faker->randomElement(['single', 'married', 'divorced']),
            'stjarntacken' => $this->faker->randomElement(['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo']),
            'gatuadress' => $this->faker->streetAddress(),
            'postnummer' => $this->faker->postcode(),
            'postort' => $this->faker->city(),
            'kommun' => $this->faker->city(),
            'lan' => $this->faker->state(),
            'forsamling' => $this->faker->word(),
            'agandeform' => $this->faker->randomElement(['owned', 'rented']),
            'bostadstyp' => $this->faker->randomElement(['apartment', 'house']),
            'boarea' => (string) $this->faker->numberBetween(30, 200),
            'byggar' => (string) $this->faker->numberBetween(1900, 2024),
            'fastighet' => $this->faker->word(),
            'telfonnummer' => [$this->faker->phoneNumber()],
            'telefon' => [$this->faker->phoneNumber()],
            'epost_adress' => [$this->faker->email()],
            'is_active' => true,
            'is_update' => false,
        ];
    }
}
