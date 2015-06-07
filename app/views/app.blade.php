<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
     <link type="text/css" rel="stylesheet" href="/lib/bootstrap/dist/css/bootstrap.min.css" />
     <link rel="stylesheet" href="/css/reset.css"/>
     <link rel="stylesheet" href="/css/index.css"/>
</head>
<body>
   <div class="wraper">
   <!-- 头部 -->
   	   <div class="g-header">
          <!-- header-nav -->
          <div class="m-nav">
            @section('nav')
              <nav class="navbar navbar-default" role="navigation">
                <div class="container">
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
                    <form class="navbar-form navbar-left" role="search">
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="关键字">
                      </div>
                      <button type="submit" class="btn btn-default"><i class="glyphicon glyphicon-search"></i></button>
                    </form>
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
   	   	 <div class="container">
          <!-- content -->
           @yield('content')
        </div>    
       </div>
       <!-- 底部 -->
        <div class="g-footer">
          <!-- footer -->
         @section('footer')
            <div class="m-nav">
              <nav class="navbar navbar-default">
                <div class="container">
                  <!-- Brand and toggle get grouped for better mobile display -->
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"> ©joneyphair</a>
                  </div>

                  <!-- Collect the nav links, forms, and other content for toggling -->
                  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                      <li><a href="/">首页 <span class="sr-only">(current)</span></a></li>
                      <li><a href="/hot">热门</a></li>
                      <li><a href="/recommend">推荐</a></li>
                    
                    </ul>
                    <form class="navbar-form navbar-right" role="search">
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="关键字">
                      </div>
                      <button type="submit" class="btn btn-default"><i class="glyphicon glyphicon-search"></i></button>
                    </form>
                  </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
              </nav>
            </div>
            <div class="m-list">
              <div class="container">
                  <div class="row">
                   <div class="col-md-4">
                      <ul class="list-group">
                         <li class="list-group-item">联系我们</li>
                         <li class="list-group-item">地址：北京市</li>
                         <li class="list-group-item">邮箱：joneyphair@qq.com</li>
                      </ul>
                   </div>
                   <div class="col-md-4">
                     <ul class="list-group">
                       <li class="list-group-item">客服</li>
                       <li class="list-group-item">工作电话:186747611885</li>
                       <li class="list-group-item">qq:954525834</li>
                     </ul>
                   </div>
                   <div class="col-md-4">
                      <ul class="list-group">
                          <li class="list-group-item">关于我们</li>
                          <li class="list-group-item">新手指引</li>
                          <li class="list-group-item">新闻活动</li>
                      </ul>
                   </div>
                </div>
            </div>
              
            </div>
            <div class="m-copyright">
              <div class="container">
                  <a href="">Copyright ©2015 joneyphair, All Rights Reserved.</a>
              </div>
            </div>
         @show
         
        </div>
    </div>
    <div class="g-rside">
      <div class="m-nav">
        <a href=""><i class="glyphicon glyphicon-flag"></i></a>
        <a href=""><i class=" glyphicon glyphicon-home"></i></a>
      </div>
      <div class="m-cart"></div>
    </div>

    <script type="text/javascript" src="/lib/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="/lib/bootstrap/dist/js/bootstrap.min.js"></script>	 
</body>
</html>