
module.exports = function(sequelize, DataTypes) {
  var Bathroom = sequelize.define('Bathroom', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    
  }, 
  {
    classMethods: {
      associate: function(models) {
        // not sure what associations yet
      }
    }
  });

  return Bathroom;
};