const prompt = require('prompt-sync')();

alturas = [];

// Implementar a entrada de dados
for (let i = 0; i <= 9; i++) {
  a = parseFloat(prompt(`Digite a altura do aluno ${i}: `));
  alturas.push(a);
}

// Implementar o processamento de dados
// Fazer for dentro de for
for (let int = 0; int < alturas.length; int++) {
  let count = 0
  for (let end = 0; end < alturas.length; end++) {
    if (alturas[end] < alturas[int])
      count++
  }
  // Implementar a saída de dados
  console.log(`Aluno ${int}: maior que ${count} aluno(s)`)
}