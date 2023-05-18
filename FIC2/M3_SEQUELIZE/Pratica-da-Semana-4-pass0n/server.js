const express = require("express");
const app = express();

const handlebars = require("express-handlebars");
const database = require("./db/database");
const routes = require("./app/routes/movie");

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "./app/views")

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(routes);

try {
  database.sync().then(() => {
    app.listen(9443, () => {
      console.log("Servidor rodando!");
    });
  });
} catch (err) {
  console.log(`Houve uma falha ao sincronizar com o banco de dados.\n erro: ${err}`);
}
