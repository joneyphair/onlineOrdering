@extends('admin.app')

@section('content')
<ol class="breadcrumb">
  <li><a href="/admin">首页</a></li>
  <li><a href="/admin/shop">商家</a></li>
  <li><a href="/admin/manage">商家管理</a></li>
</ol>
      <!-- 店铺设置 -->
        <div class="m-shop">
            <div class="page-header">
              <h3>店铺设置</h3>
            </div>
            <div class="setting">
                <div class="well">
                    <form action="">
                        
                        <label class="checkbox-inline">
                          <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" id="inlineCheckbox3" value="option3"> 3
                        </label>

                    </form>
                </div>
            </div>
        </div>
      	
      <!-- /店铺设置 -->
    <div class="panel panel-default">
    	<div class="panel-heading">
    		店铺管理
    	</div>
    	<div class="panel-body">
    		<div class="row">
    			<div class="col-md-3 col-sm-6">
    				 <div class="thumbnail">
    				  <img src="http://usr.im/150x150" alt="" class="img-circle">
    				  <div class="caption">
    				     <h4><a href="/admin/shop">商家列表</a></h4>
    				     <p>
    				       商家信息的修改、商家信息的修改、商家信息的修改、商家信息的修改、商家信息的修改、
    				       商家信息的修改、商家信息的修改、商家信息的修改、
    				       商家信息的修改、
    				       商家信息的修改、
    				       商家信息的修改、
    				     </p>
    				     <div class="btn-group">
    				        <a href="" class="btn"><i class="glyphicon glyphicon-pencil"></i></a>
    				        <a href="" class="btn"><i class="glyphicon glyphicon-remove"></i></a>
    				     </div>
    				  </div>
    				</div>
    			</div>
    			<div class="col-md-3 col-sm-6">
    				 <div class="thumbnail">
    				  <img src="http://usr.im/150x150" alt="" class="img-circle">
    				  <div class="caption">
    				     <h4>商家管理</h4>
    				     <p>
    				       商家信息的修改、商家信息的修改、商家信息的修改、商家信息的修改、商家信息的修改、
    				       商家信息的修改、商家信息的修改、商家信息的修改、
    				       商家信息的修改、
    				       商家信息的修改、
    				       商家信息的修改、
    				     </p>
    				     <div class="btn-group">
    				        <a href="" class="btn"><i class="glyphicon glyphicon-pencil"></i></a>
    				        <a href="" class="btn"><i class="glyphicon glyphicon-remove"></i></a>
    				     </div>
    				  </div>
    				</div>
    			</div>
    			<div class="col-md-3 col-sm-6"></div>
    			<div class="col-md-3 col-sm-6"></div>
    			<div class="col-md-3 col-sm-6"></div>
    			<div class="col-md-3 col-sm-6"></div>
    		</div>
    	</div>
    </div>

@endsection