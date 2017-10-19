'use strict';
module.exports = (sequelize, DataTypes) => {
  var LoginUser = sequelize.define('LoginUser', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return LoginUser;
};