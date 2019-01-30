$("#add-btn").on("click", function(event) {
  event.preventDefault();
  insertCharacter();
});
  
    
// This function inserts a new burger into our database and then updates the view
function insertCharacter(event) {
  console.log("New Item Text"+ $("input.newBurgerTxt"));
  var newCharacter = {
    name: $("#name").val().trim(),
    reputation: $("#reputation").val().trim(),
    knowledge: $("#knowledge").val().trim(),
    sanity: $("#sanity").val().trim()
  };   
  console.log(newCharacter);

  $.post("/api/create", newCharacter,  $(location).attr('href',"/game?name=" + newCharacter.name ));
}