@extends('admin.app')

@section('content')
      <ol class="breadcrumb">
        <li><a href="/admin">首页</a></li>
        <li><a href="/admin/shop">商家</a></li>
        <li><a href="/admin/shop/add">新增商家</a></li>
      </ol>
      
      <form class="form-horizontal">
            <div class="form-group row">
               <label for="" class="col-sm-1 col-md-2 col-lg-2 control-label">店铺名称</label>
               <div class="col-sm-7 col-md-7 col-lg-8">
                <input type="text" class="form-control" placeholder="店铺名称"/>
               </div>
            </div>
            <!-- <div class="form-group">
              <label for="" class="col-sm-1 control-label">店铺图标</label>
              <div class="col-sm-11"><input type="file"></div>
            </div> -->
            
            <div class="form-group">
                <label for="" class="col-sm-2 col-md-2 control-label">营业时间</label>
                <div class="col-sm-2 col-md-2"><input type="text" class="form-control" placeholder="营业时间"></div>
            </div>  
            <div class="form-group">
              <label for="" class="col-sm-1 col-md-2 control-label">电话号码</label>
              <div class="col-sm-2"><input type="text" class="form-control" placeholder="联系方式"></div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-1 col-md-2  control-label">QQ号码</label>
              <div class="col-sm-2"><input type="text" class="form-control" placeholder="QQ号码"></div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-1 col-md-2 control-label">邮箱</label>
              <div class="col-sm-2"><input type="text" class="form-control" placeholder="邮箱"></div>
            </div>
            <div class="form-group">
               <label for="" class="col-sm-1 col-md-2 control-label">联系地址</label>
               <div class="col-sm-11 col-md-10">
                <div class="col-sm-1 col-md-2">
                  <select class="form-control">
                    <option value="">省份</option>
                    <option value="">湖南省</option>
                    <option value="">北京市</option>
                    <option value="">湖北省</option>
                    <option value=""></option>
                  </select>
                </div>
                <div class="col-sm-1 col-md-2">
                   <select name="" id="" class="form-control">
                      <option value="">市</option>
                      <option value="">常德市</option>
                      <option value="">长沙市</option>
                      <option value="">益阳市</option>
                      <option value="">衡阳市</option>
                   </select>
                </div>
                <div class="col-sm-1 col-md-2">
                   <select name="" id="" class="form-control">
                      <option value="">区/县</option>
                      <option value="">常德市</option>
                      <option value="">长沙市</option>
                      <option value="">益阳市</option>
                      <option value="">衡阳市</option>
                   </select>
                </div>
                <div class="col-sm-4 col-md-4">
                  <input type="text" class="form-control" placeholder="街道/详细地址"/>
                </div>
                
               </div>
            </div>
            <div class="form-group">
             <label for="" class="col-sm-1 col-md-2 control-label">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编</label>
             <div class="col-sm-2"><input type="text" class="form-control" placeholder="邮编"></div>
           </div>
            <div class="form-group">
              <label for="" class="col-sm-1 col-md-2 control-label">关&nbsp;&nbsp;键&nbsp;&nbsp;词</label>
              <div class="col-sm-7">
                <textarea name="" id="" cols="30" rows="1" class="form-control"></textarea>
                <div class="well" style="border:none;background-color:#fff;">
                   <a class="btn btn-primary">速度快</a>
                   <a class="btn btn-primary">挺好的</a>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-1 col-md-2 control-label">公&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;告</label>
              <div class="col-sm-7">
                 <textarea name="" id="" cols="30" rows="2" class="form-control"></textarea>

              </div>
            </div>
            <div class="form-group">
               <label for="" class="col-sm-1 col-md-2 control-label">详细信息</label>
               <div class="col-sm-7">
                  <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
               </div>
            </div>
            
            
            <div class="form-group">
              <div class="col-md-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary">新增</button>
              </div>
           </div>
       </form>


@endsection