// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../../models/character.js");
// var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {  

  app.get("/api/character", function(req, res) {
    console.log("Get character Attributes");
  db.Character.findAll({}).then(function(dbCharacter) {
    res.json(dbCharacter);
  });
});

  // POST route for saving a new character
  app.post("/api/created", function(req, res) {
    db.Character.create({
      name: req.body.name,
      reputation: req.body.complete,
      knowledge: req.body.knowledge,
      sanity: req.body.sanity
    }).then(function(dbCharacter) {
      res.json(dbCharacter);
    })
      .catch(function(err) {
        res.json(err);
      });
  });

  // // If a user sends data to add a new character...
  // app.post("/api/created", function(req, res) {
  //   // Take the request...
  //   var character = req.body;
  //   console.log("name=" + character.name);
  //   console.log("name=" + character.reputation);
  //   console.log("name=" + character.knowledge);
  //   console.log("name=" + character.sanity);

  //   // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

    // Then add the character to the database using sequelize
    // Character.create({
    //   name: character.name,
    //   reputation: character.reputation,
    //   knowledge: character.knowledge,      
    //   sanity: character.sanity
    // });

  //   res.status(204).end();
  // });
};
