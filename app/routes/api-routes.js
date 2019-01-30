// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../models/character.js");

// Routes
// =============================================================
module.exports = function(app) {  

  // If a user sends data to add a new character...
  app.post("/api/created", function(req, res) {
    // Take the request...
    var character = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = character.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    Character.create({
      routeName: routeName,
      name: character.name,
      reputation: character.reputation,
      knowledge: character.knowledge,      
      sanity: character.sanity
    });

    res.status(204).end();
  });
};
