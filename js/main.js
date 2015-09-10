$(document).ready(function() {
	
	$('h1').animate({
		lineHeight: '44px'
	}, 1500);

	$('#aboutmelink').click(function() {
		/* Act on the event */
		$('#aboutmediv').fadeIn(500);
	});

});

