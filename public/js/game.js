// ------------------------ Game Functions are below ------------------------
$(document).ready(function () {
	var url = window.location.search;

	//get character data 
	//Which character are we dealing with? Pull the name off of the QS.  This should be by ID **TODO**
	if (url.indexOf("?name=") !== -1) {
		nameParam = url.split("=")[1];
	}

	// get the Character's Attributes from the database and display on the screen
	$.get("/api/character/" + nameParam, function (data) {
		updatePlayerAttributes(data);
		// hang events on the "next" buttons
		$("#next1").on("click", function () {
			handleQuestionSelection("question1", data);
		});
		$("#next2").on("click", function () {
			handleQuestionSelection("question2", data);
		});
		$("#next3").on("click", function () {
			handleQuestionSelection("question3", data);
		});
		$("#next4").on("click", function () {
			handleQuestionSelection("question4", data);
		});
		$("#next5").on("click", function () {
			handleQuestionSelection("question5", data);
		});
		$("#next6").on("click", function () {
			handleQuestionSelection("question6", data);
		});
	});


	// Intialize the game with hidden Divs
	$("#question1").show();
	$("#question2").hide();
	$("#question3").hide();
	$("#question4").hide();
	$("#question5").hide();
	$("#question6").hide();

		function handleQuestionSelection(gameQuestion, characterData) {

			//call the "get character API" 
				updatePlayerAttributes(characterData);
	
				//var Q1 = $('input:radio[name="Step1"]:checked').val();
				
				//show/hide the correct questions 
				switch(gameQuestion) {
					case "question1":
						alert(gameQuestion);
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

	function updatePlayerAttributes(characterData) {
		// append the character name
		console.log("character name=" + characterData[0].name);
		$("#characterName").text(characterData[0].name);
		$("#characterPower").text(characterData[0].power);
		$("#characterKnowledge").text(characterData[0].knowledge);
		$("#characterSanity").text(characterData[0].sanity);
	}

	// $("#next2").on("click", function () {
	// 	$.get("/api/created", function (data) {
	// 		// append the character name
	// 		$("#well-section").append("<h3>" + data[0].name + "</h3>");
	// 		// append data[0].power
	// 		$("#well-section").append("<h3>power: " + data[0].power + "</h3>");
	// 		// append data[0].knowledge
	// 		$("#well-section").append("<h3>Knowledge: " + data[0].knowledge + "</h3>");
	// 		// append data[0].sanity
	// 		$("#well-section").append("<h3>Sanity: " + data[0].sanity + "</h3>");
	// 	});

	// 	var Q2 = $('input:radio[name="Step2"]:checked').val();

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

	// $("#next3").on("click", function () {
	// 	$.get("/api/created", function (data) {
	// 		// append the character name
	// 		$("#well-section").append("<h3>" + data[0].name + "</h3>");
	// 		// append data[0].power
	// 		$("#well-section").append("<h3>power: " + data[0].power + "</h3>");
	// 		// append data[0].knowledge
	// 		$("#well-section").append("<h3>Knowledge: " + data[0].knowledge + "</h3>");
	// 		// append data[0].sanity
	// 		$("#well-section").append("<h3>Sanity: " + data[0].sanity + "</h3>");
	// 	});

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

	// $("#next4").on("click", function () {
	// 	$.get("/api/created", function (data) {
	// 		// append the character name
	// 		$("#well-section").append("<h3>" + data[0].name + "</h3>");
	// 		// append data[0].power
	// 		$("#well-section").append("<h3>power: " + data[0].power + "</h3>");
	// 		// append data[0].knowledge
	// 		$("#well-section").append("<h3>Knowledge: " + data[0].knowledge + "</h3>");
	// 		// append data[0].sanity
	// 		$("#well-section").append("<h3>Sanity: " + data[0].sanity + "</h3>");
	// 	});

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

	// $("#next5").on("click", function () {
	// 	$.get("/api/created", function (data) {
	// 		// append the character name
	// 		$("#well-section").append("<h3>" + data[0].name + "</h3>");
	// 		// append data[0].power
	// 		$("#well-section").append("<h3>power: " + data[0].power + "</h3>");
	// 		// append data[0].knowledge
	// 		$("#well-section").append("<h3>Knowledge: " + data[0].knowledge + "</h3>");
	// 		// append data[0].sanity
	// 		$("#well-section").append("<h3>Sanity: " + data[0].sanity + "</h3>");
	// 	});

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

	// $("#next6").on("click", function () {
	// 	$.get("/api/created", function (data) {
	// 		// append the character name
	// 		$("#well-section").append("<h3>" + data[0].name + "</h3>");
	// 		// append data[0].power
	// 		$("#well-section").append("<h3>power: " + data[0].power + "</h3>");
	// 		// append data[0].knowledge
	// 		$("#well-section").append("<h3>Knowledge: " + data[0].knowledge + "</h3>");
	// 		// append data[0].sanity
	// 		$("#well-section").append("<h3>Sanity: " + data[0].sanity + "</h3>");
	// 	});

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

		// Show the completed Score Div
		$("#end_container").show();

		// Set Scroll position so it looks good
		window.scrollTo(0, 550);
	}

});