const {Sequelize, Model, DataTypes} = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db_empresa.sqlite"
});

(async () => {
  await sequelize.sync({
    force: true
  });
})();