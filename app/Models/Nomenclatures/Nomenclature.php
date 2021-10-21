<?php

namespace App\Models\Nomenclatures;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nomenclature extends Model
{
    use HasFactory;

    protected $fillable = ['name' , 'composite' , 'article' , 'estimated_date'];


}
