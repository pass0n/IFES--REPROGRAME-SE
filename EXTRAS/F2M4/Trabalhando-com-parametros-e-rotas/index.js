const express = require("express");
const app = express();

const handlebars = require("express-handlebars");
const porta = 3000;

app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

const route = require("./routes/Route");
app.use(route);

app.listen(porta, () => {
  console.log("Exemplo de uso de rotas.");
});