const Sequelize = require("sequelize");
const database = require("../../db/database");

const Movie = database.define(
  "movie",
  {
    id_movie: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    synopsis: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { database, modelname: "filme", tablename: "filmes" }
);

module.exports = Movie;