<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use ReCaptcha\ReCaptcha;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //
    private $status_code= 200;

    public function userSignUp(Request $request) {
      
        $userDataArray  =  array(
            "fullname"           =>          $request->name,
            "email"              =>          $request->email,
            "password"           =>          md5($request->password),
            "condition"          =>          $request->condition
        );

        $user_status = User::where("email", $request->email)->first();

        if(!is_null($user_status)) {
           return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! email already registered"]);
        }

        $user  =  User::create($userDataArray);
        
        if(!is_null($user)) {
         

            $user->generateVerificationToken();
            $user->sendEmailVerificationNotification();
            $user = Auth::user();

            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Registration completed successfully", "data" => $user]);

          
           
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "failed to register"]);
        }
    }






// -------------------- first Business Infomation Update ---------------------------------//

    public function firstInfo(Request $request) {

        $userDataArray  =  array(
            "firstname"             =>   $request->firstname,
            "lastname"              =>   $request->lastname,
            "phonenumber"           =>   $request->phonenumber,
            "companyname"           =>   $request->companyname,
            "companywebsite"        =>   $request->companywebsite,
            "companylocation"       =>   $request->companylocation,
            
        );
        $user_status = User::where("email", $request->email)->first();
     
        
        if(!is_null($user_status)) {
           
            // $user = $user_status->update( $request->all());
            $user_status->firstname     =                       $request->firstname ;
            $user_status->lastname     =                        $request->lastname;
            $user_status->phonenumber     =                     $request->phonenumber;
            $user_status->companyname     =                     $request->companyname;
            $user_status->companywebsite     =                  $request->companywebsite;
            $user_status->companylocation     =                 $request->companylocation;
            $user = $user_status->save();

            if(!is_null($user)) {
                return response()->json(["status" => $this->status_code, "success" => true, "message" => "Update completed successfully", "data" => $user]);
            }

            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "failed to update"]);
            }    
        
       }
       else{
             return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! there is no such email"]);

       }

        // $user  =  User::create($userDataArray);

       
    }

    // -------------------- second Business Infomation Update ---------------------------------//

    public function secondInfo(Request $request) {
     
        // $name                   =       $request->name;
        // $name                   =       explode(" ", $name);
        // $first_name             =       $name[0];
        // $last_name              =       "";

        // if(isset($name[1])) {
        //     $last_name   =    $name[1];
        // }

        $userDataArray  =  array(
            "nicCategory"              =>   $request->nicCategory,
            "budget"                   =>   $request->budget,
            "companysize"              =>   $request->companysize,
            "companyfounded"           =>   $request->companyfounded,
            "aboutbusiness"            =>   $request->aboutbusiness,
        );
        
        $user_status = User::where("email", $request->email)->first();

        if(!is_null($user_status)) {
           
            // $user=$user_status->update( $request->all());
            $user_status->nicCategory     =                            $request->nicCategory ;
            $user_status->budget             =                         $request->budget;
            $user_status->companysize     =                            $request->companysize;
            $user_status->companyfounded     =                         $request->companyfounded;
            $user_status->aboutbusiness     =                          $request->aboutbusiness;
           
            $user = $user_status->save();

            if(!is_null($user)) {
                return response()->json(["status" => $this->status_code, "success" => true, "message" => "Update completed successfully", "data" => $user]);
            }

            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "failed to update"]);
            }    
        
       }
       else{
             return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! there is no such email"]);

       }

        // $user  =  User::create($userDataArray);

       
    }
// -------------------- social Infomation Update ---------------------------------//

public function socialInfo(Request $request) {

    $userDataArray  =  array(
        "istogram"            =>    $request->istogram ,   
        "tiktok"              =>    $request->tiktok,
        "youtube"             =>    $request->youtube,
        "facebook"            =>    $request->facebook,
        "twiter"              =>    $request->twitter,
        "pinterest"           =>    $request->pinterest,
        "linkedin"            =>    $request->linkedin,
        "blogurl"             =>    $request->blogurl,
    );
    $user_status = User::where("email", $request->email)->first();

    if(!is_null($user_status)) {
       
      //  $company = User::find($request->email);
      $user_status->istogram     =                            $request->istogram ;
      $user_status->tiktok             =                         $request->tiktok;
      $user_status->youtube     =                            $request->youtube;
      $user_status->facebook     =                         $request->facebook;
      $user_status->twitter     =                          $request->twitter;
      $user_status->pinterest     =                          $request->pinterest;
      $user_status->linkedin     =                          $request->linkedin;
      $user_status->blogurl     =                          $request->blogurl;

     
      $user = $user_status->save();


        if(!is_null($user)) {
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Update completed successfully", "data" => $user]);
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "failed to update"]);
        }    
    
   }
   else{
         return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! there is no such email"]);

   }

    // $user  =  User::create($userDataArray);

   
}
    // ------------ [ User Login ] -------------------
    public function userLogin(Request $request) {

        // $validator          =       Validator::make($request->all(),
        //     [
        //         "email"             =>          "required|email",
        //         "password"          =>          "required"
        //     ]
        // );

        // if($validator->fails()) {
        //     return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        // }


        // check if entered email exists in db
        $email_status       =       User::where("email", $request->email)->first();


        // if email exists then we will check password for the same email

        if(!is_null($email_status)) {
            $password_status    =   User::where("email", $request->email)->where("password", md5($request->password))->first();

            // if password is correct
            if(!is_null($password_status)) {
                $user           =       $this->userDetail($request->email);

                return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $user]);
            }

            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
            }
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
        }
    }

    // ------------------ [ User Detail ] ---------------------
    public function userDetail($email) {
        $user =  array();
        if($email != "") {
            $user = User::where("email", $email)->first();
            return $user;
        }
    }

    // -------------------- trial Infomation Update ---------------------------------//

    public function Usertrial(Request $request) {

        $userDataArray  =  array(
            "trial"             =>   $request,
            
        );
        $user_status = User::where("email", $request->email)->first();
     
        
        if(!is_null($user_status)) {
           
            // $user = $user_status->update( $request->all());
            $user_status->trial     =                       $request ;
            $user = $user_status->save();

            if(!is_null($user)) {
                return response()->json(["status" => $this->status_code, "success" => true, "message" => "Update completed successfully", "data" => $user]);
            }

            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "failed to update"]);
            }    
        
       }
       else{
             return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! there is no such email"]);

       }

        // $user  =  User::create($userDataArray);

       
    }

    public function verifytoken(Request  $request){
        // // $recaptcha = new ReCaptcha(config('services.recaptcha.secret'));
        // // $response = $recaptcha->verify($request->input('recaptcha_token'), $request->ip());
       
        // if ($response->isSuccess()) {
        //     // Recaptcha verification successful
        //     return response()->json(['success' => true]);
        // } else {
        //     // Recaptcha verification failed
        //     return response()->json(['success' => false, 'error' => 'Recaptcha verification failed']);
        // }


          $reCAPTCHA_TOKEN = $request ->token;
          $Secret_Key = $request ->secret;
          $response = axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${Secret_Key}&response=${reCAPTCHA_TOKEN}`);
          return response()->json(['success' => $Secret_Key,'token' => $reCAPTCHA_TOKEN]);

    }
}
