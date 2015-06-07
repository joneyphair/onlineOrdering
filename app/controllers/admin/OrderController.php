<?php
namespace App\Controllers\Admin;

class OrderController extends \BaseController
{
	public function __construct()
	{

	}
	public function index()
	{
		return \View::make('admin.order.index');
	}
	public function manage()
	{
		return \View::make('admin.order.manage');
	}
	public function detail()
	{
		return \View::make('admin.order.detail');
	}
	public function setting()
	{
		return \View::make('admin.order.setting');
	}
	public function add()
	{
		return \View::make('admin.order.add');
	}
	public function del()
	{
		return \View::make('admin.order.del');
	}
	public function modify()
	{
		return \View::make('admin.order.modify');
	}




















}



?>