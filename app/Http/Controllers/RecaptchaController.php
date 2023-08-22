<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
class RecaptchaController extends Controller
{
    public function verifyRecaptcha(Request $request)
    {
        $recaptchaResponse = $request->input('recaptcha');
        $recaptchaSecret = config('services.secret_key');
        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify',[
            'secret' => $recaptchaSecret,
            'response' =>$recaptchaResponse
        ]);
        $responseData = $response->json();
        if($responseData['success']){
            return response()->json(['message'=>'Recaptcha verification passed']);
        }
        else
            return response()->json(['message'=>"Recaptcha verification failed"],400);
    }
}
