const express = require("express");
const routes = express.Router();

let municipios = [
  {
    "cidade": "vitoria",
    "info": "Vitória: Capital do Espírito Santo"
  },
  {
    "cidade": "vilavelha",
    "info": "Vila Velha: Canela Verde"
  },
  {
    "cidade": "cachoeiro",
    "info": "Cachoeiro de Itapemirim: Princesa do Sul"
  },
  {
    "cidade": "colatina",
    "info": "Colatina: Princesa do Norte"
  }
];

routes.get("/", (req, res) => {
  res.json({Olá: "Seja bem-vindo!"});
});

routes.get("/:cidadeid", (req, res) => {
  const cidade = req.params.cidadeid;
  const cidadeinfo = municipios.find( i => i.cidade == cidade);

  if(!cidadeinfo) {
    res.status(404).json ({
      erro: "Cidade não foi encontrada", cidadepesquisada: cidade
    });
  } else {
    res.status(200). json(cidadeinfo);
  };
});

module.exports = routes;