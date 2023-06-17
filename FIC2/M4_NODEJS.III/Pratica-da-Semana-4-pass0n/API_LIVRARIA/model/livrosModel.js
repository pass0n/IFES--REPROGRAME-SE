const Sequelize = require("sequelize");
const db = require("../database/sqlite");

const Livros = db.define(
  "livro",
  {
    id_livro: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    autor: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    preco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { db, modelname: "livro", tableName: "livros" }
);

module.exports = Livros;
