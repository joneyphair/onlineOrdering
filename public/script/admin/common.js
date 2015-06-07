/*Object添加create方法*/
if(typeof Object.create !== "function"){
	Object.create = function(o){
		function F(){

		}
		F.prototype = o;
		return new F();
	}
}
/*Controller*/
;(function(){
	/*Controller接口定义*/
	var Controller = function(){
		console.log("dsfdsfsdf");
	}
	 Controller = {
		create:function(){
			var o = Object.create(this);
			o.parent = this;
			o.prototype = o.fn = Object.create(this.prototype);
			o.created();
			this.inherited(o);
			return o;
		},
		inherited:function(){

		},
		created:function(){

		},
		include:function(o){
			var included = o.included;
			for(var i in o){
				this[i] = o[i];
			}
			if(included) included(this);
		},
		extend:function(o){
			var extended = o.extended;
			for(var i in o){
				this.fn[i] = o[i];
			}
			if(extended) extended(this);
		},
		init:function(){

			return Object.create(this.prototype);
		},
		prototype:{
			init:function(){

			},
			constructor:function(){
				console.log("dsfdsfds");
			}
		}
	};

	var Common = function(){
		console.log("dsfdsf");
	 }
	Common = Controller.create();
		/*Common.prototype = {
			constructor:function(){
				console.log("construct");
			},
			sidebar:function(){

			}
		};*/
	Common.prototype.constructor = function(){
		console.log("hhaahhahha");
	}
	var common = Common.init();
	console.log(common.constructor.prototype.constructor);

	


})();




;(function(){
	/*公用函数*/
	function getComputedStyle(ele)
	{	
		var style  = null;
		if(window.getComputedStyle){
			style = window.getComputedStyle(ele,null);
		}else if(document.currentStyle){
			style = ele.currentStyle;
		}else{
			style = ele.style;
		}
		return style;
	}



	


	/**/

	var Side = function(obj,btn){
		this.obj = 	typeof obj == 'object'? obj : document.getElementById(obj);
		this.switchBtn =  typeof btn == 'object'? btn : document.getElementById(btn);


		console.log("Side object");

		this.init();


	}
	Side.prototype.init = function(){
		console.log('Side init');
		var that = this;
		/*添加点击sideBtn开关，显示隐藏side事件*/
		this.bindEvent(this.switchBtn,'click',function(event){
			console.log("Side bindEvent");
			var event = event||window.event;
			/*停止冒泡*/
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble = true;
			}
			/*执行折叠*/
			that.collapse();

		});

	}
	Side.prototype.collapse = function(){
		console.log("Side collapse");
		/*获取main*/
		var side = this.obj;
		var main = document.getElementById('main');
		var sideStyle = getComputedStyle(side);
		var mainStyle = getComputedStyle(main);
		if(sideStyle.display == 'block' ||sideStyle.display == ''){
			side.style.display = 'none';
			main.style.left = 0;
		}else{
			side.style.display = 'block';
			main.style.left = sideStyle.width;
		}
	}
	Side.prototype.bindEvent = function(obj,type,handler){
		console.log("Side bindEvnet func");
		var obj = obj ||document.getElementById('lside');
		if(window.addEventListener){
			obj.addEventListener(type,handler,false);
		}else if(document.attachEvent){
			obj.attachEvent('on'+type,handler);
		}else {
			obj['on'+type] = handler;
		}
	}






	var LSide = function(obj,btn){
		this.obj = 	typeof obj == 'object'? obj : document.getElementById(obj);
		this.switchBtn =  typeof btn == 'object'? btn : document.getElementById(btn);

		Side.call(this);
		
		
	}
	LSide.prototype = new Side();








	var lside = document.getElementById('lside');
	var  lsideBtn = document.getElementById('lsideBtn');

	var sideBar = new Side(lside,lsideBtn);





})();