
module.exports = function(sequelize, DataTypes) {
  var Rating = sequelize.define('Rating', {
    rating: {
      type: DataTypes.ENUM('1','2','3','4','5'),
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    
  }, 
  {
    classMethods: {
      associate: function(models) {
        // not sure what associations yet
      }
    }
  });

  return Rating;
};