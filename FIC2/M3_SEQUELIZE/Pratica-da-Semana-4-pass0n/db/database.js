const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db/filmes.sqlite"
});

try {
    sequelize.authenticate();
    console.log("Banco de dados conectado com sucesso")
} catch (err) {
    console.log("Erro ao conectar ao banco de dados", message.err)
}

module.exports = sequelize;