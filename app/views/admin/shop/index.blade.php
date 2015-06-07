<style>
  .g-main .m-nav{
     padding:10px;
  }
  .g-main .m-shop{
     position:relative;
  }
  .g-main .m-shop .list-table th,.g-main .m-shop td{
     text-align: center;
  }
  .f-clearfix:after{
    clear:both;
    content:"";
    height:0;
    visibility:hidden;
    display:block;  
  }
  .f-clearfix{
    display:inline-table;
  }
  *html .f-clearfix{
     height:1%;
  }
  .f-clearfix{
    display:block;
  }
  

</style>

@extends('admin.app')

@section('content')
  <div class="m-shop">
  <ol class="breadcrumb">
    <li><a href="/admin">首页</a></li>
    <li><a href="/admin/shop">商家</a></li>
  </ol>
  
  <div class="panel panel-default">
    <div class="panel-heading">
        商家列表
    </div>
    <div class="panel-body">
        <!-- 工具栏 -->
        <div class="m-nav well">
           <div class="btn-group" role="group">
             <button type="button" class="btn btn-default" id="lsTbBtn"><i class="glyphicon glyphicon-list"></i></button>
             <button type="button" class="btn btn-default" id="lsAr"><i class="glyphicon glyphicon-th"></i></button>
           </div>
           <div class="btn-group">
              <button class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></button>
              <button class="btn btn-default"><i class="glyphicon glyphicon-remove"></i></button>
           </div>
        </div>
      <!-- /工具栏 -->

      <!-- 店铺列表 -->
          <!-- 表格呈现方式 -->
          <div class="list-table hidden" id="list_table">
              <table class="table table-bordered table-striped">
                 <thead>
                   <tr>
                     <th><input type="checkbox"></th>
                     <th>#</th>
                     <th>店铺</th>
                     <th>店长</th>
                     <th>营业时间</th>
                     <th>地址</th>
                     <th>电话号码</th>
                     <th>QQ号码</th>
                     <th>邮箱</th>
                     <th>
                        <div class="btn-group">
                           <a href="" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></a>
                           <a href="" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i></a>
                        </div>
                     </th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td><input type="checkbox"></td>
                     <td>1</td>
                     <td>蒸菜馆</td>
                     <td>张先生</td>
                     <td>10:00-22:00</td>
                     <td>北京市</td>
                     <td>1863343453653</td>
                     <td>93343283234</td>
                     <td>93343283234</td>
                     <td>
                       <div class="btn-group">
                          <a href="" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></a>
                          <a href="" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i></a>
                       </div>
                     </td>
                    
                   </tr>
                   <tr>
                     <td><input type="checkbox"></td>
                     <td>1</td>
                     <td>蒸菜馆</td>
                     <td>张先生</td>
                     <td>10:00-22:00</td>
                     <td>北京市</td>
                     <td>1863343453653</td>
                     <td>93343283234</td>
                     <td>93343283234</td>
                     <td>
                      <div class="btn-group">
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></a>
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i></a>
                      </div>
                     </td>
                    
                   </tr>
                   <tr>
                     <td><input type="checkbox"></td>
                     <td>1</td>
                     <td>蒸菜馆</td>
                     <td>张先生</td>
                     <td>10:00-22:00</td>
                     <td>北京市</td>
                     <td>1863343453653</td>
                     <td>93343283234</td>
                     <td>93343283234</td>
                     <td>
                      <div class="btn-group">
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></a>
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i></a>
                      </div>
                     </td>
                    
                   </tr>
                   <tr>
                     <td><input type="checkbox"></td>
                     <td>1</td>
                     <td>蒸菜馆</td>
                     <td>张先生</td>
                     <td>10:00-22:00</td>
                     <td>北京市</td>
                     <td>1863343453653</td>
                     <td>93343283234</td>
                     <td>93343283234</td>
                     <td>
                      <div class="btn-group">
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></a>
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i></a>
                      </div>
                     </td>
                    
                   </tr>
                   <tr>
                     <td><input type="checkbox"></td>
                     <td>1</td>
                     <td>蒸菜馆</td>
                     <td>张先生</td>
                     <td>10:00-22:00</td>
                     <td>北京市</td>
                     <td>1863343453653</td>
                     <td>93343283234</td>
                     <td>93343283234</td>
                     <td>
                      <div class="btn-group">
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></a>
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i></a>
                      </div>
                     </td>
                    
                   </tr>
                   <tr>
                     <td><input type="checkbox"></td>
                     <td>1</td>
                     <td>蒸菜馆</td>
                     <td>张先生</td>
                     <td>10:00-22:00</td>
                     <td>北京市</td>
                     <td>1863343453653</td>
                     <td>93343283234</td>
                     <td>93343283234</td>
                     <td>
                      <div class="btn-group">
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></a>
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i></a>
                      </div>
                     </td>
                    
                   </tr>
                   <tr>
                     <td><input type="checkbox"></td>
                     <td>1</td>
                     <td>蒸菜馆</td>
                     <td>张先生</td>
                     <td>10:00-22:00</td>
                     <td>北京市</td>
                     <td>1863343453653</td>
                     <td>93343283234</td>
                     <td>93343283234</td>
                     <td>
                      <div class="btn-group">
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></a>
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i></a>
                      </div>
                     </td>
                    
                   </tr>
                   <tr>
                     <td><input type="checkbox"></td>
                     <td>1</td>
                     <td>蒸菜馆</td>
                     <td>张先生</td>
                     <td>10:00-22:00</td>
                     <td>北京市</td>
                     <td>1863343453653</td>
                     <td>93343283234</td>
                     <td>93343283234</td>
                     <td>
                      <div class="btn-group">
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></a>
                         <a href="" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i></a>
                      </div>
                     </td>
                    
                   </tr>


                 </tbody>
              </table>
          </div>
          <!-- /表格呈现方式 -->
          <!-- 浮动排列 -->
            <div class="list-arrange " id="list_arrange">

                  <div class="col-md-3 col-sm-4 col-xs-6">
                     <div class="thumbnail">
                      <img src="http://usr.im/400x180" alt="">
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
                  <div class="col-md-3 col-sm-4 col-xs-6">
                     <div class="thumbnail">
                      <img src="http://usr.im/400x180" alt="">
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
                  <div class="col-md-3 col-sm-4 col-xs-6">
                     <div class="thumbnail">
                      <img src="http://usr.im/400x180" alt="">
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
                  <div class="col-md-3 col-sm-4 col-xs-6">
                     <div class="thumbnail">
                      <img src="http://usr.im/400x180" alt="">
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
               
             

            </div>
          <!-- /浮动排列 -->
           <div class="f-clearfix"></div>
          <!-- 分页 -->
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li><a href="#">1</a></li>
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
          <!-- /分页 -->
      <!-- /店铺列表 -->

    </div>
  </div>

    
  </div><!-- /div.m-shop -->
  
  
   	
      
@endsection