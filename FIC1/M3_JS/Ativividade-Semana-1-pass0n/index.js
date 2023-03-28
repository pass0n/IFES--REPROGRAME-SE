const prompt = require("prompt-sync")();

// Leia os três números
var n1 = parseInt(prompt("Digite o primeiro número: "));
var n2 = parseInt(prompt("Digite o segundo número: "));
var n3 = parseInt(prompt("Digite o terceiro número: "));
// Calcule a soma e a média
var soma = n1 + n2 + n3
var media = soma/3
// Mostre na tela o valor da soma e média
console.log("A soma dos 3 números é: " + soma + "\nA média é: " + media);
