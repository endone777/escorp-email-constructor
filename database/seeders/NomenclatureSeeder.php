<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class NomenclatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Models\Nomenclatures\Nomenclature::factory(1000)->create();
//        \App\Models\User::factory(10)->create();
    }
}
