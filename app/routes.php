<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
/*前端*/
Route::group(array('prefix'=>''),function(){
	Route::get('/','HomeController@index');
	//火爆
	Route::get('/hot','ShopController@hot');
	//推荐
	Route::get('/recommend','ShopController@recommend');
	//店铺搜索
	Route::get('/search','ShopController@search');
	//我的订单
	Route::get('/order','OrderController@index');
	Route::get('/order/manage','OrderController@manage');
	//用户注册
	Route::get('/register','UserController@register');
	//个人中心
	Route::get('/user','UserController@index');

});

/*后台管理*/
Route::group(array('prefix' => 'admin','namespace'=>'App\Controllers\Admin'), function(){
	Route::get('/','HomeController@index');
	Route::get('login','UserController@login');
	Route::get('register','UserController@register');
	
	//店铺管理
	Route::get('shop','ShopController@index');
	Route::get('shop/add','ShopController@add');
	Route::get('shop/modify','ShopController@modify');
	Route::get('shop/manage','ShopController@manage');
	Route::get('shop/category','ShopController@category');
	Route::get('shop/detail','ShopController@detail');

	/*order*/
	Route::get('order','OrderController@index');
	Route::get('order/manage','OrderController@manage');
	Route::get('order/detail','OrderController@detail');
	Route::get('order/setting','OrderController@setting');

	/*系统设置*/
	Route::get('setting','SettingController@index');
	Route::get('setting/del','SettingController@del');

});


/*移动端*/
Route::group(array('prefix'=>'m','namespace'=>'App\Controllers\Mobile'),function(){
	Route::get('/','HomeController@index');

});













