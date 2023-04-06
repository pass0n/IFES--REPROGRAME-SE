exports.formatar_data = function() {

const prompt = require("prompt-sync")();

const meses = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro"
]

let data = prompt("Insira uma data 'e.g DD/MM/AAAA': ");

const datasplit = data.split("/");

let dia = datasplit[0]
let mes = meses[datasplit[1] - 1]
let ano = datasplit[2]

console.log(`${dia} de ${mes} de ${ano}`);
};