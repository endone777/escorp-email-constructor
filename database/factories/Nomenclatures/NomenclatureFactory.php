<?php

namespace Database\Factories\Nomenclatures;

use App\Models\Nomenclatures\Nomenclature;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class NomenclatureFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Nomenclature::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'composite' => mt_rand(1100000,1200000),
            'article' => $this->faker->sentence(6 , true),
            'estimated_date' => $this->faker->date(),
        ];
    }
}
