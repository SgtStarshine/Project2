$("#add-btn").on("click", function(event) {
    event.preventDefault();

    // make a newCharacter obj
    var newCharacter = {
      name: $("#name").val().trim(),
      reputation: $("#reputation").val().trim(),
      knowledge: $("#knowledge").val().trim(),
      sanity: $("#sanity").val().trim()
    };    
    console.log(newCharacter);

    // send an AJAX POST-request with jQuery
    $.post("/api/created", newCharacter)
      .then(function(data) {
        console.log("make request to game.html");
        $(location).attr('href',"/game");
      });   
  });
  