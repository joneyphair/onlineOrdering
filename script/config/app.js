define(['zepto','apicloud'],function($){

	/*var APP = function(){
		this.VARS = null;
	}
	APP.prototype.init = function(){
		var self = this;
			apiready = function(){
				self.VARS =  { ROOT:api.wgtRootDir,
		           WINWIDTH:api.winWidth,
		           WINHEIGHT:api.winHeight};


			}
	}


	var app = new APP();
		app.init();
	var timer = null;
	timer = setInterval(function(){
		if(app.VARS){
			clearInterval(timer);
			return app;
		}else{
			return "dsfdsf";
		}
	},100);*/


var APP = function(){
	this.VARS = null;
}
APP.prototype.init = function(){
	var self = this;
	var data = null;
		apiready = function(){
			data =  { ROOT:api.wgtRootDir,
	           WINWIDTH:api.winWidth,
	           WINHEIGHT:api.winHeight};


		}
	var timer = null;
	timer = setInterval(function(){
		if(data){
			self.VARS = data;
			clearInterval(timer);
		}
	},100);
}


var app = new APP();
	app.init();

	return app;

	
});