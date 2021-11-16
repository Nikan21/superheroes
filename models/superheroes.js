"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superheroes extends Model {
    static associate(models) {}
  }
  superheroes.init(
    {
      nickname: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        validate: {
          le: [3, 64],
          notEmpty: true,
        },
      },
      real_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {},
      },
      origin_decription: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {},
      },
      superpowers: { type: DataTypes.STRING, allowNull: false, validate: {} },
      catch_phrase: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {},
      },
      images: { type: DataTypes.STRING, allowNull: false, validate: {} },
    },
    {
      sequelize,
      modelName: "Superheroes",
      tavleName: "superheroes",
      underscored: true,
    }
  );
  return superheroes;
};
