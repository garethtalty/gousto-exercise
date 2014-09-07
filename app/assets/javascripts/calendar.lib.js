window.CALENDAR = window.CALENDAR || {};

(function(){


CALENDAR.lib = {

	browserClass:function(){
		$.each($.browser, function(i) {
		$('body').addClass(i);
			return false;
		});
	},
	log:function(message){
		if (CALENDAR.consts.debug === true) {
			console.log(message);
		}
	},
};

})();