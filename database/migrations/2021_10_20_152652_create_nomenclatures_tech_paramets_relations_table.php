<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNomenclaturesTechParametsRelationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nomenclatures_tech_paramets_relations', function (Blueprint $table) {
            $table->id();
            $table->char('nomenclature_composite' , 20)->key();
            $table->char('tech_parameter_code',11)->key();
            $table->char('value')->key();
            $table->char('value_manufacturer');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nomenclatures_tech_paramets_relations');
    }
}
