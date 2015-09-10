$(document).ready(function() {
	
	$('h1').animate({
		lineHeight: '44px'
	}, 1500);

	$('#aboutmelink').click(function() {

		/* Act on the event */

		$('#aboutmediv').fadeIn(500);
	});

	$('#karmalink').click(function() {
		/* Act on the event */
		$('#aboutmediv').hide();
		$('#karmadiv').fadeIn(500);
	});

	$('#silentsonglink').click(function() {
		/* Act on the event */
		$('#aboutmediv').hide();
		$('#karmadiv').hide();
		$('#silentsongdiv').fadeIn(500);
	});

	$('#streetfighterlink').click(function() {
		/* Act on the event */
		$('#aboutmediv').hide();
		$('#karmadiv').hide();
		$('#silentsongdiv').hide();
		$('#streetfighterdiv').fadeIn(500);
	});

});

