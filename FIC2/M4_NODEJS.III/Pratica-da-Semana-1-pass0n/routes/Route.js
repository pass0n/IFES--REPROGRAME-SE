const express = require("express");
const router = express.Router();

let lista = []

router.get("/", (req, res) => {
  res.render("form", { quantidade: lista.length });
});

router.get("/all", (req, res) => {
  return res.json(lista);
});

router.post("/estado/cadastrar", (req, res) => {
  let nome = req.body.nome;
  lista.push(nome)
  return res.json([lista[(lista.length - 1)]]);
});

module.exports = router;