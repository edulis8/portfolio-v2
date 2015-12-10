$(document).ready(function() {
	
	$('h1').animate({
		lineHeight: '44px'
	}, 1500);

	$('#aboutmelink').click(function() {

		hideAllButTargetDiv('#aboutmediv');

		
	});

	$('#karmalink').click(function() {
		hideAllButTargetDiv('#karmadiv');
		
	});

	$('#silentsonglink').click(function() {
		hideAllButTargetDiv('#silentsongdiv');
	
	});

	$('#streetfighterlink').click(function() {
		hideAllButTargetDiv('#streetfighterdiv');
	
	});

	$('#euclidlink').click(function() {
		hideAllButTargetDiv('#eucliddiv');
	
	});


	$('#shoppinglink').click(function() {
		hideAllButTargetDiv('#shoppingdiv');
		
	});

	$('#quizlink').click(function() {
		hideAllButTargetDiv('#quizdiv');
	
	});

	$('#rarefruitlink').click(function() {
		hideAllButTargetDiv('#rarefruitdiv');
	
	});

	$('#twittlerlink').click(function() {
		hideAllButTargetDiv('#twittlerdiv');
	
	});




	$('h1').click(function() {
		hideAllButTargetDiv('#home');

		});

	function hideAllButTargetDiv(targetDiv){
		$('#rarefruitdiv').hide();
		$('#quizdiv').hide();
		$('#karmadiv').hide();
		$('#silentsongdiv').hide();
		$('#streetfighterdiv').hide();
		$('#eucliddiv').hide();
		$('#home').hide();
		$('#shoppingdiv').hide();
		$('#aboutmediv').hide();
		$('#twittlerdiv').hide();

		$(targetDiv).fadeIn(500);
	}

});

