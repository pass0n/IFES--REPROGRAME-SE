const express = require("express");
const session = require("express-session");
const body_parser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const port = 443;

app.use(session({
  secret: "20231rep26744"
}));

app.use(body_parser.urlencoded({
  extended: true
}));

const login = "admin";
const senha = "1234";

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "./"));

app.get("/", (req, res) => {
  if(req.session.login) {
    res.render("logado");
  } else {
    res.render("home");
  };
});

app.post("/", (req, res) => {
  if(req.body.password == senha && req.body.login == login) {
    req.session.login = login;
    res.render("logado");
    console.log("Usuário logado:", login)
  } else {
    res.render("home");
  };
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});