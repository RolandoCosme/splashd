
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
        Bathroom.hasMany(models.Rating);
      }
    }
  });

  return Bathroom;
};