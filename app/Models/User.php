<?php

namespace App\Models;
// use Illuminate\Foundation\Auth\EmailVerificationRequest;
// use Illuminate\Contracts\Auth\MustVerifyEmail;  
use Illuminate\Auth\MustVerifyEmail; 
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;
use App\Notifications\VerifyEmail;
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, MustVerifyEmail;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstname', 'lastname', 'fullname', 'email', 'password', 'phonenumber','condition','companyname',
        'companyfounded','companywebsite','companylocation','nicCategory','budget','companysize','aboutbusiness',
        'istogram','tiktok','youtube','facebook','twitter','pinterest','linkedin','blogurl','trial','emailverified'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function generateVerificationToken()
    {
        $this->verification_token = Str::random(40);
        $this->save();
    }

    public function sendEmailVerificationNotification()
    {
        $this->notify(new  \App\Notifications\VerifyEmail);
    }

}

