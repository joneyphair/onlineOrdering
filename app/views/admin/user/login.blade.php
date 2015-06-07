<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
  
     <link type="text/css" rel="stylesheet" href="/lib/bootstrap/dist/css/bootstrap.min.css" />
     <script type="text/javascript" src="/lib/jquery/dist/jquery.js"></script>
     <script type="text/javascript" src="/lib/bootstrap/dist/js/bootstrap.min.js"></script>
     <style type="text/css">
     body{
     	background-color:#eaeaea;
     }
      .m-login{
      	 width:350px;
      	 height:350px;
      	 position: absolute;
      	 top:50%;
      	 left:50%;
      	 margin-left:-175px;
      	 margin-top:-175px;


	  }
	  .m-login .panel-body{
	  	padding-bottom:40px;
	  }
      .m-login .input-group{
      	 margin-top:50px;
      	 padding:0px 15px;
      }
      .m-login .input-group input{
      	height:45px;
      }
      .m-login .input-group button{
      	 height:45px;
      	 width:290px;
      	 line-height: 45px;
      	 padding:0px;
      	 font-size:18px;
      	 letter-spacing:10px;
      	 text-align: center;
      }
      .m-footer{
      	border-top:1px solid #ddd;
      	margin-top:30px;
      	padding:10px;
      	text-align: center;
      }
      .m-footer p{
      	 text-align: center;
      	 padding:8px 0;
      }
     </style>
</head>
<body>
<div class="m-login">
	<form action="">
	<div class="panel panel-default">
		<div class="panel-heading text-center"><h4>登入后台</h5></div>
		<div class="panel-body">	
				<div class="input-group">
				  <span class="input-group-addon" id="basic-addon1">邮箱</span>
				  <input type="text" class="form-control" placeholder="邮箱/账号/手机号" >
				</div>
				<div class="input-group">
				  <span class="input-group-addon">密码</span>
				  <input type="password" class="form-control" placeholder="密码">
				</div>
				<div class="input-group">
					<button type="submit" class="btn btn-primary ">确定</button>
				</div>
		</div>

	</div>
	</form>
	<div class="m-footer">
		<a href="/">首页</a> |
		<a href="/register">注册</a> |
		<a href="/hot">热门</a>|
		<a href="/contact">联系我们</a> |
		<a href="/about">关于我们</a> |
		<a href="/">技术支持</a>
		<br>
		<p>
			Copyright © 2015 joneyphair 
		</p>
	</div>
</div>





</body>
</html>