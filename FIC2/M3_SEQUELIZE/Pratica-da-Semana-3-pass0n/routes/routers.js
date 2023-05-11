const express = require("express");
const router = express.Router();

const Cliente = require("../models/cliente");
const Fornecedor = require("../models/fornecedor");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/cadcliente", (req, res) => {
  res.render("formCliente");
});

router.post("/addcliente", (req, res) => {
  Cliente.create({
    nome: req.body.nome,
    nascimento: req.body.nascimento,
    cidade: req.body.cidade,
    telefone: req.body.telefone
  }).then(() => {
    res.send("Cliente cadastrado com sucesso!")
  });
});

router.get("/cadfornecedor", (req, res) => {
  res.render("formFornecedor");
});

router.post("/addfornecedor", (req, res) => {
  Fornecedor.create({
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email
  }).then(() => {
    res.send("Fornecedor cadastrado com sucesso!")
  });
});

module.exports = router