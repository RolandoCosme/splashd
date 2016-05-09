var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true  
      }
    },
  }, {
    hooks: {
      beforeCreate: function(input){
        input.password = bcrypt.hashSync(input.password, 10);
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // not sure what associations yet
      }
    }
  });

  return User;
};
