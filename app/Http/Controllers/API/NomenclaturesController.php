<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Nomenclatures\Nomenclature;
use App\Classes\Nomenclatures\Products;

class NomenclaturesController extends Controller
{

    public function index(Request $request)
    {
        if($request->has('composites')){
            $query = Nomenclature::query();
            $query->whereIn('composite' , explode( ',' ,$request->composites) );

            $out = $query->get();
            $outProducts = collect([]);
                foreach ($out as $item){
                    $products = new Products();
                    $products->setComposite($item->composite);
                    $images = collect([]);
                    for($i=0; $i<5; $i++){
                        $images->push("https://dummyimage.com/150x150/".$this->random_color()."/".$this->random_color()."&text=$item->name" . $i);
                    }
                    $products->setImages($images);
                    $outProducts->push($products);
                }



            return response()->json([
                'count' => $outProducts->count(),
                'data' => $outProducts,
            ] , 200);
        }
        
    }

    public function random_color_part()
    {
        return str_pad( dechex( mt_rand( 0, 255 ) ), 2, '0', STR_PAD_LEFT);
    }

    public function random_color(): string
    {
        return $this->random_color_part() . $this->random_color_part() . $this->random_color_part();
    }


}