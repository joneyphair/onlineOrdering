<?php
namespace App\Controllers\Admin;


class HomeController extends \BaseController{

   public function index(){
   	   return \View::make('admin.index');
   }

}






