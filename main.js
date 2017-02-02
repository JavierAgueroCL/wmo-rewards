$(function(){
	var option = {
		speed : 6,
		duration : 2,
		stopImageNumber : -1,
		startCallback : function() {
			console.log('start');
		},
		slowDownCallback : function() {
			console.log('slowDown');
		},
		stopCallback : function($stopElm) {
			console.log('stop');
		}
	}
	$('div.roulette').roulette(option);	
	$('.cobrar').on('click', function(e) {
		e.preventDefault;
		$(this).parent().parent().find(".roulette").roulette('start')
		$(this).html("- - - - -");
		$(this).css("opacity","0.5");
		$(this).css("filter","grayscale(100%)");
		$(this).unbind();
		$(this).css('cursor','default');
	})
	
});