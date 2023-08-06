const express = require("express");
const app = express();
const cookie = require("cookie-parser");

const person = {
  nome: "Passon",
  idade: "22"
}

app.use(cookie());

app.get("/", (req, res) => {
  res.send("Seja bem-vindo a aula de teste de cookies.")
});

app.get("/cadastrarUsuario", (req, res) => {
  res.cookie("cookieName", person, {expire: 400000 + Date.now()});
  res.send("Cookie cadastrado com sucesso!")
});

app.get("/logout", (req, res) => {
  res.clearCookie("cookieName");
  res.send("Cookie destruido com sucesso!")
});

app.get("/usuarios", (req, res) => {
  res.send(req.cookies.cookieName)
});

app.listen(300, ()=> {
  console.log("Servidor online.")
})