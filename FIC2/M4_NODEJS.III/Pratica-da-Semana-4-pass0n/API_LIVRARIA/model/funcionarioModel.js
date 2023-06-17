const Sequelize = require("sequelize");
const db = require("../database/sqlite");

const Funcionario = db.define(
  "funcionario",
  {
    id_funcionario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { db, modelname: "funcionario", tableName: "funcionarios" }
);

module.exports = Funcionario;
