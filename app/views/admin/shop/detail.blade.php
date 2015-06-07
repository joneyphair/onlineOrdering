@extends('admin.app')
@section('content')
<div class="m-shop">
	<!-- 面包屑 -->
		<ol class="breadcrumb">
			<li><a href="/admin">首页</a></li>
			<li><a href="/admin/shop">商家</a></li>
			<li><a href="/admin/shop/detail">基本信息</a></li>
		</ol>
	<!-- /面包屑 -->
	<!-- 店铺基本信息 -->
		<div class="jumbotron">
			<div class="container">
				
				<div class="row">
					<div class="col-md-2"><img src="http://usr.im/120x120" alt="" class="pull-left img-circle"></div>
					<div class="col-md-10">
					 		公告栏撒旦撒的撒打算打算打收到撒的撒到底撒收到撒的撒  三  是实打实的 收到撒的
					 		公告栏撒旦撒的撒打算打算打收到撒的撒到底撒收到撒的撒  三  是实打实的 收到撒的
					 		公告栏撒旦撒的撒打算打算打收到撒的撒到底撒收到撒的撒  三  是实打实的 收到撒的
					 		公告栏撒旦撒的撒打算打算打收到撒的撒到底撒收到撒的撒  三  是实打实的 收到撒的
					 		公告栏撒旦撒的撒打算打算打收到撒的撒到底撒收到撒的撒  三  是实打实的 收到撒的
					 		公告栏撒旦撒的撒打算打算打收到撒的撒到底撒收到撒的撒  三  是实打实的 收到撒的
					 		公告栏撒旦撒的撒打算打算打收到撒的撒到底撒收到撒的撒  三  是实打实的 收到撒的 
					</div>
				</div>
				
			</div>
		</div>
	<!-- /店铺基本信息 -->

	<!-- 店铺评论 -->

		<div class="m-comment">
			<div class="page-header">
				<h4>店铺评论</h4>
			</div>
				<div class="media">
					<div class="media-left">
						<a href="">
							<img src="http://usr.im/50x50" alt="" class="media-object">
						</a>
					</div>
					<div class="media-body">
						<label class="media-heading">张三</label>
						<p>
							吃了些什么，挺好吃的
						</p>
					</div>
				</div>
				<div class="media">
					<div class="media-left">
						<a href="">
							<img src="http://usr.im/50x50" alt="" class="media-object">
						</a>
					</div>
					<div class="media-body">
						<label class="media-heading">张三</label>
						<p>
							吃了些什么，挺好吃的
						</p>
					</div>
				</div>
				<div class="media">
					<div class="media-left">
						<a href="">
							<img src="http://usr.im/50x50" alt="" class="media-object">
						</a>
					</div>
					<div class="media-body">
						<label class="media-heading">张三</label>
						<p>
							吃了些什么，挺好吃的
						</p>
					</div>
				</div>
				<!-- 评论分页 -->
					<ul class="pagination">
						<li >
					      <a href="#" aria-label="Previous">
					        <span aria-hidden="true">&laquo;</span>
					      </a>
					    </li>
					    <li class="active"><a href="#">1</a></li>
					    <li><a href="#">2</a></li>
					    <li><a href="#">3</a></li>
					    <li><a href="#">4</a></li>
					    <li><a href="#">5</a></li>
					    <li>
					      <a href="#" aria-label="Next">
					        <span aria-hidden="true">&raquo;</span>
					      </a>
					    </li>
					</ul>
				<!-- /评论分页 -->

			
		</div>
	<!-- /店铺评论 -->
</div>

@endsection
