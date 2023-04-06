exports.ler_dados = function () {

const fs = require("fs");

fs.readFile("./dados_ficticios.json", "utf-8", (err, data) => {
  const dados = JSON.parse(data);

  console.log(dados);
});
};