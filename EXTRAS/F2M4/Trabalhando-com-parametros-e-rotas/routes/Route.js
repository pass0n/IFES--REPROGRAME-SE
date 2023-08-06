const express = require("express");
const router = express.Router();

const cidades = ["Mimoso", "Cachoeiro", "Serra"];

router.get("/", (req, res) => {
  res.send("Seja bem vindo a aula de rotas");
});

router.get("/par", (req, res) => {
let nome = req.query['nome'];
if(nome){
  res.send(`<h1> ${nome} </h1>`);
} else {
    res.send("Não foi localizado nenhum valor no navegador.");
  };
});

router.get("/cidades", (req, res) => {
  res.render("form");
});

router.get("/cidades/:id", (req, res) => {
  let id = req.params.id;
  return res.json([cidades[id]]);
});

router.post("/cidades/cadastrar", (req, res) => {
  let nome = req.body.nome;
  cidades[(cidades.length)] = nome;
  return res.json([cidades[(cidades.length - 1)]]);
});

router.get("/clientes/:nome/:sobrenome?", (req, res) => {
  res.send(`Seja Bem Vindo <h1>${req.params.nome} ${req.params.sobrenome}</h1>`);
});

router.post("/clientes", (req, res) => {
  res.send("Inserir um cliente");
});

module.exports = router;