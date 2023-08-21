<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\VerificationController;
use Illuminate\Auth\Middleware\EnsureEmailIsVerified;

Auth::routes(['verify'=> true]);



Route::view('/{path?}', 'reactapp')
    ->where('path', '.*');

