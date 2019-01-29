// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Character = sequelize.define("Character", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 30]
    }
  }, 
  reputation: {
    type: Sequelize.INTEGER,
    defaultValue: false
  },
  knowledge: {
    type: Sequelize.INTEGER,
    defaultValue: false
  },
  sanity: {
    type: Sequelize.INTEGER,
    defaultValue: false
  } 
}, {
  // disable the modification of tablenames
  freezeTableName: true
});

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
