const express = require("express");
const session = require("express-session");
const body_parser = require("body-parser");
const path = require("path");
const fs = require("fs");
const routes = fs.readdirSync(__dirname + "/routes");

const app = express();
const port = 443;

app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(body_parser.json());

app.use("/static", express.static(path.join(__dirname, "static")));

app.use(session({
  secret: "20231rep26744"
}));

app.use(body_parser.urlencoded({
  extended: true
}));

routes.forEach(rotasArquivos => {
  const rotas = require(`./routes/${rotasArquivos}`);
  app.use(rotas);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
