const express = require("express");
const app = express();

const route = require("./routes/Route");
const handlebars = require("express-handlebars");
const porta = 3000;

app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.use(route);

app.listen(porta, () => {
  console.log("Servidor rodando.");
});