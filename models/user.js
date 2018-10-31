'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    UserNickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      primaryKey: true
    },
    UserPassword: {
      type: DataTypes.STRING,
      allowNUll: false
    },
    Salt: {
      type: DataTypes.STRING,
      allowNUll: false
    }
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};