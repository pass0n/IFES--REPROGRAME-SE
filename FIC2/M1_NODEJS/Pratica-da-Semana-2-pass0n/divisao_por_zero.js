exports.divisao_por_zero = function() {

  const prompt = require("prompt-sync")();

  let num1 = prompt("Digite o primeiro número: ");
  let num2 = prompt("Digite o segundo número: ");
  let divisao = num1 / num2;

  try {
    if (num2 == 0) {
      throw new Error("Divisão por zero.");
    }
    console.log(`Resultado da divisão é: ${divisao}`);
  } catch (err) {
    console.log(err.message);
  }
};