<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('user-signup', [App\Http\Controllers\UserController::class , 'userSignUp']);
Route::post('first-Info', [App\Http\Controllers\UserController::class , 'firstInfo']);
Route::post('social-Info', [App\Http\Controllers\UserController::class , 'socialInfo']);
Route::post('second-Info', [App\Http\Controllers\UserController::class , 'secondInfo']);
Route::post("user-signin", [App\Http\Controllers\UserController::class , 'userLogin']);
Route::post("user-trial", [App\Http\Controllers\UserController::class , 'usertrial']);
Route::get("user/{email}",[App\Http\Controllers\UserController::class , 'userDetail']);
Route::post("verify-token", [App\Http\Controllers\UserController::class , 'verifytoken']);
Route::post('verify-email', [App\Http\Controllers\Auth\VerificationController::class , 'verifyEmail']);
// Route::post("recend-email", [App\Http\Controllers\UserController::class , 'sendEmailVerificationNotification']);