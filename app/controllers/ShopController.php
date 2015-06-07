<?php

class ShopController extends BaseController {

	public function __construct()
	{

	}
	public function hot()
	{
		return View::make('shop.hot');
	}
	public function recommend()
	{
		return View::make('shop.recommend');
	}
	

	
}