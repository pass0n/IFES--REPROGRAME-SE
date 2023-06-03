const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./cliente.sqlite"
});

try {
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso!");
} catch (err) {
  console.error("Erro ao conectar ao banco", err);
}

module.exports = sequelize;