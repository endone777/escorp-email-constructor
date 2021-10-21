<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\API\RegisterRequest;
use App\Models\User;
use App\Mail\MJMLEmail;
use Asahasrabuddhe\LaravelMJML\Mail\Mailable;

class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
        if($request->validated()){
            $user = User::create($request->validated());
            return $user->createToken('auth_token')->plainTextToken;
        }
    }

    public function mjml(Request $request)
    {
        if($request->mjml){
            $mjml = (new MJMLEmail($request->mjml))->render();
            return response()->json([ 'status' => 200 ,  'message' => $mjml ] , 200 );
        }

        return response()->json(['status' => 204 ] , 204);

    }

}
