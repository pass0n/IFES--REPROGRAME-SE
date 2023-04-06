exports.rodizio_carros = function() {

const prompt = require("prompt-sync")();

let placa = prompt("Digite a placa do seu veículo 'e.g AAA-0000': ")

numFinalPlaca = placa[placa.length - 1];

const diaHoje = new Date();
// 0 = domingo, 6 = sábado
diaSemana = diaHoje.getDay()

if (diaSemana >= 1 && diaSemana <= 5) {
  switch (numFinalPlaca) {
    case "1":
    case "2":
      if(diaSemana === 1) {
        console.log("Veículo não pode circular hoje!")
      } else {
          console.log("Veículo pode circular hoje!")
        }
      break;
    case "3":
    case "4":
      if(diaSemana === 2) {
        console.log("Veículo não pode circular hoje!")
      } else {
          console.log("Veículo pode circular hoje!")
        }
      break;
    case "5":
    case "6":
      if(diaSemana === 3) {
        console.log("Veículo não pode circular hoje!")
      } else {
          console.log("Veículo pode circular hoje!")
        }
      break;
    case "7":
    case "8":
      if(diaSemana === 4) {
        console.log("Veículo não pode circular hoje!")
      } else {
          console.log("Veículo pode circular hoje!")
        }
      break;
    case "9":
    case "0":
      if(diaSemana === 5) {
        console.log("Veículo não pode circular hoje!")
      } else {
          console.log("Veículo pode circular hoje!")
        }
      break;
    default:
      console.log("Placa inserida é invalida!")
  }
} else {
  console.log("Fim de semana, está liberado!")
}
};