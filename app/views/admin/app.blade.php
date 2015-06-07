<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
     <link type="text/css" rel="stylesheet" href="/lib/bootstrap/dist/css/bootstrap.min.css" />
     <link rel="stylesheet" href="/css/reset.css"/>
     <link rel="stylesheet" href="/css/admin/common.css"/>
     <link rel="stylesheet" href="/css/admin/index.css"/>
 </head>
<body>
<div class="g-header" id="header">
	@section('header-nav')
		<nav class="m-nav navbar navbar-default">
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
		      	<li><a href="javascript:void(0);" id="lsideBtn"><i class="glyphicon glyphicon-th-large"></i></a></li>
		        <li class="active"><a href="/admin"><i class=" glyphicon glyphicon-home"></i><span class="sr-only">(current)</span></a></li>
		        <li><a href="#">商家</a></li>

		        <li class="dropdown">
		          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">商家管理<span class="caret"></span></a>
		          <ul class="dropdown-menu" role="menu">
		            <li><a href="/admin/shop/add">新增商家</a></li>
		            <li class="divider"></li>
		            <li><a href="/admin/shop">商家列表</a></li>
		            <li class="divider"></li>
		            <li><a href="/admin/shop/category">商家分类</a></li>
		          </ul>
		        </li>
		        <li class="dropdown">
		          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">订单管理<span class="caret"></span></a>
		          <ul class="dropdown-menu" role="menu">
		            <li><a href="#">最新订单</a></li>
		            <li class="divider"></li>
		            <li><a href="#">待发货订单</a></li>
		            <li class="divider"></li>
		            <li><a href="#">已发货订单</a></li>
		          </ul>
		        </li>
		      </ul>
		     <form class="navbar-form navbar-left" role="search">
		       <div class="form-group">
		         <input type="text" class="form-control" placeholder="关键字">
		       </div>
		       <button type="submit" class="btn btn-default"><i class="glyphicon glyphicon-search"></i></button>
		     </form>

		      <ul class="nav navbar-nav navbar-right">
		        <li><a href="#">Link</a></li>
		        <li><a href="">消息 <span class="label label-default"> 232</span></a></li>
		        <li><a href="javascript:void(0);" id="lsideBtn"><i class="glyphicon glyphicon-th-large"></i></a></li>
		      </ul>
		    </div><!-- /.navbar-collapse -->
		  </div><!-- /.container-fluid -->
		</nav>
	@show
</div>
<div class="g-main" id="main">
     @yield('content')
</div>
<div class="g-lside" id="lside">
	<ul class="m-nav">
		<li><a href=""><i class="glyphicon glyphicon-bullhorn"></i></a></li>
		<li><a href=""><i class=" glyphicon glyphicon-comment"></i></a></li>
		<li><a href=""><i class="glyphicon glyphicon-wrench"></i></a></li>
		
		<li><a href=""><i class="glyphicon glyphicon-lock"></i></a></li>
		
		<li><a href=""><i class="glyphicon glyphicon-flag"></i></a></li>
		<li><a href=""><i class=" glyphicon glyphicon-comment"></i></a></li>

		
	</ul>
	<div class="m-content">
		<div class="tab">
			<!-- 菜单栏 -->
			<ul class="list-group">
				<li class="list-group-item">
					<a href="/admin/shop" class="list-group-item-heading">商家管理</a>
					<p class="list-group-item-text">
						
					</p>	
				</li>
				<li class="list-group-item">
					<a class="list-group-item-heading" href="/admin/order/">订单管理</a>
					<p class="list-group-item-text">
						
					</p>
				</li>
				<li class="list-group-item">
					<a class="list-group-item-heading" href="">用户管理</a>
					<p class="list-group-item-text">
						
					</p>
				</li>
				<li class="list-group-item">
					<a class="list-group-item-heading" href="/admin/setting">系统设置</a>
					<p class="list-group-item-text">
						
					</p>
				</li>
			</ul>
			<!-- /菜单栏 -->
		</div>
		<div class="tab">
			<!-- 菜单栏 -->
			<ul class="list-group">
				<li class="list-group-item">
					<a href="/admin/shop" class="list-group-item-heading">商家管理</a>
					<p class="list-group-item-text">
						
					</p>	
				</li>
				<li class="list-group-item">
					<a class="list-group-item-heading" href="/admin/order/">订单管理</a>
					<p class="list-group-item-text">
						
					</p>
				</li>
				<li class="list-group-item">
					<a class="list-group-item-heading" href="">用户管理</a>
					<p class="list-group-item-text">
						
					</p>
				</li>
				<li class="list-group-item">
					<a class="list-group-item-heading" href="/admin/setting">系统设置</a>
					<p class="list-group-item-text">
						
					</p>
				</li>
			</ul>
			<!-- /菜单栏 -->
		</div>
		<div class="tab">
			<!-- 菜单栏 -->
			<ul class="list-group">
				<li class="list-group-item">
					<a href="/admin/shop" class="list-group-item-heading">商家管理</a>
					<p class="list-group-item-text">
						
					</p>	
				</li>
				<li class="list-group-item">
					<a class="list-group-item-heading" href="/admin/order/">订单管理</a>
					<p class="list-group-item-text">
						
					</p>
				</li>
				<li class="list-group-item">
					<a class="list-group-item-heading" href="">用户管理</a>
					<p class="list-group-item-text">
						
					</p>
				</li>
				<li class="list-group-item">
					<a class="list-group-item-heading" href="/admin/setting">系统设置</a>
					<p class="list-group-item-text">
						
					</p>
				</li>
			</ul>
			<!-- /菜单栏 -->
		</div>
		<div class="tab">
			<!-- 菜单栏 -->
			<ul class="list-group">
				<li class="list-group-item">
					<a href="/admin/shop" class="list-group-item-heading">商家管理</a>
					<p class="list-group-item-text">
						
					</p>	
				</li>
				<li class="list-group-item">
					<a class="list-group-item-heading" href="/admin/order/">订单管理</a>
					<p class="list-group-item-text">
						
					</p>
				</li>
				<li class="list-group-item">
					<a class="list-group-item-heading" href="">用户管理</a>
					<p class="list-group-item-text">
						
					</p>
				</li>
				<li class="list-group-item">
					<a class="list-group-item-heading" href="/admin/setting">系统设置</a>
					<p class="list-group-item-text">
						
					</p>
				</li>
			</ul>
			<!-- /菜单栏 -->
		</div>
	</div>
   
	
</div>
<div class="g-rside" id="lside">







</div>

<div class="g-footer">
	
</div>


<script type="text/javascript" src="/lib/jquery/dist/jquery.js"></script>
<script type="text/javascript" src="/lib/bootstrap/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/script/admin/common.js"></script>
</body>
</html>