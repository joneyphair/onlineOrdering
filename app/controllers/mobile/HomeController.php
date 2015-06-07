<?php
namespace App\Controllers\Mobile;

class HomeController extends \BaseController
{
	public function index()
	{
		return \View::make('mobile.index');
	}
	
}



?>