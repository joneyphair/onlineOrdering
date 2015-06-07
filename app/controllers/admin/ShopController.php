<?php
namespace App\Controllers\Admin;


class ShopController extends \BaseController{

	public function __construct(){

	}
	public function index()
	{
		return \View::make('admin.shop.index');
	}
	public function add()
	{
		return \View::make('admin.shop.add');
	}
	public function modify()
	{
		 return \View::make('admin.shop.modify');
	}
	public function manage()
	{
		return \View::make('admin.shop.manage');
	}
	public function category()
	{
		return \View::make('admin.shop.category');
	}
	public function detail()
	{
		return \View::make('admin.shop.detail');
	}








}


?>