"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("superheroes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickname: {
        type: Sequelize.STRING(64),
        allowNull: false,
        unique: true,
      },
      real_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      origin_decription: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      superpowers: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      catch_phrase: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      images: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("superheroes");
  },
};
