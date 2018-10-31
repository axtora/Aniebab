'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserNickname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      UserEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        },
        primaryKey: true
      },
      UserPassword: {
        type: Sequelize.STRING,
        allowNUll: false
      },
      Salt: {
        type: Sequelize.STRING,
        allowNUll: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};