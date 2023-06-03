const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes/router")
const database = require("./database/db");

try {
  database.sync().then(() => {
  })
} catch (err) {
  console.error("Houve uma falha ao sincronizar com o banco de dados. ", err);
};
app.use(router)
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000.")
});