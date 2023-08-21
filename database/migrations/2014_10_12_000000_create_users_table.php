<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string("firstname")->nullable();
            $table->string("lastname")->nullable();
            $table->string("fullname")->nullable();
            $table->string("email")->unique();
            $table->string("password");
            $table->string("condition")->nullable();
            $table->string("phonenumber")->nullable();
            $table->string("companyname")->nullable();
            $table->string("companyfounded")->nullable();
            $table->string("companywebsite")->nullable();
            $table->string("companylocation")->nullable();
            $table->string("nicCategory")->nullable();
            $table->string("budget")->nullable();
            $table->string("companysize")->nullable();
            $table->string("aboutbusiness")->nullable();
            $table->string("istogram")->nullable();
            $table->string("tiktok")->nullable();
            $table->string("youtube")->nullable();
            $table->string("facebook")->nullable();
            $table->string("twitter")->nullable();
            $table->string("pinterest")->nullable();
            $table->string("linkedin")->nullable();
            $table->string("blogurl")->nullable();
            $table->string("trial")->nullable();
            $table->string("emailverified")->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('verification_token')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
