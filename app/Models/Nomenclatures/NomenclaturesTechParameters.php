<?php

namespace App\Models\Nomenclatures;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NomenclaturesTechParameters extends Model
{
    use HasFactory;

    protected $fillable = ['code' , 'name' , 'unit'];
}
