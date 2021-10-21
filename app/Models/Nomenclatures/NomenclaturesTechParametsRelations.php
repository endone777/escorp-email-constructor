<?php

namespace App\Models\Nomenclatures;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NomenclaturesTechParametsRelations extends Model
{
    use HasFactory;

    protected $fillable = ['nomenclature_composite' , 'tech_parameter_code' , 'value' , 'value_manufacture'];
}
