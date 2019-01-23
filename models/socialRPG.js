// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var socialRPG = {
  all: function(cb) {
    orm.all("socialRPGs", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("socialRPGs", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("socialRPGs", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("socialRPGs", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (socialRPGsController.js).
module.exports = socialRPG;