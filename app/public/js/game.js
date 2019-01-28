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
		var Q1 = $('input:radio[name="Step1"]:checked').val();

		switch (Q1) {
			case "option1":
				reputation--;
				$("#step1").hide();
				$("#step2").show();
				break;
			case "option2":
				reputation++;
				knowledge++;
				$("#step1").hide();
				$("#step2").show();
				break;
			case "option3":
				reputation--;
				sanity++;
				$("#step1").hide();
				$("#step2").show();
				break;
			default:
				alert("Please select an answer before continuing.")

		}

		// Display increment/decrement results
		$('#reputation').html(reputation);
		$('#knowledge').html(knowledge);
		$('#sanity').html(sanity);
		return;

	});

	$("#next2").on("click", function () {

		var Q2 = $('input:radio[name="Step2"]:checked').val();

		switch (Q2) {
			case "option1":
				reputation--;
				$("#step2").hide();
		$("#step3").show();
				break;
			case "option2":
				reputation++;
				knowledge++;
				$("#step2").hide();
		$("#step3").show();
				break;
			case "option3":
				reputation--;
				sanity++;
				$("#step2").hide();
		$("#step3").show();
				break;
			default:
				alert("Please select an answer before continuing.")

		}

		// Display increment/decrement results
		$('#reputation').html(reputation);
		$('#knowledge').html(knowledge);
		$('#sanity').html(sanity);
		return;

	});

	$("#next3").on("click", function () {

		$("#step3").hide();
		$("#step4").show();

		var Q3 = $('input:radio[name="Step3"]:checked').val();

		switch (Q3) {
			case "option1":
				reputation--;
				$("#step3").hide();
		$("#step4").show();
				break;
			case "option2":
				reputation++;
				knowledge++;
				$("#step3").hide();
		$("#step4").show();
				break;
			case "option3":
				reputation--;
				sanity++;
				$("#step3").hide();
		$("#step4").show();
				break;
			default:
				alert("Please select an answer before continuing.")

		}

		// Display increment/decrement results
		$('#reputation').html(reputation);
		$('#knowledge').html(knowledge);
		$('#sanity').html(sanity);
		return;

	});

	$("#next4").on("click", function () {

		$("#step4").hide();
		$("#step5").show();

		var Q4 = $('input:radio[name="Step4"]:checked').val();

		switch (Q4) {
			case "option1":
				reputation--;
				$("#step4").hide();
		$("#step5").show();
				break;
			case "option2":
				reputation++;
				knowledge++;
				$("#step4").hide();
		$("#step5").show();
				break;
			case "option3":
				reputation--;
				sanity++;
				$("#step4").hide();
		$("#step5").show();
				break;
			default:
				alert("Please select an answer before continuing.")

		}

		// Display increment/decrement results
		$('#reputation').html(reputation);
		$('#knowledge').html(knowledge);
		$('#sanity').html(sanity);
		return;

	});

	$("#next5").on("click", function () {

		$("#step5").hide();
		$("#step6").show();

		var Q5 = $('input:radio[name="Step5"]:checked').val();

		switch (Q5) {
			case "option1":
				reputation--;
				$("#step5").hide();
		$("#step6").show();
				break;
			case "option2":
				reputation++;
				knowledge++;
				$("#step5").hide();
		$("#step6").show();
				break;
			case "option3":
				reputation--;
				sanity++;
				$("#step5").hide();
		$("#step6").show();
				break;
			default:
				alert("Please select an answer before continuing.")

		}

		// Display increment/decrement results
		$('#reputation').html(reputation);
		$('#knowledge').html(knowledge);
		$('#sanity').html(sanity);
		return;

	});

	$("#next6").on("click", function () {

		$("#step6").hide();

		var Q6 = $('input:radio[name="Step6"]:checked').val();

		switch (Q6) {
			case "option1":
				reputation--;
				$("#step6").hide();
				break;
			case "option2":
				reputation++;
				knowledge++;
				$("#step6").hide();
				break;
			case "option3":
				reputation--;
				sanity++;
				$("#step6").hide();
				break;
			default:
				alert("Please select an answer before continuing.")

		}

		// Display increment/decrement results
		$('#reputation').html(reputation);
		$('#knowledge').html(knowledge);
		$('#sanity').html(sanity);
		endGame();
		return;

	});

	// Function to be run after the timer is up
	function endGame() {

		// Show the completed Score Div
		$("#end_container").show();


		// Set Scroll position so it looks good
		window.scrollTo(0, 550);

	}

});