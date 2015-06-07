<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>饿了就点餐</title>
	<meta name="viewport" content="width=divice-width;height=divice-height">
	<link type="text/css" rel="stylesheet" href="/lib/bootstrap/dist/css/bootstrap.min.css" />
	<link rel="stylesheet" href="/css/reset.css"/>
	<style>
	.g-header{
		background-color:red;
	}
	.g-footer{
		height:50px;
		background-color:#000;
	}
	</style>
	
</head>
<body>
	<div class="g-header">
		<div class="m-nav">
			@section('nav')
			  <nav class="navbar navbar-default" role="navigation">
			    <div class="container-fluid">
			      <!-- Brand and toggle get grouped for better mobile display -->
			      <div class="navbar-header">
			        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			          <span class="sr-only">Toggle navigation</span>
			          <span class="icon-bar"></span>
			          <span class="icon-bar"></span>
			          <span class="icon-bar"></span>
			        </button>
			        <a class="navbar-brand" href="#">饿了就点餐</a>
			      </div>
			      <!-- Collect the nav links, forms, and other content for toggling -->
			      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			        <ul class="nav navbar-nav">
			            <li class="active"><a href="/">首页</a></li>
			            <li><a href="/hot">热门</a></li>
			            <li><a href="/recommend">推荐</a></li>
			        </ul>
			        <ul class="nav navbar-nav navbar-right">
			
			          <li class="dropdown">
			            <a href="#" class="dropdown-toggle" data-toggle="dropdown">我的订单<span class="caret"></span></a>
			            <ul class="dropdown-menu" role="menu">
			              <li><a href="#" class="text-center">已买到的商品</a></li>
			              <li class="divider"></li>
			               <li><a href="#" class="text-center">暂未支付的商品</a></li>
			            </ul>
			          </li>
			          <li class="dropdown">
			            <a href="#" class="dropdown-toggle" data-toggle="dropdown">购物车<span class="caret"></span></a>
			            <ul class="dropdown-menu" role="menu">
			              <li><a href="#">还没有添加商品  <span class="btn btn-primary"> 马上选购</span></a></li>  
			            </ul>
			          </li>
			          <li><a href="#">联系客服</a></li>
			          <li class="dropdown">
			            <a href="#" class="dropdown-toggle" data-toggle="dropdown">joneyphair<span class="caret"></span></a>
			            <ul class="dropdown-menu " role="menu">
			               <li><a href="#" class="text-center">个人中心</a></li>
			               <li class="divider"></li>
			              <li><a href="#" class="text-center">我的收藏</a></li>
			              <li class="divider"></li>
			              <li><a href="#" class="text-center">我的地址</a></li>
			              <li class="divider"></li>
			              <li><a href="#" class="text-center">安全中心</a></li>
			              <li class="divider"></li>
			              <li><a href="#" class="text-center">注销</a></li>
			            </ul>
			          </li>
			        </ul>
			      </div><!-- /.navbar-collapse -->
			    </div><!-- /.container-fluid -->
			  </nav>
			@show
		</div>
	</div>
	<div class="g-main">
		 @yield('content')
	</div>
	<div class="g-footer">
		
	</div>
</body>
</html>