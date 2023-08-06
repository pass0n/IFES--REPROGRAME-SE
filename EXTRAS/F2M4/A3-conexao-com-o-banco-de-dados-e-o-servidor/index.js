//BIBLIOTECAS/MODULOS UTILIZADOS
const express = require("express");
const app = express();
const database = require("./db/db");

//SINCRONISMO COM O BANCO DE DADOS
try {
  database.sync().then(() => {
    app.listen(9443, () => {
      console.log('Servidor rodando')
    });
  })
} catch (erro) {
  console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro);
};