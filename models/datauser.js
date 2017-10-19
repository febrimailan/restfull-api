'use strict';
module.exports = (sequelize, DataTypes) => {
  var DataUser = sequelize.define('DataUser', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return DataUser;
};