$("#add-btn").on("click", function(event) {
  event.preventDefault();
  insertCharacter();
});
  
    
// This function inserts a new burger into our database and then updates the view
function insertCharacter(event) {
  console.log("knowlege: " + $("#knowledge").val().trim());

  var newCharacter = {
    name: $("#name").val().trim(),
    reputation: $("#reputation").val().trim(),
    knowlege: $("#knowledge").val().trim(),
    sanity: $("#sanity").val().trim()
  };   

  $.post("/api/create", newCharacter,  $(location).attr('href',"/game?name=" + newCharacter.name ));
}