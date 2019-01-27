var reputation = 0;
var knowledge = 0;
var sanity = 0;



// ------------------------ Game Functions are below ------------------------
$(document).ready(function () {

	// Intialize the game with hidden Divs
	$("#step1").show();
	$("#step2").hide();
	$("#step3").hide();
	$("#step4").hide();
	$("#step5").hide();
	$("#step6").hide();
	
	$("#next1").on("click", function () {

		$("#step1").hide();
		$("#step2").show();
		
		var Q1 = $('input:radio[name="Step1"]:checked').val();
		
		switch (Q1) {
			case "option1":
				reputation--;
				break;
			case "option2":
				reputation++;
				knowledge++;
				break;
			case "option3":
				reputation--;
				sanity++;
				break;
			default:
				alert("Please select an answer before continuing.")

		}
		
		$('#reputation').html(reputation);
		$('#knowledge').html(knowledge);
		$('#sanity').html(sanity);
		return;

	});	

	$("#next6").on("click", function () {
		$("#step6").hide();
		endGame();
	});


	// Function to be run after the timer is up
	function endGame() {
		
		// Show the completed Score Div
		$("#end_container").show();


		// Set Scroll position so it looks good
		window.scrollTo(0, 550);

	}

});