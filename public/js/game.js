// ------------------------ Game Functions are below ------------------------
$(document).ready(function () {
	var url = window.location.search;

	if (url.indexOf("?name=") !== -1) {
		nameParam = url.split("=")[1];
	}


		$.get("/api/character/" + nameParam, function (data) {
			console.log("data[0].name=" + data[0].name);

			console.log("nameParam=" + nameParam);
			// append the character name
			$("#well-section").append("<h3>Name: " + data[0].name + "</h3>");
			// append data[0].power
			$("#well-section").append("<h3>power: " + data[0].power + "</h3>");
			// append data[0].knowledge
			$("#well-section").append("<h3>Knowledge: " + data[0].knowlege + "</h3>");
			// append data[0].sanit
			$("#well-section").append("<h3>Sanity: " + data[0].sanity + "</h3>");
		});

		// Intialize the game with hidden Divs
	$("#step1").show();
	$("#step2").hide();
	$("#step3").hide();
	$("#step4").hide();
	$("#step5").hide();
	$("#step6").hide();

	$("#next1").on("click", function () {
		$.get("/api/created" , function (data) {
			// append the character name
			$("#well-section").append("<h3>" + data[0].name + "</h3>");
			// append data[0].power
			$("#well-section").append("<h3>power: " + data[0].power + "</h3>");
			// append data[0].knowledge
			$("#well-section").append("<h3>Knowledge: " + data[0].knowledge + "</h3>");
			// append data[0].sanity
			$("#well-section").append("<h3>Sanity: " + data[0].sanity + "</h3>");
		});

		var Q1 = $('input:radio[name="Step1"]:checked').val();

		switch (Q1) {
			case "option1":
				console.log("Q1-O1 selected");
				data[0].power--;
				$("#step1").hide();
				$("#step2").show();
				break;
			case "option2":
				console.log("Q1-O2 selected");
				data[0].power++;
				data[0].knowledge++;
				$("#step1").hide();
				$("#step2").show();
				break;
			case "option3":
				console.log("Q1-O3 selected");
				data[0].power--;
				data[0].sanity++;
				$("#step1").hide();
				$("#step2").show();
				break;
			default:
				alert("Please select an answer before continuing.")

		}
		return;

	});

	$("#next2").on("click", function () {
		$.get("/api/created", function (data) {
			// append the character name
			$("#well-section").append("<h3>" + data[0].name + "</h3>");
			// append data[0].power
			$("#well-section").append("<h3>power: " + data[0].power + "</h3>");
			// append data[0].knowledge
			$("#well-section").append("<h3>Knowledge: " + data[0].knowledge + "</h3>");
			// append data[0].sanity
			$("#well-section").append("<h3>Sanity: " + data[0].sanity + "</h3>");
		});

		var Q2 = $('input:radio[name="Step2"]:checked').val();

		switch (Q2) {
			case "option1":
				console.log("Q2-O1 selected");
				data[0].power--;
				$("#step2").hide();
				$("#step3").show();
				break;
			case "option2":
				console.log("Q2-O1 selected");
				data[0].power++;
				data[0].knowledge++;
				$("#step2").hide();
				$("#step3").show();
				break;
			case "option3":
				console.log("Q2-O1 selected");
				data[0].power--;
				data[0].sanity++;
				$("#step2").hide();
				$("#step3").show();
				break;
			default:
				alert("Please select an answer before continuing.")

		}
		return;

	});

	$("#next3").on("click", function () {
		$.get("/api/created", function (data) {
			// append the character name
			$("#well-section").append("<h3>" + data[0].name + "</h3>");
			// append data[0].power
			$("#well-section").append("<h3>power: " + data[0].power + "</h3>");
			// append data[0].knowledge
			$("#well-section").append("<h3>Knowledge: " + data[0].knowledge + "</h3>");
			// append data[0].sanity
			$("#well-section").append("<h3>Sanity: " + data[0].sanity + "</h3>");
		});

		var Q3 = $('input:radio[name="Step3"]:checked').val();

		switch (Q3) {
			case "option1":
				console.log("Q3-O1 selected");
				data[0].power--;
				$("#step3").hide();
				$("#step4").show();
				break;
			case "option2":
				console.log("Q3-O1 selected");
				data[0].power++;
				data[0].knowledge++;
				$("#step3").hide();
				$("#step4").show();
				break;
			case "option3":
				console.log("Q3-O1 selected");
				data[0].power--;
				data[0].sanity++;
				$("#step3").hide();
				$("#step4").show();
				break;
			default:
				alert("Please select an answer before continuing.")

		}
		return;

	});

	$("#next4").on("click", function () {
		$.get("/api/created", function (data) {
			// append the character name
			$("#well-section").append("<h3>" + data[0].name + "</h3>");
			// append data[0].power
			$("#well-section").append("<h3>power: " + data[0].power + "</h3>");
			// append data[0].knowledge
			$("#well-section").append("<h3>Knowledge: " + data[0].knowledge + "</h3>");
			// append data[0].sanity
			$("#well-section").append("<h3>Sanity: " + data[0].sanity + "</h3>");
		});

		var Q4 = $('input:radio[name="Step4"]:checked').val();

		switch (Q4) {
			case "option1":
				console.log("Q4-O1 selected");
				data[0].power--;
				$("#step4").hide();
				$("#step5").show();
				break;
			case "option2":
				console.log("Q4-O1 selected");
				data[0].power++;
				data[0].knowledge++;
				$("#step4").hide();
				$("#step5").show();
				break;
			case "option3":
				console.log("Q4-O1 selected");
				data[0].power--;
				data[0].sanity++;
				$("#step4").hide();
				$("#step5").show();
				break;
			default:
				alert("Please select an answer before continuing.")

		}
		return;

	});

	$("#next5").on("click", function () {
		$.get("/api/created", function (data) {
			// append the character name
			$("#well-section").append("<h3>" + data[0].name + "</h3>");
			// append data[0].power
			$("#well-section").append("<h3>power: " + data[0].power + "</h3>");
			// append data[0].knowledge
			$("#well-section").append("<h3>Knowledge: " + data[0].knowledge + "</h3>");
			// append data[0].sanity
			$("#well-section").append("<h3>Sanity: " + data[0].sanity + "</h3>");
		});

		var Q5 = $('input:radio[name="Step5"]:checked').val();

		switch (Q5) {
			case "option1":
				data[0].power--;
				$("#step5").hide();
				$("#step6").show();
				break;
			case "option2":
				data[0].power++;
				data[0].knowledge++;
				$("#step5").hide();
				$("#step6").show();
				break;
			case "option3":
				data[0].power--;
				data[0].sanity++;
				$("#step5").hide();
				$("#step6").show();
				break;
			default:
				alert("Please select an answer before continuing.")

		}
		return;

	});

	$("#next6").on("click", function () {
		$.get("/api/created", function (data) {
			// append the character name
			$("#well-section").append("<h3>" + data[0].name + "</h3>");
			// append data[0].power
			$("#well-section").append("<h3>power: " + data[0].power + "</h3>");
			// append data[0].knowledge
			$("#well-section").append("<h3>Knowledge: " + data[0].knowledge + "</h3>");
			// append data[0].sanity
			$("#well-section").append("<h3>Sanity: " + data[0].sanity + "</h3>");
		});

		var Q6 = $('input:radio[name="Step6"]:checked').val();

		switch (Q6) {
			case "option1":
				data[0].power--;
				$("#step6").hide();
				break;
			case "option2":
				data[0].power++;
				data[0].knowledge++;
				$("#step6").hide();
				break;
			case "option3":
				data[0].power--;
				data[0].sanity++;
				$("#step6").hide();
				break;
			default:
				alert("Please select an answer before continuing.")

		}
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