var reputation = 0;
var knowledge = 0;
var sanity = 0;



// ------------------------ Game Functions are below ------------------------
$(document).ready(function () {

	// Intialize the game with hidden Divs
	$("#mid_game_container").hide();
	$("#end_container").hide();
	$("#start_button").on("click", function () {

		// Hide the start Div from the user
		$("#start_container").hide();


		// Show the Game Div
		$("#mid_game_container").show();

		startCountdown();
		return;

	});	


	// Function to be run after the timer is up
	function checkAnswers() {

		// Checked values of Radio Buttons
		var Q1 = $('input:radio[name="Step1"]:checked').val();
		var Q2 = $('input:radio[name="Step2"]:checked').val();
		var Q3 = $('input:radio[name="Step3"]:checked').val();
		var Q4 = $('input:radio[name="Step4"]:checked').val();
		var Q5 = $('input:radio[name="Step5"]:checked').val();
		var Q6 = $('input:radio[name="Step6"]:checked').val();

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
		
		

		// After answers are validated, display the score results
		$('#reputation').html(reputation);
		$('#knowledge').html(knowledge);
		$('#sanity').html(sanity);


		// Show the completed Score Div
		$("#end_container").show();


		// Set Scroll position so it looks good
		window.scrollTo(0, 550);

	}

});