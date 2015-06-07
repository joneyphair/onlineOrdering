<?php

namespace App\Controllers\Admin;

class UserController extends \BaseController{

	public function login()
	{
		 return \View::make('admin.user.login');
	}
	public function register()
	{
		return \View::make('admin.user.register');
	}
	public function detail()
	{

	}
	public function del()
	{

	}
	public function modify()
	{
		
	}
}