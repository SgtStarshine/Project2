// ------------------------ Game Functions are below ------------------------
$(document).ready(function () {
	var url = window.location.search;
	if (url.indexOf("?name=") !== -1) {
		nameParam = url.split("=")[1];
	}
	var currentCharacter = {
		name: nameParam,
			reputation: 0,
			knowlege: 0,
			sanity: 0
		}; 

	// get the Character's Attributes from the database and display on the screen
	updatePlayerAttributesView();
	// hang events on the "next" buttons
	$("#next1").on("click", function () {
		handleQuestionSelection("question1");
	});
	$("#next2").on("click", function () {
		handleQuestionSelection("question2");
	});
	$("#next3").on("click", function () {
		handleQuestionSelection("question3");
	});
	$("#next4").on("click", function () {
		handleQuestionSelection("question4");
	});
	$("#next5").on("click", function () {
		handleQuestionSelection("question5");
	});
	$("#next6").on("click", function () {
		handleQuestionSelection("question6");
	});

	// Intialize the game with hidden Divs
	$("#question1").show();
	$("#question2").hide();
	$("#question3").hide();
	$("#question4").hide();
	$("#question5").hide();
	$("#question6").hide();

	function handleQuestionSelection(gameQuestion) {			
	//show/hide the correct questions 
		switch(gameQuestion) {
			case "question1":
				alert("question 1 clicked");

				currentCharacter.knowlege++;
				currentCharacter.sanity--;
				currentCharacter.power++;
				updateCharacter(currentCharacter.name, currentCharacter.knowlege, currentCharacter.sanity, currentCharacter.power)
				$("#question1").hide();
				$("#question2").show();
				$("#question3").hide();
				$("#question4").hide();
				$("#question5").hide();
				$("#question6").hide();
				break;
			case "question2":
				$("#question1").hide();
				$("#question2").hide();
				$("#question3").show();
				$("#question4").hide();
				$("#question5").hide();
				$("#question6").hide();
				break;
			case "question3":
				$("#question1").hide();
				$("#question2").hide();
				$("#question3").hide();
				$("#question4").show();
				$("#question5").hide();
				$("#question6").hide();
				break;
			case "question4":
				$("#question1").hide();
				$("#question2").hide();
				$("#question3").hide();
				$("#question4").hide();
				$("#question5").show();
				$("#question6").hide();
				break;
			case "question5":
				$("#question1").hide();
				$("#question2").hide();
				$("#question3").hide();
				$("#question4").hide();
				$("#question5").hide();
				$("#question6").show();
				break;
			case "question6":
				$("#question1").hide();
				$("#question2").hide();
				$("#question3").hide();
				$("#question4").hide();
				$("#question5").hide();
				$("#question6").show();
				break;
			default:
			//this should log an error **TODO**
			alert("Please select an answer before continuing.");
		}

	function updateCharacter(name, knowlege, sanity, power) {

		var updatedCharacter = {
			name: name,
			power: power,
			knowlege: knowlege,
			sanity: sanity
		};   

		updateCharacter.name = name;
		updateCharacter.power = power;
		updateCharacter.knowlege = knowlege;
		updateCharacter.sanity = sanity;

		$.ajax({
			method: "PUT",
			url: "/api/updateCharacter",
			data: updatedCharacter
		}).then(updatePlayerAttributesView());
	}
			// switch (Q1) {
			// 	case "option1":
			// 		console.log("Q1-O1 selected");
			// 		data[0].power--;
			// 		$("#question1").hide();
			// 		$("#question2").show();
			// 		break;
			// 	case "option2":
			// 		console.log("Q1-O2 selected");
			// 		data[0].power++;
			// 		data[0].knowledge++;
			// 		$("#question1").hide();
			// 		$("#question2").show();
			// 		break;
			// 	case "option3":
			// 		console.log("Q1-O3 selected");
			// 		data[0].power--;
			// 		data[0].sanity++;
			// 		$("#question1").hide();
			// 		$("#question2").show();
			// 		break;
			// 	default:
			// 		alert("Please select an answer before continuing.")
			// }

		return;
	}

	function updatePlayerAttributesView() {
		alert("updatePlayerAttributesView");

		$.get("/api/character/" + nameParam, function (data) {
			alert("data[0].name=" + data[0].name);
			$("#characterName").text(data[0].name);
			$("#characterPower").text(data[0].power);
			$("#characterKnowledge").text(data[0].knowlege);
			$("#characterSanity").text(data[0].sanity);

			currentCharacter.name = data[0].name;
			currentCharacter.power = data[0].power;
			currentCharacter.knowlege = data[0].knowlege;
			currentCharacter.sanity = data[0].sanity;
		})
		return;
	}

	// 	switch (Q2) {
	// 		case "option1":
	// 			console.log("Q2-O1 selected");
	// 			data[0].power--;
	// 			$("#question2").hide();
	// 			$("#question3").show();
	// 			break;
	// 		case "option2":
	// 			console.log("Q2-O1 selected");
	// 			data[0].power++;
	// 			data[0].knowledge++;
	// 			$("#question2").hide();
	// 			$("#question3").show();
	// 			break;
	// 		case "option3":
	// 			console.log("Q2-O1 selected");
	// 			data[0].power--;
	// 			data[0].sanity++;
	// 			$("#question2").hide();
	// 			$("#question3").show();
	// 			break;
	// 		default:
	// 			alert("Please select an answer before continuing.")

	// 	}
	// 	return;

	// });

	// 	var Q3 = $('input:radio[name="Step3"]:checked').val();

	// 	switch (Q3) {
	// 		case "option1":
	// 			console.log("Q3-O1 selected");
	// 			data[0].power--;
	// 			$("#question3").hide();
	// 			$("#question4").show();
	// 			break;
	// 		case "option2":
	// 			console.log("Q3-O1 selected");
	// 			data[0].power++;
	// 			data[0].knowledge++;
	// 			$("#question3").hide();
	// 			$("#question4").show();
	// 			break;
	// 		case "option3":
	// 			console.log("Q3-O1 selected");
	// 			data[0].power--;
	// 			data[0].sanity++;
	// 			$("#question3").hide();
	// 			$("#question4").show();
	// 			break;
	// 		default:
	// 			alert("Please select an answer before continuing.")

	// 	}
	// 	return;

	// });

	// 	var Q4 = $('input:radio[name="Step4"]:checked').val();

	// 	switch (Q4) {
	// 		case "option1":
	// 			console.log("Q4-O1 selected");
	// 			data[0].power--;
	// 			$("#question4").hide();
	// 			$("#question5").show();
	// 			break;
	// 		case "option2":
	// 			console.log("Q4-O1 selected");
	// 			data[0].power++;
	// 			data[0].knowledge++;
	// 			$("#question4").hide();
	// 			$("#question5").show();
	// 			break;
	// 		case "option3":
	// 			console.log("Q4-O1 selected");
	// 			data[0].power--;
	// 			data[0].sanity++;
	// 			$("#question4").hide();
	// 			$("#question5").show();
	// 			break;
	// 		default:
	// 			alert("Please select an answer before continuing.")

	// 	}
	// 	return;

	// });

	// 	var Q5 = $('input:radio[name="Step5"]:checked').val();

	// 	switch (Q5) {
	// 		case "option1":
	// 			data[0].power--;
	// 			$("#question5").hide();
	// 			$("#question6").show();
	// 			break;
	// 		case "option2":
	// 			data[0].power++;
	// 			data[0].knowledge++;
	// 			$("#question5").hide();
	// 			$("#question6").show();
	// 			break;
	// 		case "option3":
	// 			data[0].power--;
	// 			data[0].sanity++;
	// 			$("#question5").hide();
	// 			$("#question6").show();
	// 			break;
	// 		default:
	// 			alert("Please select an answer before continuing.")

	// 	}
	// 	return;

	// });

	// 	var Q6 = $('input:radio[name="Step6"]:checked').val();

	// 	switch (Q6) {
	// 		case "option1":
	// 			data[0].power--;
	// 			$("#question6").hide();
	// 			break;
	// 		case "option2":
	// 			data[0].power++;
	// 			data[0].knowledge++;
	// 			$("#question6").hide();
	// 			break;
	// 		case "option3":
	// 			data[0].power--;
	// 			data[0].sanity++;
	// 			$("#question6").hide();
	// 			break;
	// 		default:
	// 			alert("Please select an answer before continuing.")

	// 	}
	// 	endGame();
	// 	return;

	// });

	// Function to be run after the timer is up
	function endGame() {
		alert("end game");
		// Show the completed Score Div
		$("#end_container").show();

		// Set Scroll position so it looks good
		window.scrollTo(0, 550);
	}

});