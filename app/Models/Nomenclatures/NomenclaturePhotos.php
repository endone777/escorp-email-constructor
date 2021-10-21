<?php

namespace App\Models\Nomenclatures;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NomenclaturePhotos extends Model
{
    use HasFactory;

    protected $fillable = ['composite' , 'file_name'];
}
