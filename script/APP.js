(function(){
   apiready = function(){
    //时间格式化
    Date.prototype.Format = function (fmt) { //author: meizz 
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "h+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    /*========================================
    *Config
    *=========================================
    */
    Config = {
         ID:'A6972747662689',
         KEY:'97FE8861-FD13-98BA-1C2A-CA16F754C4F1',
         APPKEY:'',
         HOST:'https://d.apicloud.com',
         ROOT:api.wgtRootDir,
         FRAME:{
            bounces: true,
            opaque: true,
            bgColor: '#fff',
            vScrollBarEnabled:true,
            hScrollBarEnabled:true,
            scaleEnabled:false,
            slidBackEnabled:true,
            pageParam: {name: ''}
         },
         WIN:{
            pageParam: {},
            bounces: true,
            opaque: true,
            bgColor: '#fff',
            vScrollBarEnabled:true,
            hScrollBarEnabled:true,
            scaleEnabled:false,
            slidBackEnabled:true
         },
         HEADER:{
             height:50,
             width:api.winWidth,
             backgroundColor:'#297CBB'
         },
         MAIN:{
             height:api.winHeight - 110,
             width:api.winWidth,
             backgroundColor:'#fff'
         },
         FOOTER:{
             height:60,
             width:api.winWidth,
             backgroundColor:'#297CBB'
         },
         HTML:{
                "home":{
                  url:"index.html",
                  win:{
                    bgColor: '#fff',
                    vScrollBarEnabled:false,
                    hScrollBarEnabled:false,
                    bounces: false,
                  }
                },
                 
                "menu":{
                  url:"html/menu/index.html",
                  win:{
                    bgColor: '#fff',
                    vScrollBarEnabled:false,
                    hScrollBarEnabled:false
                  }
                },
                "user-login":{
                  url:"html/user/login/index.html"
                },
                "user-register":{
                  url:"html/user/register/index.html"
                },
                "cart":{
                  url:"html/cart/index.html",
                  win:{
                        bounces: false,
                  }
                },
                "cart-list":{
                    url:"html/cart/list/index.html",
                    frame:{
                       rect:{x:0, y:50, w:'auto', h:api.winHeight - 100},
                    }
                },
                "order-confirm":{
                  url:"html/order/confirm/layout.html",
                  win:{
                      bounces: false,
                  }
                },
               "order-confirm-content":{
                url:"html/order/confirm/content.html",
                frame:{
                    rect:{x:0, y:50, w:'auto', h:api.winHeight - 100},
                }
              },
                "order-desc":{
                  url:"html/order/desc/layout.html",
                  win:{
                      bounces: false,
                  }
                },
                 "order-desc-content":{
                  url:"html/order/desc/content.html",
                  frame:{
                      rect:{x:0, y:50, w:'auto', h:api.winHeight - 50},
                  }
                },

                "order-comment":{
                  url:"html/order/comment/layout.html",
                  win:{
                      bounces: false,
                  }
                },
                "order-comment-content":{
                  url:"html/order/comment/content.html",
                  frame:{
                      rect:{x:0, y:50, w:'auto', h:api.winHeight - 50},
                  }
                },
                "order-list":{
                  url:"html/order/list/index.html",
                  frame:{
                      opaque: true
                  }
                },
                "shop":{
                  url:"html/shop/index.html",
                  win:{
                      bounces: false,
                  },
                  frame:{
                     rect:{x:0, y:0, w:api.winWidth, h:api.winHeight},
                  }
                },
                "shop-menu":{
                    url:"html/shop/menu/index.html",
                    frame:{
                       rect:{x:0, y:100, w:'auto', h:api.winHeight - 150},
                    }
                },
                "shop-comment":{
                    url:"html/shop/comment/index.html",
                    frame:{
                       rect:{x:0, y:100, w:'auto', h:api.winHeight - 150},
                    }
                },
                "shop-introduce":{
                    url:"html/shop/introduce/index.html",
                    frame:{
                       rect:{x:0, y:100, w:'auto', h:api.winHeight - 150},
                    }
                },
                 "shop-list":{
                  url:"html/shop/list/index.html",
                  frame:{
                     rect:{x:0, y:50, w:'auto', h:api.winHeight - 110},
                  }
                },
                "personal":{
                  url:"html/personal/index.html",
                },
                "personal-content":{
                  url:"html/personal/content.html",
                  frame:{
                     rect:{x:0, y:50, w:'auto', h:api.winHeight - 100},
                  }
                },
                "about-home":{
                  url:"html/about/home/layout.html",
                  win:{
                    bgColor: '#fff',
                    vScrollBarEnabled:false,
                    hScrollBarEnabled:false,
                      bounces: false,
                  }
                },
                "about-home-content":{
                  url:"html/about/home/content.html",
                  frame:{
                     rect:{x:0, y:50, w:'auto', h:api.winHeight - 100},
                  }
                },
                "setting-comment":{
                  url:"html/setting/comment/layout.html",
                  win:{
                    bgColor: '#fff',
                    vScrollBarEnabled:false,
                    hScrollBarEnabled:false,
                      bounces: false,
                  }
                },
                "setting-comment-content":{
                  url:"html/setting/comment/content.html",
                  frame:{
                     rect:{x:0, y:50, w:'auto', h:api.winHeight - 50},
                  }
                },
                "setting-address":{
                  url:"html/setting/address/layout.html",
                  win:{
                    bgColor: '#fff',
                    vScrollBarEnabled:false,
                    hScrollBarEnabled:false,
                      bounces: false,
                  }
                },
                "setting-address-content":{
                  url:"html/setting/address/content.html",
                  frame:{
                     rect:{x:0, y:50, w:'auto', h:api.winHeight - 100},
                  }
                },
                "setting-password":{
                  url:"html/setting/password/layout.html"
                },
                "setting-password-content":{
                  url:"html/setting/password/content.html",
                  frame:{
                     rect:{x:0, y:50, w:'auto', h:api.winHeight - 50},
                  }
                },
                "address":{
                  url:"html/personal/address/index.html",
                  frame:{
                     pageBounce:'false'
                  }
                },
                "address-list":{
                  url:"html/personal/list/index.html",
                },
                "personal-address":{
                  url:"html/personal/address/index.html"
                },
                "personal-address-list":{
                  url:"html/personal/address/list/index.html",
                  frame:{
                       rect:{x:0, y:50, w:'auto', h:api.winHeight - 100},
                        bgColor: '#ddd'
                    }
                },
                "personal-about":{
                  url:"html/personal/about/index.html",
                  win:{
                     pageBounce:'false'
                  },
                  frame:{
                     pageBounce:'false'
                  }
                },
                "personal-collection":{
                  url:"html/personal/collection/index.html"
                },
                "personal-feedback":{
                  url:"html/personal/feedback/index.html"
                },
                "personal-location":{
                  url:"html/personal/location/index.html"
                },
                "personal-notice":{
                  url:"html/personal/notice/index.html"
                },
                "personal-payment":{
                  url:"html/personal/payment/index.html"
                },
                "personal-service":{
                  url:"html/personal/service/index.html"
                },
                "personal-setting":{
                  url:"html/personal/setting/index.html"
                },
                "personal-update":{
                  url:"html/personal/update/index.html"
                }
        },
        setFrameDefaultAttribute:function(){

            //设置frame框架默认属性
            Config.FRAME.rect = {
                    x:0,
                    y:0,
                    w:'auto',
                    h:Config.MAIN.height
            };
        },
        init:function(){


          //计算frame主内容高
          this.MAIN.height = this.WINHEIGHT - this.HEADER.height - this.FOOTER.height;
          //生成应用程序的appKey
          var now = Date.now();
          Config.APPKEY= Helper.sha1(Config.ID+"UZ"+Config.KEY+"UZ"+now)+"."+now;
          //设置frame框架默认属性
          this.setFrameDefaultAttribute();

          //设置本地数据库和session的值
          if(!window.localStorage.getItem('shop')){
             shopData = {
                 currentId:"5155447978ac7e03417247b3ad"
              };
              window.localStorage.setItem('shop',JSON.stringify(shopData));
          }


          //设置请求数据参数
          var model = api.require('model');
          model.config({
              appKey: '97FE8861-FD13-98BA-1C2A-CA16F754C4F1',
              host: 'https://d.apicloud.com'
          });
        }
      };

    /*========================================
    *Helper
    *=========================================
    */
    Helper = {};

    //debug
    Helper.debug = function(data){
        var str = '';
        switch(typeof data){
            case 'object':{
              str = JSON.stringify(data);
            }
            break;
            case 'string':{
               str = data ;
            }
            break;
            default:{
               str = data;
            }
        }
        alert(str);
    }
    //成功提示
    Helper.success = function(msg){
        alert(msg);
    }
    //错误提示
    Helper.error = function(msg){
        alert(msg);
    }
    //格式化时间
    Helper.formatDate = function(time){
      function add0(m){
        return m<10?'0'+m:m 
      }
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(time);
      var y = time.getFullYear();
      var m = time.getMonth()+1;
      var d = time.getDate()+1;
      var h = time.getHours()+1;
      var mm = time.getMinutes()+1;
      var s = time.getSeconds()+1;
      return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
    }
    //随机颜色
    Helper.randomColor = function(){
      return  '#' +
        (function(color){
        return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
          && (color.length == 6) ?  color : arguments.callee(color);
      })('');
    }
    //加密函数
    Helper.sha1 = function(b) {
          function k(a) {
              return g(h(f(a), a.length * 8))
          }
          function d(c) {
              var a = '',
              b;
              for (var d in c) b = c.charCodeAt(d),
              a += (b >> 4 & 15).toString(16) + (b & 15).toString(16);
              return a
          }
          function e(e) {
              var c = '',
              d = -1,
              a, f;
              while (++d < e.length) a = e.charCodeAt(d),
              f = d + 1 < e.length ? e.charCodeAt(d + 1) : 0,
              55296 <= a && a <= 56319 && 56320 <= f && f <= 57343 && (a = 65536 + ((a & 1023) << 10) + (f & 1023), d++),
              a <= 127 ? c += b(a) : a <= 2047 ? c += b(192 | a >> 6 & 31, 128 | a & 63) : a <= 65535 ? c += b(224 | a >> 12 & 15, 128 | a >> 6 & 63, 128 | a & 63) : a <= 2097151 && (c += b(240 | a >> 18 & 7, 128 | a >> 12 & 63, 128 | a >> 6 & 63, 128 | a & 63));
              return c
          }
          function f(c) {
              var b = [];
              for (var a = 0; a < c.length * 8; a += 8) b[a >> 5] |= (c.charCodeAt(a / 8) & 255) << 24 - a % 32;
              return b
          }
          function g(d) {
              var c = '';
              for (var a = 0; a < d.length * 32; a += 8) c += b(d[a >> 5] >> 24 - a % 32 & 255);
              return c
          }
          function h(m, l) {
              m[l >> 5] |= 128 << 24 - l % 32,
              m[(l + 64 >> 9 << 4) + 15] = l;
              var d = [],
              e = 1732584193,
              f = -271733879,
              g = -1732584194,
              h = 271733878,
              k = -1009589776;
              for (var n = 0; n < m.length; n += 16) {
                  var o = e,
                  p = f,
                  q = g,
                  r = h,
                  s = k;
                  for (var b = 0; b < 80; b++) {
                      b < 16 ? d[b] = m[n + b] : d[b] = c(d[b - 3] ^ d[b - 8] ^ d[b - 14] ^ d[b - 16], 1);
                      var t = a(a(c(e, 5), i(b, f, g, h)), a(a(k, d[b]), j(b)));
                      k = h,
                      h = g,
                      g = c(f, 30),
                      f = e,
                      e = t
                  }
                  e = a(e, o),
                  f = a(f, p),
                  g = a(g, q),
                  h = a(h, r),
                  k = a(k, s)
              }
              return [e, f, g, h, k]
          }
          function i(d, a, b, c) {
              return d < 20 ? a & b | ~a & c: d < 40 ? a ^ b ^ c: d < 60 ? a & b | a & c | b & c: a ^ b ^ c
          }
          function j(a) {
              return a < 20 ? 1518500249 : a < 40 ? 1859775393 : a < 60 ? -1894007588 : -899497514
          }
          function a(b, c) {
              var a = (b & 65535) + (c & 65535),
              d = (b >> 16) + (c >> 16) + (a >> 16);
              return d << 16 | a & 65535
          }
          function c(a, b) {
              return a << b | a >>> 32 - b
          }
          return b = String.fromCharCode,
          function(a) {
              return d(k(e(a)))
          }
      } ();
    //
    Helper.openFrame = function(frameName,data){
       var frame = {};
         //设置应用程序默认窗口框架属性
         if(typeof Config.FRAME === 'object'){
            frame = Config.FRAME;
         }
         frame.pageParam = {name: frameName};
         //设置该页面的默认窗口属性
         if(typeof Config.HTML[frameName].frame === 'object'){
          var pageDefaultFrame = Config.HTML[frameName].frame;
            for(var item in pageDefaultFrame){
              frame[item] = pageDefaultFrame[item];
            }
         }
         //框架属性
         frame.name = frameName;
         frame.url = Config.ROOT+'/'+Config.HTML[frameName].url;

          //判断是否为首页，如果是，这特殊调整frame窗口高度，以及y方向，偏移量
          if(api.winName == 'root'){
              frame['rect']['y'] = 0;
              frame['rect']['h'] = api.winHeight - 50;
          }

         //打开子窗口
         api.openFrame(frame);

    };
    //
    Helper.openWin = function(name,data){
        var win = {};
          //设置应用程序默认窗口框架属性
          if(typeof Config.WIN === 'object'){
             win = Config.WIN;
          }
          //设置该页面的默认窗口属性
          if(typeof Config.HTML[name].win === 'object'){
           var defaultWin = Config.HTML[name].win;
             for(var item in defaultWin){
               win[item] = defaultWin[item];
             }
          }
          win.name = name;
          win.pageParam = {'name':api.winName};
          win.url = Config.ROOT+'/'+Config.HTML[name].url;
         
         //打开主窗口
         api.openWin(win);
    };
    //设置购物车状态
    Helper.setCartStatus = function(ele,data){
      var totalPrice = ele.data('total-price'),
          totalCount = ele.data('total-count');
          //计算
          totalCount = parseInt(totalCount) + 1;
          totalPrice = totalPrice+ data.price;
          totalPrice = totalPrice;
          //设置
          ele.data('total-count',totalCount);
          ele.data('total-price',totalPrice);
    };
    Helper.back = function(){
         api.closeWin();
    }
    //显示购物车状态
    Helper.showCartStatus = function(ele){
      var totalPrice = ele.data('total-price'),
          totalCount = ele.data('total-count');

        ele.find('.total-price').first().html('').append('总额：￥'+totalPrice);
        ele.find('.total-count').first().html(totalCount);
    };

   
    /*========================================
    *Model
    *=========================================
    */
    Model = {};
    //
    //地址
    Model.Address = function(){

    }
    //删除地址信息
    Model.Address.prototype.deleteInfoById = function(addressId){
        var status = false;
         $.ajax({
                type: 'POST',
                url:  Config.HOST+"/mcm/api/address/"+addressId,
                dataType: 'json',
                "data": {
                    "_method": "DELETE"
                },
                async: false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY
                },
                success: function(dt){
                  status = true;
                },
                error: function(xhr, type){
                    status = false;
                }
        });
         return status;
    }
    //获取所有地址
    Model.Address.prototype.get = function(uId){
         var resData = [];
         var condition = {
             filter:{
                where:{
                    'userId':uId
                }
             }
         };
           $.ajax({
                  type: 'GET',
                  url:  Config.HOST+"/mcm/api/address/",
                  dataType: 'json',
                  data:condition,
                  async: false,
                  "headers": {
                    "X-APICloud-AppId": Config.ID,
                    "X-APICloud-AppKey": Config.APPKEY
                  },
                  success: function(dt){
                    resData = dt;
                  },
                  error: function(xhr, type){
                      resData = [];
                  }
          });
          return resData;
    } 
    //添加地址
     Model.Address.prototype.add = function(data){
          var status = true;
           $.ajax({
                  type: 'POST',
                  url:  Config.HOST+"/mcm/api/address",
                  dataType: 'json',
                  data:data,  
                  async: false,
                  "headers": {
                    "X-APICloud-AppId": Config.ID,
                    "X-APICloud-AppKey": Config.APPKEY
                  },
                  success: function(dt){
                    status = true;
                  },
                  error: function(xhr, type){
                      status = false;
                  }
          });
          return status;
     }

     //获取用户默认地址
     Model.Address.prototype.getDefault = function(uId){
        var data = [];
        var where = {
           "filter":{
               "where":{"userId":uId},
               "limit":0,
               "skip":0
           }
        };
         $.ajax({
                type: 'GET',
                url:  Config.HOST+"/mcm/api/address",
                dataType: 'json',
                data:where,  
                async: false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY
                },
                success: function(dt){
                  data = dt;
                },
                error: function(xhr, type){
                   data = [];
                }
        });
        return data[0];
     }

    //用户
    Model.User = function(){

    }
    //获取已登录用户的uId
    Model.User.prototype.getUserId = function(){
        var uId = window.localStorage.getItem('uId');
        return uId;
    }
    //验证用户密码
    Model.User.prototype.checkLoginPassword = function(id,password){
      var resData = [];
     //通过id获取用户的用户名信息
     var UserModel = new Model.User();
     var baseInfo = UserModel.get(id);
        $.ajax({
               type: 'POST',
               url:  Config.HOST+"/mcm/api/user/login",
               dataType: 'json',
               data:{
                   'username':baseInfo['username'],
                   'password':password
               }, 
               async: false,
               "headers": {
                 "X-APICloud-AppId": Config.ID,
                 "X-APICloud-AppKey": Config.APPKEY
               },
               success: function(dt){
                 resData = dt;
               },
               error: function(xhr, type){
                 resData = [];
               }  
       });
        if(!resData){
            return false;
        }
        return true;
    }
    //获取用户Id
    Model.User.prototype.getId = function(data){
        var uId = null;
         $.ajax({
                type: 'POST',
                url:  Config.HOST+"/mcm/api/user/login",
                dataType: 'json',
                data:data,  
                async: false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY
                },
                success: function(dt){
                  uId = dt.userId;
                },
                error: function(xhr, type){
                  
                }
        });
         return uId;
    }
    //通过uId获取用户的基本信息
     Model.User.prototype.get = function(uId){  
        var data = {};
         $.ajax({
                type: 'GET',
                url: Config.HOST+"/mcm/api/user/"+uId,
                dataType: 'json', 
                async: false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY
                },
                success: function(dt){
                 data = dt;
                },
                error: function(xhr, type){
                }
        });
         return data;

     }
     //添加用户
    Model.User.prototype.add = function(data){
          var status =true;
         $.ajax({
                type: 'POST',
                url:  Config.HOST+"/mcm/api/user",
                dataType: 'json',
                data:data,  
                async: false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY
                },
                success: function(dt){
                  status = true;
                },
                error: function(xhr, type){
                  status = false;
                }
        });

         return status;
    }
    //订单评论
    Model.OrderComment = function(){

    }
    //根据id删除评论
    Model.OrderComment.prototype.deleteInfoById = function(id){
          var status = false;
           $.ajax({
                  type: 'POST',
                  url:  Config.HOST+"/mcm/api/orderComment/"+id,
                  dataType: 'json',
                  "data": {
                     "_method": "DELETE"
                   },
                  async: false,
                  "headers": {
                    "X-APICloud-AppId": Config.ID,
                    "X-APICloud-AppKey": Config.APPKEY
                  },
                  success: function(dt){
                   status = true;
                  },
                  error: function(xhr, type){
                    status =false;
                  }
          });
        return status;
    }
    //根据uId获取所有评论
    Model.OrderComment.prototype.getInfoByUserId = function(userId){
        var data = [];
        var condition = {
            filter:{
               where:{
                 "userId":userId
               }
            }
        };
         $.ajax({
                type: 'GET',
                url:  Config.HOST+"/mcm/api/orderComment",
                dataType: 'json',
                data:condition,  
                async: false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY
                },
                success: function(dt){
                 data = dt;
                },
                error: function(xhr, type){
                 
                }
        });
        return data;
    }
    //通过店铺id获取店铺评论
    Model.OrderComment.prototype.getInfoByShopId = function(shopId){
        var data = [];
        var condition = {
            filter:{
               where:{
                 "shopId":shopId
               }
            }
        };
         $.ajax({
                type: 'GET',
                url:  Config.HOST+"/mcm/api/orderComment",
                dataType: 'json',
                data:condition,  
                async: false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY
                },
                success: function(dt){
                 data = dt;
                },
                error: function(xhr, type){
                 
                }
        });
        return data;
    }

    Model.OrderComment.prototype.create = function(data){
        var status = false;
         $.ajax({
                type: 'POST',
                url:  Config.HOST+"/mcm/api/orderComment",
                dataType: 'json',
                data:data,  
                async: false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY
                },
                success: function(dt){
                  status = true;
                },
                error: function(xhr, type){
                  status = false;
                }
        });
         return status;
    }
    //订单详情
    Model.OrderDetail = function(){

    }
    //通过订单详情获取订单详情信息
    Model.OrderDetail.prototype.getInfoById = function(orderDetailId){
      var resData = {};
         $.ajax({
                type: 'get',
                url:  Config.HOST+"/mcm/api/orderDetail/"+orderDetailId,
                dataType: 'json',
                async: false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY
                },
                success: function(dt){
                  resData = dt;
                },
                error: function(xhr, type){
                  resData = {};
                }
        });

        return resData;
    }
    //获取订单详情信息
    Model.OrderDetail.prototype.get = function(id){
      var resData = [];
        var condition = {
            "filter":{
                "where":{
                   "orderId":id
                }
            }
        };
         $.ajax({
                type: 'get',
                url:  Config.HOST+"/mcm/api/orderDetail",
                dataType: 'json',
                data:condition,  
                async: false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY
                },
                success: function(dt){
                  resData = dt;
                },
                error: function(xhr, type){
                  resData = {};
                }
        });

        return resData;
    }
    //创建订单详情
    Model.OrderDetail.prototype.create = function(data){
      var resData = {};
       $.ajax({
              type: 'POST',
              url:  Config.HOST+"/mcm/api/orderDetail",
              dataType: 'json',
              data:data,  
              async: false,
              "headers": {
                "X-APICloud-AppId": Config.ID,
                "X-APICloud-AppKey": Config.APPKEY
              },
              success: function(dt){
                resData = dt;
              },
              error: function(xhr, type){
                resData = {};
              }
      });
       return resData ;
    }
    //订单
    Model.Order = function(){

    }
    //创建一个新的订单
    Model.Order.prototype.create = function(data){
      var resData = {};
         $.ajax({
                type: 'POST',
                url:  Config.HOST+"/mcm/api/order",
                dataType: 'json',
                data:data,  
                async: false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY
                },
                success: function(dt){
                  resData = dt;
                },
                error: function(xhr, type){
                  resData = {};
                }
        });

        return resData;
    }
    //根据id获取order基本信息
    Model.Order.prototype.baseInfo = function(id){
        var resData = {};
        //请求数据
         $.ajax({
                type: 'GET',
                url:Config.HOST+"/mcm/api/order/"+id,
                dataType: 'json',
                async: false,
                "cache": false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY,
                 
                },
                success: function(dt){
                 resData = dt;
                },
                error: function(xhr, type){
                   resData = {};
                }
        });


         return resData;
    }
    //根据uId获取用户所有订单信息
    Model.Order.prototype.get = function(uId){
      //过滤条件
          var condition = {
             filter:{
                "where":{
                   "userId":uId
                }
             }
          };
          var data = [];
            $.ajax({
                   type: 'GET',
                   url:  Config.HOST+"/mcm/api/order",
                   dataType: 'json',
                   data:condition,  
                   async: false,
                   "headers": {
                     "X-APICloud-AppId": Config.ID,
                     "X-APICloud-AppKey": Config.APPKEY,
                     "Content-Type":"application/json"
                   },
                   success: function(dt){
                     data = dt;
                   },
                   error: function(xhr, type){
                      data = [];
                   }
           });
        return data;
    }
    Model.Order.prototype.add = function(){
      //获取localstorage中的购物车数据
      var CartModel = new Model.Cart();
      var data = CartModel.get();


    /*  var data = [];

        $.ajax({
               type: 'POST',
               url:  Config.HOST+"/mcm/api/order",
               dataType: 'json',
               data:this.condition,  
               async: false,
               "headers": {
                 "X-APICloud-AppId": Config.ID,
                 "X-APICloud-AppKey": Config.APPKEY,
                 "Content-Type":"application/json"
               },
               success: function(dt){
                 data = dt;
               },
               error: function(xhr, type){
                  data = [];
               }
       });*/
    }
    //购物车
    Model.Cart = function(){
      this.table = 'cart';
      this.localTable = 'cart';
      this.data = null;
      this.where = null;
      //初始化
       this.init();
    }
    //初始化
    Model.Cart.prototype.init = function(){

      //本地数据库初始化
      if(!window.localStorage.getItem(this.localTable)){
            var data = {
              'data':[]
            };
            window.localStorage.setItem(this.localTable,JSON.stringify(data));
       }
       //清空数量小于等于0的订单
       var cart = window.localStorage.getItem(this.localTable);
           cart = JSON.parse(cart);
       var data = cart.data,
           index = null;
       for(var i = 0;i<data.length;i++){
          if(data[i].count<=0){
              this.delete(data[i].id);
             break;
          }
       }
    }
    //清空购物车里的信息
    Model.Cart.prototype.clear = function(){
      if(window.localStorage.getItem(this.localTable)){
            var data = {
              'data':[]
            };
            window.localStorage.setItem(this.localTable,JSON.stringify(data));
       }
       return true;
    }
    //购物车添加查找功能
    Model.Cart.prototype.where = function(where){
        this.where = where;
        return this;
    }
    //按照商品id删除指定购物车数据
    Model.Cart.prototype.delete = function(id){
        var cart = window.localStorage.getItem(this.localTable);
            cart = JSON.parse(cart);
        var data = cart.data,
            index = null;
        for(var i = 0;i<data.length;i++){
           if(id == data[i].id){
              index = i;
              data.splice(i,1);
              break;
           }
        }

        //删除成功，返回删除的id值
        if(index !== null){
              cart.data = data;
          window.localStorage.setItem(this.localTable,JSON.stringify(cart));
            return index;
        }
        //报错，没删除成功

    }
    //获取localStorage中的购物车数据
    Model.Cart.prototype.get = function(){
        var cart = window.localStorage.getItem(this.localTable);
            cart = JSON.parse(cart);
        return cart.data;   
    }
    Model.Cart.prototype.find = function(id){
         var cart = window.localStorage.getItem(this.localTable);
            cart = JSON.parse(cart);
          var data = cart.data;
          for(var i = 0;i<data.length;i++){
            if(id  == data[i].id){
                return data[i];
            }
          }
         return [];
     }
     //增加
  Model.Cart.prototype.increment = function(data){
      var cart = window.localStorage.getItem(this.localTable);
              cart = JSON.parse(cart);
       var cartData = cart.data;
       var status = true;
        for(var i = 0;i<cartData.length;i++){
           if(data.id == cartData[i].id){
                status = false;
                cartData[i].count +=1;
           }
        }
        if(status){
            cartData.push(data);
        }
          cart.data = cartData;
     window.localStorage.setItem(this.localTable,JSON.stringify(cart));
  }
  //减少
  Model.Cart.prototype.reduce = function(){
     var cart = window.localStorage.getItem(this.localTable);
             cart = JSON.parse(cart);
      var cartData = cart.data;
       for(var i = 0;i<cartData.length;i++){
          if(data.id == cartData[i].id){
               cartData[i].count -=1;
          }
       }

       cart.data = cartData;
    window.localStorage.setItem(this.localTable,JSON.stringify(cart));
  }
  //购物车统计数量和总价格 cart-statistics
Model.Cart.prototype.statistics = function(){
  var totalCount = 0,totalPrice = 0;
  var cart = window.localStorage.getItem(this.localTable);
      cart = JSON.parse(cart);
  var cartData = cart.data;

  for(var i = 0;i<cartData.length;i++){
      totalCount += cartData[i].count;
      totalPrice += cartData[i].price*cartData[i].count;
  }

  return {'total_count':totalCount,'total_price':totalPrice};

}
   Model.Cart.prototype.update = function(data){
          var cart = window.localStorage.getItem(this.localTable);
              cart = JSON.parse(cart);
          var cartData = cart.data;
          var status = true;
              for(var i = 0;i<cartData.length;i++){
                  if(data.id == cartData[i].id){
                        cartData[i].count = data.count;
                        //发现订单数量小于等于0,则删除订单
                        if(cartData[i].count<=0){
                           this.delete(cartData[i].id);
                        }
                        status = false;
                        break;
                  }
              }
              if(status){
                cartData.push(data); 
              }
              cart.data = cartData;
         window.localStorage.setItem(this.localTable,JSON.stringify(cart));
   }
  //店铺
  Model.Shop = function(){
    this.condition = {};

  }
  Model.Shop.prototype.where = function(condition){
      this.condition = condition;
      return this;
  }
  //获取单个店铺的信息
  Model.Shop.prototype.getInfoByShopId = function(shopId){
        var data = {};
         $.ajax({
                type: 'GET',
                url:  Config.HOST+"/mcm/api/shop/"+shopId,
                dataType: 'json',
                async: false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY,
                  "Content-Type":"application/json"
                },
                success: function(dt){
                  data = dt;
                },
                error: function(xhr, type){
          
                }
        });
      return data;
  }
  Model.Shop.prototype.get = function(){
      var data = [];
       $.ajax({
              type: 'GET',
              url:  Config.HOST+"/mcm/api/shop",
              dataType: 'json',
              data:this.condition,  
              async: false,
              "headers": {
                "X-APICloud-AppId": Config.ID,
                "X-APICloud-AppKey": Config.APPKEY,
                "Content-Type":"application/json"
              },
              success: function(dt){
                data = dt;
              },
              error: function(xhr, type){
                 data = [];
              }
      });
    return data;
  }

  //shop-menu
  Model.Menu = function(){
      this.condition = {};
  }
  //通过菜单id获取菜单的信息
  Model.Menu.prototype.getInfoById = function(menuId){
      //组合查询条件
        var  data = {};
         $.ajax({
                type: 'GET',
                url:  Config.HOST+"/mcm/api/shop_menu/"+menuId,
                dataType: 'json',
                async: false,
                "headers": {
                  "X-APICloud-AppId": Config.ID,
                  "X-APICloud-AppKey": Config.APPKEY,
                  "Content-Type":"application/json"
                },
                success: function(dt){
                  data = dt;
                },
                error: function(xhr, type){
                   data = {};
                }
        });
        return data;
  }
  //通过店铺Id查询该店铺的菜单
  Model.Menu.prototype.getShopMenuByShopId = function(shopId){
    //组合查询条件
      var condition = {
          filter:{
             where:{
                 "shopId":shopId
             }
          }
      };
      var  data = [];
       $.ajax({
              type: 'GET',
              url:  Config.HOST+"/mcm/api/shop_menu",
              dataType: 'json',
              data:condition,
              async: false,
              "headers": {
                "X-APICloud-AppId": Config.ID,
                "X-APICloud-AppKey": Config.APPKEY,
                "Content-Type":"application/json"
              },
              success: function(dt){
                data = dt;
              },
              error: function(xhr, type){
                 data = [];
              }
      });
      return data;
  } 
  Model.Menu.prototype.where = function(condition){
      this.condition = condition;
      return this;
  }
  Model.Menu.prototype.get = function(){
      var data = [];
      var where = this.condition;
       $.ajax({
              type: 'GET',
              url:  Config.HOST+"/mcm/api/shop_menu",
              dataType: 'json',
              data:where,
              async: false,
              "headers": {
                "X-APICloud-AppId": Config.ID,
                "X-APICloud-AppKey": Config.APPKEY,
                "Content-Type":"application/json"
              },
              success: function(dt){
                data = dt;
              },
              error: function(xhr, type){
                 data = [];
              }
      });
    return data;
  }
    /*========================================
    *Controller
    *=========================================
    */

    Controller = {};
    //设置
    Controller.Setting = function(){

    }
    //根据uId显示用户所有评论
    Controller.Setting.prototype.showComment = function(ele){
      var UserController = new Controller.User();
      //用户已经登录
      if(!UserController.isLogin()){
            Helper.error("您还没登录，请登录");
            return false;
      }
      //获取用户uId
      var UserModel = new Model.User();
      var uId  = UserModel.getUserId();
      //获取用户评论信息
      var OrderCommentModel = new Model.OrderComment();
      var data = OrderCommentModel.getInfoByUserId(uId);
      //遍历数据
      var tpl = '';
      for(var i = 0;i<data.length;i++){
          tpl += '<li>'+
                '<div class="header">'+
                 '<span class="nickname">'+data[i]['shopName']+'</span>'+
                  '<span class="time">'+(new Date(data[i]['createdAt'])).Format('yyyy-MM-dd')+'</span>'+
               '</div>'+
               '<div class="body">'+
                  data[i]['content']+
                '</div>'+
                '<div class="footer">'+
                  '<i class="iconfont icon-zanyang"></i>'+data[i]['menuName']+
                  '<span class="delete-btn js-delete-comment" data-id="'+data[i]['id']+'"><i class="iconfont icon-shanchu"></i></span>'+
                '</div>'+
              '</li>';
      }
      ele.html('').append(tpl);

    }
    //根据uId显示用户所有收货信息
    Controller.Setting.prototype.showAddress = function(ele){
      var UserController = new Controller.User();
      //用户已经登录
      if(!UserController.isLogin()){
            Helper.error("您还没登录，请登录");
            return false;
      }
      //获取用户uId
      var UserModel = new Model.User();
           var uId  = UserModel.getUserId();
      //获取用户所有收货人地址信息
      var AddressModel = new Model.Address();
      var data= AddressModel.get(uId);
      //遍历数据
      var tpl = '';
      for(var i = 0;i<data.length;i++){
          tpl += '<li >'+
                     '<label for="username">'+data[i]['username']+'</label>'+
                    '<label for="telephone">'+data[i]['telephone']+'</label>'+
                   '<p>'+
                      '<span class="province">'+data[i]['province']+'</span>'+
                      '<span class="city">'+data[i]['city']+'</span>'+
                      '<span class="address">'+data[i]['address']+'</span>'+
                 '</p>'+
                 '<div class="sidebar">'+
                      '<span class="js-set-default-address" data-id="'+data[i]['id']+'"'+
                      ' data-username="'+data[i]['username']+'"'+
                       ' data-user-id="'+data[i]['userId']+'"'+
                       ' data-province="'+data[i]['province']+'"'+
                       ' data-address="'+data[i]['address']+'"'+
                        ' data-telephone="'+data[i]['telephone']+'"'+
                      'data-city="'+data[i]['city']+'">'+'默认</span>'+
                '</div>'+
                '<div class="footer">'+
                '<span class="js-delete-address" data-id="'+data[i]['id']+'"><i class="iconfont icon-shanchu"></i></span>'+
              '</div>'+
          '</li>';
      }

      ele.html('').append(tpl);
     

    }
    //设置密码
    Controller.Setting.prototype.setLoginPassword = function(data){
         //-用户uid
        var uId = window.localStorage.getItem('uId');
        if(!uId){
            Helper.error("您还没登录，请登录");
            return false;
        }
        //验证数据的正确性
        if(data.password == '' ){
            Helper.error("输入的旧密码不能为空");
            return ;
        }else if(data.newPassword == '' || data.confirmPassword == ''){
              Helper.error("新密码不能为空");
              return ;
        }else if(data.newPassword != data.confirmPassword){
            Helper.error("两次输入的密码不正确");
            return ;
        }
        //#####验证旧密码是否正确
        //-获取用户信息
        var UserModel = new Model.User();
        var status = UserModel.checkLoginPassword(uId,data.password);
        //_验证输入的旧密码是否正确
        if(!status){
            Helper.error("输入的旧密码不对");
            return ;
        }
         Helper.success("密码修改成功！");
        //返回
        Helper.back();

    }
    //订单评论
    Controller.OrderComment = function(){

    }
    //删除信息
    Controller.OrderComment.prototype.deleteInfo = function(data){
        var OrderCommentModel = new Model.OrderComment();
        var status = OrderCommentModel.deleteInfoById(data.id);
        if(status){
             Helper.success("删除成功");
             api.sendEvent({
                 name: 'refreshEvent'
             });
             return false;
        }
        return Helper.error("删除失败");
    }
    //
    //订单
    Controller.Order = function(){

    }
    //订单评论
    Controller.Order.prototype.comment = function(data){
          var menuId = data.menuId;
          //通过menuId获取菜单信息
          var MenuModel = new Model.Menu(),
             menuData =  MenuModel.getInfoById(menuId);
          //组装评论数据信息
          data.shopId = menuData.shopId;
          data.menuName = menuData.name;
          data.menuPrice = menuData.price;
          //通过订单详情Id获取订单信息
          var OrderDetailModel = new Model.OrderDetail();
          var orderDetailData = OrderDetailModel.getInfoById(data.orderDetailId);

         data.orderCount = orderDetailData.count;

         //通过shopId获取店铺信息
         var ShopModel = new Model.Shop();
         var shopData = ShopModel.getInfoByShopId(data.shopId);

         data.shopName = shopData.name;

         //获取用户信息
         var UserModel = new Model.User();
         var userData = UserModel.get(data.userId);

         data.username = userData.username;


          var OrderComment = new Model.OrderComment();
          var status = OrderComment.create(data);
          if(status){
             Helper.success("评论成功!");
             Helper.back();
              return true;
          }
          Helper.error("评论失败!");
          return false;
    }
    //打开订单评论
    Controller.Order.prototype.openComment = function(data){
         var order= window.localStorage.getItem('order');
             order = JSON.parse(order);
         if(!order){
           var data = {
              "currentId":data.id,
              "menuId":data.menuId
           };
           window.localStorage.setItem('order',JSON.stringify(data));
           return true;
         }
         order['currentId'] = data.id;
        order['menuId'] = data.menuId;
        window.localStorage.setItem('order',JSON.stringify(order));
         Helper.openWin('order-comment');
    }
    //打开订单详情
    Controller.Order.prototype.open = function(id){
        var order= window.localStorage.getItem('order');
            order = JSON.parse(order);
        if(!order){
          var data = {
             "currentId":id
          };
          window.localStorage.setItem('order',JSON.stringify(data));
          return true;
        }
        order['currentId'] = id;
       window.localStorage.setItem('order',JSON.stringify(order));

       Helper.openWin('order-desc');



    }
    //显示订单详情
    Controller.Order.prototype.showDetail = function(ele){
        var order = window.localStorage.getItem('order');
             order = JSON.parse(order);
        var id  = order.currentId;

        //获取订单数据
        var OrderModel = new Model.Order();
        var orderData = OrderModel.baseInfo(id);

        //获取订单详情数据
        var OrderDetailModel = new Model.OrderDetail();
        var orderDetailData = OrderDetailModel.get(id);



        var orderDetailEle = $(ele).find('.order-list');
        orderDetailEle.html('');
        //遍历订单详情数据
        var tpl = '';
        for(var i = 0;i<orderDetailData.length;i++){
            tpl +='<li>'+
                     '<span class="name">'+orderDetailData[i]['name']+'</span>'+
                     '<span class="price">￥'+orderDetailData[i]['price']+'</span>'+
                     '<span class="count">'+orderDetailData[i]['count']+'</span>'+
                     '<span class="comment-btn js-open-order-comment" data-id="'+orderDetailData[i]['id']+'" data-menu-id="'+orderDetailData[i]['menuId']+'">评论</span>'+
                '</li>';
        }
         orderDetailEle.html('').append(tpl);


        //设置指定的值

        //编号
        ele.find('.order-id').text(orderData['id']);
        //时间
        var time = (new Date(orderData['createdAt'])).getTime();
        ele.find('.order-date').text(Helper.formatDate(time));
        //收货人
        ele.find('.order-username').text(orderData['username']);


    }
    //确定订单，开始下订单
    Controller.Order.prototype.confirmOrder = function(){
       //判断用户是否登录
        var uId = window.localStorage.getItem('uId');
        if(!uId){
             Helper.error('你还没有登录，马上登录');
            return false;
        }
       //获取购物车里的信息
        var CartModel = new Model.Cart();
        var cartData = CartModel.get();
        if(cartData.length == 0){
             Helper.error('购物车里还没有数据，马上去体验购物');
            return false;
        }
       
        //获取用户下订单时的送货地址
        var localAddress = window.localStorage.getItem('address');
        var addressData = JSON.parse(localAddress);
        //开始创建一个订单
        var orderData = {
          "userId":uId,
          "addressId":addressData['id'],
          "address":addressData['province'] + addressData['city'] + addressData['address'],
          "telephone":addressData['telephone'],
          "username":addressData['username']
        };
        var OrderModel = new Model.Order();
        var resOrderData = OrderModel.create(orderData);
        //将购物车的信息，提交到订单详情表中
        var OrderDetailModel = new  Model.OrderDetail();
        var dt = {};
          //开始遍历购物车里的数据，提交到服务器中的OrderDetail表中
          for(var i = 0;i<cartData.length;i++){
                dt = cartData[i];
                dt["menuId"] = cartData[i]['id'];
                dt['orderId'] = resOrderData['id'];
               OrderDetailModel.create(dt);
          }
          //清空购物车
         CartModel.clear();

         Helper.success("您的订单已经收到，我们马上通知商家，请及时查看订单状态");


        api.sendEvent({
            name: 'orderSuccess'
        });


    }
    //显示历史订单记录
    Controller.Order.prototype.show = function(ele){
        var uId = window.localStorage.getItem('uId');
        if(!uId){
            alert("您还没登陆，马上去登陆");
        }
        var OrderModel = new Model.Order();
        var orderData = OrderModel.get(uId);
        //遍历数据，构成视图
        var tpl = '';
        
          // var orderId = null,
          //     detailInfo = null;
          // var OrderDetailModel = new Model.OrderDetail();   
        for(var i = 0;i<orderData.length;i++){
          /*//通过订单id获取订单详情
            orderId = orderData[i]['id'];
           detailInfo = OrderDetailModel.get(orderId);*/
            var date = new Date(orderData[i]['createdAt']);
            var time = date.getTime();
            

            tpl +='<div class="item js-open-order-item" data-id="'+orderData[i]['id']+'">'+
                       '<div class="header">'+Helper.formatDate(time)+'</div>'+
                       '<div class="content">'+
                       '<p>'+
                         '收件人：'+
                         '<span class="username">'+orderData[i]['username']+'</span>'+
                       '</p>'+
                       '<p>'+
                           '地址: '+
                           '<span class="address">'+orderData[i]['address']+'</span>'+
                      '</p>'+
                      '<p>'+
                            '联系方式: '+
                           '<span class="telephone">'+ orderData[i]['telephone']+'</span>'+
                       '</p>'+
                      '</div>'+
                      '<div class="footer">'+
                        '<div class="order-id">编号：'+orderData[i]['id']+'</div>'+
                       '<a  class="btn btn-comment">详情</a>'+
                     '</div>'+
                  '</div>';
          
        }
          ele.html('');
       ele.append(tpl);
       
    }
    //地址
    Controller.Address = function(){

    }
    //设置默认地址
    Controller.Address.prototype.setDefault = function(data){
         window.localStorage.setItem('address',JSON.stringify(data));
         Helper.success("设置成功！");
         Helper.back();
    }
    //获取用户默认地址
    Controller.Address.prototype.getDefault = function(){
        var uId = window.localStorage.getItem('uId');
        if(!uId){
          Helper.error("您还没有登录，请登录！");
          return [];
        }
        var defaultAddress = null;
        var address =   window.localStorage.getItem('address');
        if(!address){
              var addressModel = new Model.Address();
                 defaultAddress = addressModel.getDefault(uId);
              //将默认地址，保存到localStorage
              window.localStorage.setItem('address',JSON.stringify(defaultAddress));

        }else {
          defaultAddress = JSON.parse(address);
        }
        
        //返回默认地址
        return defaultAddress;

    }
    //显示默认地址
    Controller.Address.prototype.showDefaultAddress = function(ele){
        var data = this.getDefault();
        if(data){
            //更改城市
            ele.find('.username').text(data['username']);
            ele.find('.province').text(data['province']);
             ele.find('.city').text(data['city']);
            ele.find('.address').text(data['address']);
            ele.find('.telephone').text(data['telephone']);

            //隐藏错误提示
            ele.find('.error').hide();
        }
       
    }
     Controller.Address.prototype.add = function(data){
          var uId = window.localStorage.getItem('uId');
          if(!uId){
              Helper.error("您还没登录，请登录");
              return false;
          }
              data.userId = uId;
          var addressModel = new Model.Address();
          var status = addressModel.add(data);
          if(status){
              Helper.success("添加成功");
              Helper.back();
          }else{
             Helper.error("添加失败");
          }

     }

    //用户
    Controller.User = function(){

    }
    //用户退出登录
    Controller.User.prototype.logout = function(){
        //重新设定uId的值
        window.localStorage.setItem('uId','');

        Helper.success('您已成功退出登录');
    }
    //判断用户已经登录
    Controller.User.prototype.isLogin = function(){
        var uId = window.localStorage.getItem('uId');
        if(uId){
            return true;
        }

        return false;
    }
    //用户登录
    Controller.User.prototype.login = function(data){
          if(data.password == ''){
              Helper.error("密码不能为空");
              return false;
          }
          if(data.username == ''){
              Helper.error("用户名不能为空");
              return false;
          }
          var UserModel = new Model.User();
          var uId = UserModel.getId(data);

          if(uId){
              Helper.success("登录成功");
              //在本地保存uId
              window.localStorage.setItem('uId',uId);
              //打开之前的窗口
              Helper.back();
          }else{
              Helper.error("登录失败");
          }
    }
    //用户注册
    Controller.User.prototype.register = function(data){
        if(data.email == ''){
          Helper.error('邮箱不能为空');
          return;
        }else if(data.password == ''){
          Helper.error('密码不能为空');
          return ;
        }else if(data.username == ''){
          Helper.error('用户名不能为空');
            return ;
        }else if(data.password != data.repassword){
            Helper.error('两次输入密码不正确');
            return ;
        }
        delete data.repassword;

        var UserModel = new Model.User();
        var status = UserModel.add(data);

        if(status){
           Helper.success("注册成功");
           Helper.back();
           return ;
        }
        Helper.error('注册失败');

    }
    //显示用户状态
    Controller.User.prototype.showStatus = function(ele){
       var uId = window.localStorage.getItem('uId');
       if(uId){
          //获取用户信息
          var UserModel = new Model.User();
          var userInfo = UserModel.get(uId);
          //隐藏错误提示
          ele.find('.error').hide();
          //设置用户名称
         ele.find('.username').text(userInfo.username);
         ele.find('.introduce').text(userInfo.introduce);
         ele.find('.default').show();
       }else {
         ele.find('.error').show();
         ele.find('default').hide();
       }

    }
    //购物车
    Controller.Cart = function(ele){
       this.Model = new Model.Cart();
       this.ele = ele;
       //方法
       this.showStatistics = function(ele){
          //统计购物车的总数量及总价格
          if(ele !== 'undefined'){
            //获取统计数据
            var CartModel = new Model.Cart();
             var cartStatisticsData = CartModel.statistics();
              var totalCountEle = ele.find('.total-count').first();
              var totalPriceEle = ele.find('.total-price').first();

              //赋值
              totalCountEle.text(cartStatisticsData['total_count']);
             totalPriceEle.text(cartStatisticsData['total_price']);
          }
       }
       this.increment = function(data){
          this.Model.increment(data);
       }
       this.reduce = function(data){
          this.Model.reduce(data);
       }
        this.update = function(data){
           this.Model.update(data);
        }
        this.delete= function(id){
            this.Model.delete(id);
        }
        this.show = function(){
          var CartModel = new Model.Cart();
          var data = CartModel.get(),
              tpl = '';

            if(!data){
                 this.ele.append('<p class="error">你还没有点餐，赶快去点餐吧</p>');
            }
            //有数据
            for(var i = 0;i<data.length;i++){
             tpl += '<li class="item js-cart-item" data-id="'+data[i]['id']+'" data-name="'+data[i]['name']+
                      +'" data-price="'+data[i]['price']+'" data-count="'+data[i]['count']+'">'+
                    '<label for="" class="name">'+data[i]['name']+'</label>'+
                    '<span class="price">'+data[i]['price']+'</span>'+
                   '<div class="side">'+
                      '<i class="ui-btn iconfont icon-jian js-reduce-count"></i>'+
                      '<span class="count">'+data[i]['count']+'</span>'+
                      '<i class="ui-btn iconfont icon-jia js-increase-count"></i>'+
                    '</div>'+
                  '</li>';
            }
            this.ele.html('');
            this.ele.append(tpl);
      
        }
    }
    //shop
    Controller.Shop = function(){
      this.Model = new Model.Shop();

      this.showIntroduce= function(ele){
        var shop = window.localStorage.getItem('shop');
            shop = JSON.parse(shop);
        var where = {
                      "filter":{
                         
                          "where":{ "id":shop.currentId}
                      }
                  };
        var data = this.Model.where(where).get();
            data = data[0];
        if(data){
             //设置店铺名字
             ele.find('.shop-name').text(data.name);
             //设置公告
             ele.find('.shop-notice').text(data.notice);
             //设置营业时间
             ele.find('.shop-time').text(data.time);
            /*  设置电话
            ele.find('.shop-telephone').text(data.telephone);*/
            //设置店铺简介
            ele.find('.shop-introduce').text(data.introduce);
            //设置地址
              ele.find('.shop-address').text(data.address);
            //设置厨师背景
             ele.find('.shop-cook-background').text(data.cookbg);

        }
       

      }
      this.show = function(ele){
        var where = {
                          "filter":{
                             "fields": {
                                  "id": true, 
                                  "name": true,
                                  "introduce":true,
                                  "notice":true,
                                  "time":true
                              },
                              "limit":20,
                              "skip":0
                          }
                  };
        var data = this.Model.where(where).get();

          var tpl = '';
           for(var i = 0;i<data.length;i++){
             tpl += '<div class="item js-openShop " data-id="'+data[i]['id']+'" >'+
                        '<div class="header"data-id="'+data[i]['id']+'" >'+data[i]['name']+'</div>'+
                            '<div class="content">'+
                               String( data[i]['introduce']).slice(0,100)+
                               '<a class="btn-go">...</a>'+
                            '</div>'+
                       '<div class="footer">'+
                       '<i class="iconfont icon-zizhutuiguang"> </i> '+
                       String(data[i]['notice']).slice(0,25)+'</div>'+
                     '</div>';



           }
          ele.html('').append(tpl);
      };

      this.open = function(data){
         var shopData = null;
        if(!window.localStorage.getItem('shop')){
           shopData = {
               currentId:data.id
            };
            window.localStorage.setItem('shop',JSON.stringify(shopData));
            return false;
        }
        shopData = window.localStorage.getItem('shop');
        shopData = JSON.parse(shopData);
        shopData.currentId = data.id;
        window.localStorage.setItem('shop',JSON.stringify(shopData));
        Helper.openWin('shop');
      };

      this.menu = function(ele){
          var shop = window.localStorage.getItem('shop');
              shop = JSON.parse(shop);
          var where = {
                            "filter":{
                               "fields": {
                                    "id": true, 
                                    "name": true,
                                    "price":true,
                                    "count":true
                                },
                                "limit":20,
                                "skip":0,
                                "where":{ "shopId":shop.currentId}
                            }
                    };
          var Menu= new Model.Menu();
         var data =  Menu.where(where).get();
            var tpl = '';
          //遍历数据
          for(var i = 0;i<data.length;i++){
                tpl +='<li class="item js-menu-item" data-id="'+data[i]['id']+'" data-name="'+data[i]['name']+'" data-price="'+data[i]['price']+'" data-count="0">'+
                '<label for="" class="name">'+data[i]['name']+'</label>'+
                '<span class="price">￥'+data[i]['price']+'</span>'+
                '<div class="side">'+
                  '<span class="count">'+'</span>'+
                  '<i class="ui-btn iconfont icon-jia js-increase-count"></i>'+
                '</div>'+
              '</li>';
          } 

        ele.html('').append(tpl);
      }

    };
    Controller.Shop.prototype.showComment = function(ele){
      var shop = window.localStorage.getItem('shop');
          shop = JSON.parse(shop);
      var shopId = shop.currentId;
       //获取店铺评论
       var orderComment = new Model.OrderComment();
       var   shopCommentData = orderComment.getInfoByShopId(shopId);

       //遍历数据
       var tpl = '';
       for(var i = 0;i<shopCommentData.length;i++){
            tpl += '<li>'+
                      '<div class="header">'+
                         '<span class="nickname">'+shopCommentData[i]['username']+'</span>'+
                         '<span class="time">'+(new Date(shopCommentData[i]['createdAt'])).Format('yyyy-MM-dd')+'</span>'+
                       '</div>'+
                      '<div class="body">'+
                        shopCommentData[i]['content']+
                       '</div>'+
                     '<div class="footer">'+
                       '<i class="iconfont icon-zanyang"></i>'+shopCommentData[i]['menuName']+
                    '</div>'+
                '</li>';
       }
       ele.html('').append(tpl);
    }

    /*========================================
    *Event
    *=========================================
    */
    Event = {
      system:function(){
           //检查更新
           $('body').delegate('.js-check-update','click',function(event){
                   event.preventDefault();
                 var mam = api.require('mam');
                 mam.checkUpdate(function(ret, err){
                     if(ret){
                       var result = ret.result;
                       if(result.update){
                           Helper.success("有更新版本");
                       }else{
                           Helper.error("没有更新版本");
                       }
                       
                     }
                 });
           });

          //检测断网的情况，提示
           api.addEventListener({
               name:'offline'
           },function(ret,err){
             Helper.error("您的网络已经断开，请检查网络再使用");
           })
      },
      setting:function(){
        //删除评论
        $('body').delegate('.js-delete-comment','click',function(event){
                event.preventDefault();
              var data = {};
                  data.id = $(this).data('id');
            var OrderCommentController = new Controller.OrderComment();
                OrderCommentController.deleteInfo(data);
        });
          //设置密码
          $('body').delegate('.js-set-password','click',function(event){
                  event.preventDefault();
                var  $form = $(this).parents('#set-passwrod-form');
                var data = {};
                    data.password =  $form.find('input[name=password]').val();
                    data.newPassword =$form.find('input[name=new-password]').val();
                    data.confirmPassword = $form.find('input[name=confirm-password').val();
              var SettingController = new Controller.Setting();
                  SettingController.setLoginPassword(data);
          });
            //选择默认地址
           $('body').delegate('.js-set-default-address','click',function(event){
                  event.preventDefault();
                  //构造数据
                  var data = {};
                      data.id = $(this).data('id');
                      data.city = $(this).data('city');
                      data.province = $(this).data('province');
                      data.telephone = $(this).data('telephone');
                      data.username = $(this).data('username');
                      data.userId = $(this).data('user-id');
                      data.address = $(this).data('address');
                  //设置成默认地址
                  var  AddressController = new Controller.Address();
                      AddressController.setDefault(data);
        
          });

          
      },
      init:function(){
        Event.system();
        Event.setting();
        /*===========================================================
        *通过事件控制应用程序的相关操作
        *============================================================
        */
        //打开更改默认收货人信息
         $('body').delegate('.js-open-setting-address','click',function(event){
                event.preventDefault();
             Helper.openWin('setting-address');
        });
         //删除地址
          $('body').delegate('.js-delete-address','click',function(event){
                 event.preventDefault();
              var addressId = $(this).data('id');
              var AddressModel = new Model.Address();
              var status = AddressModel.deleteInfoById(addressId);
              if(status){
                  Helper.success("删除成功");   
                  Helper.back();
                  return true;              
              }
              Helper.error("操作失败");
         });
         //打开新的frame
         $('.js-openNewFrame').bind('click',function(event){
             //取消默认事件
             event.preventDefault();


             var frame = {};
             //设置应用程序默认窗口框架属性
             if(typeof Config.FRAME === 'object'){
                frame = Config.FRAME;
             }
             //设置该页面的默认窗口属性
             if(typeof Config.HTML[$(this).data('name')].frame === 'object'){
              var pageDefaultFrame = Config.HTML[$(this).data('name')].frame;
                for(var item in pageDefaultFrame){
                  frame[item] = pageDefaultFrame[item];
                }
             }
             //框架属性
             frame.name = $(this).data('name');
             frame.url = Config.ROOT+'/'+Config.HTML[$(this).data('name')].url;

             //为首页
            if(api.winName == 'root'){
                frame['rect']['y'] = 0;
                frame['rect']['h'] = api.winHeight - 50;
            }
             //打开新窗口
             api.openFrame(frame);
         });
         //打开新的窗口
         $('.js-openNewWindow').bind('click',function(event){
             //取消默认事件
             event.preventDefault();
            Helper.openWin($(this).data('name'));
         });

         //确认下单
         $('body').delegate('.js-order-confirm','click',function(event){
              event.preventDefault();
              var OrderController = new Controller.Order();
              //确认下单
              OrderController.confirmOrder();
         });
         //点开某个订单详情
          $('body').delegate('.js-open-order-item','click',function(event){
              event.preventDefault();
              var id = $(this).data('id');
             var OrderController = new Controller.Order();
                OrderController.open(id);
         });
         //打开订单评论窗口
         $('body').delegate('.js-open-order-comment','click',function(event){
              event.preventDefault();
                var data = {};
                    data.id = $(this).data('id');
                    data.menuId = $(this).data('menu-id');
                 var OrderController = new Controller.Order();
                 OrderController.openComment(data);
              // Helper.openWin('order-comment');
         });

         //打开应用的导航窗口
         $('body').delegate('.js-open-menu','click',function(event){
              event.preventDefault();
              Helper.openWin('menu');
         });
         //打开首页
         $('body').delegate('.js-open-home','click',function(event){
              event.preventDefault();
              Helper.openWin('home');
         });
         //打开店铺列表
         $('body').delegate('.js-open-shop-list','click',function(event){
              event.preventDefault();
              Helper.openWin('shop-list');
         });
         //打开个人中心
         $('body').delegate('.js-open-personal','click',function(event){
              event.preventDefault();
              Helper.openWin('personal');
         });
         //点击某个店铺，打开店铺页面
         $('#shop').delegate('.js-openShop','click',function(){
            //取消默认事件
            event.preventDefault();
            //获取店铺id
            var shopId = $(this).data('id');
            var data = {};
                data.id = shopId;
            var shop = new Controller.Shop();
                shop.open(data);
         });
          //返回按钮
         $('.js-back').bind('click',function(event){
              event.preventDefault();
             Helper.back();

         });
          //返回按钮
         $('.js-back-refresh').bind('click',function(event){
              event.preventDefault();
              api.closeWin();
              //刷新
             api.sendEvent({
                 name: 'refreshEvent'
             });

         });
         
        //更新按钮
        $('.js-update').bind('click',function(event){

        });

        //按钮组
         $('.js-btn-group').css({
            borderBottom:'2px solid transparent'
         });
         $('.js-btn-group').first().css({
            borderBottom:'2px solid red'
         });
        $('.js-btn-group').bind('click',function(event){
           event.preventDefault();
           if($(this).data('active')){
               var className = $(this).data('active');
               $(className).hide();
               $(className).eq($(this).index()).show();
           }
           $(this).siblings('.js-btn-group').css({
             borderBottom:'2px solid transparent'
           });
           $(this).css({
              borderBottom:'2px solid red'
           });
        });
        //增加购物车数量
        $('body').delegate('.item .js-increase-count','click',function(event){
               event.preventDefault();
                var ele =  $(this).closest('.item');
                 var data = {};
                     data.id = ele.data('id');
                     data.name = ele.data('name');
                     data.count = ele.data('count') || 0;
                     data.price = ele.data('price') || 0;
                 //+1
                 data.count = parseInt(data.count) + 1;
                 ele.data('count',data.count);
              var cart = new Controller.Cart();
                  cart.increment(data);
              //更新订单统计的数据
              var $cartStatistics = $('#cart-statistics');
              if($cartStatistics !== 'undefined'){
                var cart = new Controller.Cart();
                    cart.showStatistics($cartStatistics);
              }
              //重新显示该订单的数量
              var countEle = ele.find('.count');
                  countEle.html(data.count);
        });

        //减少购物车数量
        $('body').delegate('.item .js-reduce-count','click',function(event){
               event.preventDefault();
                var ele =  $(this).closest('.item');
                 var data = {};
                     data.id = ele.data('id');
                     data.name = ele.data('name');
                     data.count = ele.data('count') || 0;
                     data.price = ele.data('price') || 0;
                 //+1
                 data.count = parseInt(data.count) - 1;
                  if(data.count<0){
                   data.count = 0;
                 }
                 ele.data('count',data.count);
              var cart = new Controller.Cart();
                  cart.update(data);
                  //更新订单统计的数据
                  var $cartStatistics = $('#cart-statistics');
                  if($cartStatistics !== 'undefined'){
                    var cart = new Controller.Cart();
                        cart.showStatistics($cartStatistics);
                  }
                  //发现此时的订单数量为0,则删除该订单
                  if(data.count<=0){
                      ele.remove();
                      return ;
                  }
                  //重新显示该订单的数量
              var countEle = ele.find('.count');
                  countEle.html(data.count);
        });
        //添加到购物车按钮
        $('.js-add-cart').bind('click',function(event){
             event.preventDefault();
             $(this).data('count',parseInt($(this).data('count'))+1);
             var data = {};
                 data.name = $(this).data('name');
                 data.price = $(this).data('price');
                 data.count = $(this).data('count');
             Helper.addToCart(data);

        });
        //打开购物车
        $('.js-open-cart').bind('click',function(event){
           event.preventDefault();
           var CartModel = new Model.Cart();
           var data = CartModel.get();
           if(data.length == 0){
              Helper.error('亲，您的购物车空空如也，马上购物吧!');
              return false;
           }
           Helper.openWin('cart');

        })
        //从购物车里，开始下单
        $('body').delegate('.js-open-order-confirm','click',function(event){
                 event.preventDefault();
                 //判断购物车里是否有数据
                 var CartModel = new Model.Cart();
                 var data = CartModel.get();
                 if(data.length == 0){
                   Helper.error('亲，您的购物车空空如也，马上购物吧!');
                    return false;
                 }
                Helper.openWin('order-confirm');
          });
  

        //打电话
        $('.js-call').bind('click',function(evnet){
           event.preventDefault();
           api.call({
               type: 'tel_prompt',
               number: $(this).data('number')
           });
        });

        //用户去登录
        $('body').delegate('.js-user-login','click',function(event){
            event.preventDefault();

             Helper.openWin('user-login');
        });
        //登录
        $('body').delegate('.js-login','click',function(event){
            event.preventDefault();
            var $form = $(this).parents('#login-form');
            var data = {};
                data.username = $form.find('input[name=username]').val();
                data.password = $form.find('input[name=password]').val();

            var userController = new Controller.User();
                userController.login(data);

                //发送登录信息
                 api.sendEvent({
                     name: 'refreshEvent'
                 });

        });
        //用户退出登录
        $('body').delegate('.js-logout','click',function(event){
            event.preventDefault();
            var UserController = new Controller.User();
            //用户退出登录
            UserController.logout();

          $('#user-status').find('.error').show();
          $('#user-status').find('.default').hide();




        });
        //用户去注册
         $('body').delegate('.js-user-register','click',function(event){
             event.preventDefault();

              Helper.openWin('user-register');
         });
         //注册
          $('body').delegate('.js-register','click',function(event){
              event.preventDefault();
               var $form =  $(this).parents('#register-form');
               var  data = {};
                    data.username = $form.find('input[name=username]').val();
                    data.password = $form.find('input[name=password]').val();
                    data.repassword = $form.find('input[name=repassword]').val();
                    data.email = $form.find('input[name=email]').val();
              var user = new Controller.User();
                  user.register(data);
          });

          //打开新增地址窗口

          $('body').delegate('.js-open-address','click',function(event){
              event.preventDefault();
              Helper.openWin('address');
          });

          //新增地址
          $('body').delegate('.js-add-address','click',function(event){
              event.preventDefault();
             var $form = $('#address-form');
             var  data = {};
                  data.username = $form.find('input[name=username]').val();
                  data.province = $form.find('input[name=province]').val();
                   data.city = $form.find('input[name=city]').val();
                   data.address = $form.find('input[name=address]').val();
                   data.telephone = $form.find('input[name=telephone]').val();
            var address = new Controller.Address();
                address.add(data);

                //刷新
                api.sendEvent({
                    name: 'refreshEvent'
                });
          });

          //评论订单
          
          $('body').delegate('.js-add-comment','click',function(event){
              event.preventDefault();
              //用户id
              var uId = window.localStorage.getItem('uId');
              //订单id
              var order = window.localStorage.getItem('order');
                  order = JSON.parse(order);
             var $form = $('#comment-form');
             var  data = {};
                  data.content = $.trim($form.find('.comment-content').val());
                  data.userId = uId; 
                  data.orderDetailId = order.currentId;
                  data.menuId = order.menuId;



            var  OrderController = new Controller.Order();
                OrderController.comment(data);

          });


      }
    };

    /*========================================
    *应用程序的相关配置
    *=========================================
    */
    APP = {};
    APP.switchBtn = function(name){
        switch(name){
          case 'setting-address-content':{
            //显示用户所有收货人地址信息
            var addressListEle = $('#address-list');
            if(addressListEle){
                var SettingController = new Controller.Setting();
                SettingController.showAddress(addressListEle);
            }
           
          }
          break;
          case 'setting-comment-content':{
            //显示所有评论
            var commentEle = $('#order-comment');
            if(commentEle){
                var SettingController = new Controller.Setting();
                    SettingController.showComment(commentEle);
            }
           
          }
          break;
          case 'order-confirm-content': {
            //body绑定滚动条在顶部的事件
            $(window).scroll(function(){
                var y =  $(window).scrollTop();
                if(y == 0){
                  APP.init();
                }
            });

              //判断用户是否登录
             var userController = new Controller.User();
              var isLogin = userController.isLogin();
              if(isLogin){
                //获取地址显示element
                    var addressEle = $('.m-harvest-address');
                  //显示默认地址
                  var addressController = new Controller.Address();
                      addressController.showDefaultAddress(addressEle);

              }
              
          }
          break;
          case 'order-list':{
               var orderEle = $('#order-content');
               if(orderEle){
                  //订单Controller
                  var OrderController = new Controller.Order();
                  //显示订单列表
                   OrderController.show(orderEle);
               }

               //######
          }
          break;
          case 'order-desc-content':{
               var orderEle = $('#order-item-content');
               if(orderEle){
                  //订单Controller
                  var OrderController = new Controller.Order();
                  //显示订单详情列表
                   OrderController.showDetail(orderEle);
               }

               //######
          }
          break;
          case 'personal-content': {
              //判断用户是否登录
              var userStatusEle = $('#user-status');
              if(userStatusEle){
                  var user = new Controller.User();
                      user.showStatus(userStatusEle);
              }
              
          }
          break;
          case 'home':{
            //生成店铺列表
            var shopEle = $('#shop');
            if(shopEle !== 'undefined'){
              var shop = new Controller.Shop();
                  shop.show(shopEle);
            }
          }
          break;
          case 'shop-menu':{
                //生成店铺菜单
                var shopMenuEle = $('#shop-menu').find('.list');
                if(shopMenuEle !== 'undefined'){
                    var shop = new Controller.Shop();
                        shop.menu(shopMenuEle);
                }
          }
          break;
          case 'shop-comment':{
                //生成店铺评论
                var shopCommentEle = $('#shop-comment');
                if(shopCommentEle !== 'undefined'){
                    var shopController = new Controller.Shop();
                        shopController.showComment(shopCommentEle);
                }
          }
          break;
          case 'shop':{
              //店铺联系方式、名称
                var shop = window.localStorage.getItem('shop');
                    shop = JSON.parse(shop);
                var where = {
                              "filter":{
                                 "fields": {
                                      "id": true, 
                                      "name": true,
                                      "notice":true,
                                      "introduce":true,
                                      "address":true,
                                      "telephone":true,
                                      "time":true

                                  },
                                  "where":{ "id":shop.currentId}
                              }
                          };
                var ShopModel = new Model.Shop();
                var data = ShopModel.where(where).get();
                    data = data[0];
                if(data){
                    $('.shop-name').text(data.name);
                    $('.shop-telephone').text(data.telephone);
                }
          }
          break;
          case 'shop-list':{
              //生成店铺列表
              var shopEle = $('#shop');
              if(shopEle !== 'undefined'){
                var shop = new Controller.Shop();
                    shop.show(shopEle);
              }
          }
          break;
          case 'shop-introduce':{
              //生成店铺列表
              var shopIntroduceEle = $('#shop-introduce');
              if(shopIntroduceEle !== 'undefined'){
                var shop = new Controller.Shop();
                    shop.showIntroduce(shopIntroduceEle);
              }
          }
          break;
          case 'cart-list':{
              //统计购物车的总数量及总价格
              var $cartStatistics = $('#cart-statistics');
              if($cartStatistics !== 'undefined'){
                var cart = new Controller.Cart();
                    cart.showStatistics($cartStatistics);
              }
              //生成购物车内容
               var cartEle = $('#cart').find('.content');
               if(cartEle !== 'undefined'){
                   var cart  = new Controller.Cart(cartEle);
                       cart.show();
               }

          }
          break;
        }
    };
    APP.init = function(){
        // api.setRefreshHeaderInfo({
        //                      visible: true,
        //                      bgColor: 'transparent',
        //                      textColor: '#000',
        //                      textDown: '下拉刷新...',
        //                      textUp: '松开刷新...',
        //                      showTime: false
        //              }, function(ret, err){
        //                      api.toast({
        //                              msg: '刷新',
        //                              duration:1000,
        //                              location: 'bottom'
        //                      });
        //             var currentPage = $('body').data('page');
        //              APP.switchBtn(currentPage);
        //            setTimeout("api.refreshHeaderLoadDone()",1000)
        //     });
        //刷新
        api.addEventListener({
            name: 'refreshEvent'
        }, function(ret){
              //判断当前是哪一页
             var currentPage = $('body').data('page');
             APP.switchBtn(currentPage);
        });

        //初始化config
        Config.init();
          
          //绑定事件到元素
          Event.init();
          //打开当前页的默认frame
          if($('body').data('frame')){
            Helper.openFrame($('body').data('frame'));
          }
        //判断当前是哪一页
        var currentPage = $('body').data('page');
        APP.switchBtn(currentPage);
    };

      //应用程序初始化
      APP.init();


         
   };

})();






