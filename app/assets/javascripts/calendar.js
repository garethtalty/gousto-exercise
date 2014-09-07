window.CALENDAR = window.CALENDAR || {};

CALENDAR.consts = {
	debug:true
};

(function(){

	$(document).ready(function(){
		(function(){
			CALENDAR.lib.browserClass();
		})();
		function bindCheckboxes(){

			$('#calendar :checkbox').on("click", function(e){

				var $checkbox = $(this).closest("tr").find("input[type=checkbox]:checked");
				if ($checkbox.length == 2){
					if(CALENDAR.consts.debug){
						CALENDAR.lib.log("You can only have one delivery per week");
					}
					//uncheck checkboxes in this row (week)
					$others = $checkbox.closest("tr").find("input[type=checkbox]:checked");
					$others.prop('checked', false);
					$others.addClass("available").removeClass("on-hold");

					$(this).prop('checked', true);
				}
				else{
					if($(this).prop('checked') === false){
						$checkbox.removeClass("on-hold");
						$(this).prop('checked', false).addClass("on-hold").val(2);
					}
					else{
						$checkbox.prop('checked', true).val(1);
					}
				}
			});
		}

		function bindForm(){

			$('#calendar #subscription-form').on("submit", function(e){
				e.preventDefault();
				if(CALENDAR.consts.debug){
					CALENDAR.lib.log("Sending AJAX request to " + $(this).attr("action") + " with data :" + $(this).serialize());
				}
				var data = [];
				var $dates = $('#subscription-form input[type=checkbox][disabled!=disabled][value!=0]');
				$.each($dates, function(index){
					data.push({id: $dates[index].id, val: $dates[index].value});
				});
				if(CALENDAR.consts.debug){
					CALENDAR.lib.log(data);
				}
				$('#response').append("<p>HTTP POST SENT.");

				$.ajax({
					url:$(this).attr("action"),
					data: $(this).serialize(),
					type: "POST",
					complete: function(result){
						//TODO: provide a callback 
						CALENDAR.lib.log("AJAX function complete");
						CALENDAR.lib.log("ERROR STATUS:" +result.error);
						CALENDAR.lib.log("STATUS: " + result.status);
						$('#response').append("<p>HTTP RESPONSE:"+result.status+"</p>");
					}
				});

			});
		}

		function init(){
			bindCheckboxes();
			bindForm();
		}
		init();
	});
})();