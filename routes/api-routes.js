// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var db = require("../models");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {  

  app.get("/api/character", function(req, res) {
    console.log("Get character Attributes");
  db.Characters.findAll({}).then(function(dbCharacter) {
    res.json(dbCharacter);
  });
});


  // POST route for saving a new character
  app.post("/api/created", function(req, res) {
    db.Characters.create({
      name: req.body.name,
      power: req.body.reputation,
      knowlege: req.body.knowlege,
      sanity: req.body.sanity
    }).then(function(dbCharacter) {
      res.json(dbCharacter);
    })
      .catch(function(err) {
        console.log("DB Error on Insert");
        res.json(err);
      });
  });


  // PUT route for updating burgers. We can get the updated burger data from req.body
  app.put("/api/update", function(req, res) {
    console.log("Update Character");
    db.Characters.update({
      reputation: req.body.complete,
      knowledge: req.body.knowledge,
      sanity: req.body.sanity
    }, {
      where: {
        name: req.name
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    })
      .catch(function(err) {
        res.json(err);
      });
  });
};
