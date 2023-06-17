const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/livraria.sqlite",
});

try {
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso!");
} catch (err) {
  console.error("Erro ao conectador ao banco de dados", err);
};

module.exports = sequelize;
