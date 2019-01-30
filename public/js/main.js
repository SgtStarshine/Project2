$("#add-btn").on("click", function(event) {
    event.preventDefault();

    // make a newCharacter obj
    var newCharacter = {
      // name from name input
      name: $("#name").val().trim(),
      // reputation from reputation input
      reputation: $("#reputation").val().trim(),
      // knowledge from knowledge input
      knowledge: $("#knowledge").val().trim(),
      // points from sanity input
      sanity: $("#sanity").val().trim()
      
    };    

    // send an AJAX POST-request with jQuery
    $.post("/api/created", newCharacter)

      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're creating a character with an alert window
        alert("Creating character...");
      });  
    
  });
  