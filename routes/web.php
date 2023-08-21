<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\VerificationController;
use Illuminate\Auth\Middleware\EnsureEmailIsVerified;

Auth::routes(['verify'=> true]);



Route::view('/{path?}', 'reactapp')
    ->where('path', '.*');

// Route::get('/email/verify', function () {
//         return view('auth.verify');
//     })->middleware('auth')->name('verification.notice');

// Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
//         $request->fulfill();
     
//         return redirect('auth.register');
//     })->middleware(['auth', 'signed'])->name('verification.verify');
// Route::get('/', function () {
//     return view('welcome');
// });

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

