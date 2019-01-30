module.exports = function(sequelize, DataTypes) {

console.log("In Character Model Code");
// Creates a "Character" model that matches up with DB
var Characters = sequelize.define("Characters", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 30]
    }
  }, 
  reputation: {
    type: DataTypes.INTEGER,
    defaultValue: false
  },
  knowledge: {
    type: DataTypes.INTEGER,
    defaultValue: false
  },
  sanity: {
    type: DataTypes.INTEGER,
    defaultValue: false
  } 
}, {
  // disable the modification of tablenames
  freezeTableName: true
});

// Syncs with DB
Characters.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Characters;
}