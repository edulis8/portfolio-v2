$(document).ready(function() {
	
	$('h1').animate({
		lineHeight: '44px'
	}, 1500);

	$('#aboutmelink').click(function() {

		/* Act on the event */
		$('#karmadiv').hide();
		$('#silentsongdiv').hide();
		$('#streetfighterdiv').hide();
		$('#eucliddiv').hide();
		$('#home').hide();
		$('#shoppingdiv').hide();
		$('#aboutmediv').fadeIn(500);
	});

	$('#karmalink').click(function() {
		/* Act on the event */
		$('#aboutmediv').hide();
		$('#eucliddiv').hide();
		$('#streetfighterdiv').hide();
		$('#silentsongdiv').hide();
		$('#home').hide();
		$('#shoppingdiv').hide();
		$('#karmadiv').fadeIn(500);
	});

	$('#silentsonglink').click(function() {
		/* Act on the event */
		$('#aboutmediv').hide();
		$('#karmadiv').hide();
		$('#eucliddiv').hide();
		$('#streetfighterdiv').hide();
		$('#home').hide();
		$('#shoppingdiv').hide();
		$('#silentsongdiv').fadeIn(500);
	});

	$('#streetfighterlink').click(function() {
		/* Act on the event */
		$('#aboutmediv').hide();
		$('#karmadiv').hide();
		$('#silentsongdiv').hide();
		$('#eucliddiv').hide();
		$('#home').hide();
		$('#shoppingdiv').hide();
		$('#streetfighterdiv').fadeIn(500);
	});

	$('#euclidlink').click(function() {
		/* Act on the event */
		$('#aboutmediv').hide();
		$('#karmadiv').hide();
		$('#silentsongdiv').hide();
		$('#streetfighterdiv').hide();
		$('#home').hide();
		$('#shoppingdiv').hide();
		$('#eucliddiv').fadeIn(500);
	});


		$('#shoppinglink').click(function() {
		/* Act on the event */
		$('#aboutmediv').hide();
		$('#karmadiv').hide();
		$('#silentsongdiv').hide();
		$('#streetfighterdiv').hide();
		$('eucliddiv').hide();
		$('#home').hide();
		$('#shoppingdiv').fadeIn(500);
	});



	$('h1').click(function() {
		/* Act on the event */
		$('#aboutmediv').hide();
		$('#karmadiv').hide();
		$('#silentsongdiv').hide();
		$('#streetfighterdiv').hide();
		$('#eucliddiv').hide();
		$('#shoppingdiv').hide();
		$('#home').fadeIn(500);


		});

});

