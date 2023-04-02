// Selecionar todos elementos da classe 'produto_preco'
let preco = document.getElementsByClassName ('produto_preco');

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
let result_final = 0
for (let i = 0; i < preco.length; i++) {
 result_final += parseFloat(preco[i].innerText)
}

// Escrever no conteúdo da página o valor da soma
document.write (`<h2>Soma total é de ${result_final}</h2><hr>`);
