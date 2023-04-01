const prompt = require('prompt-sync')();
var array_foices = [];

do {
  console.log("Sistema de Cadastro de Foices");
  console.log("1 - Inserir Foice");
  console.log("2 - Excluir Foices");
  console.log("3 - Listar Foices");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Foice...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let cabo = prompt("Digite o tipo de cabo: ");
    let lamina = prompt("Digite o tipo de lamina: ");
    let tamanho = parseFloat(prompt("Digite o tamanho: "));
    let preco = parseFloat(prompt("Digite o preço: "));

    // Neste trecho estamos declarando um objeto
    const foice = {
      codigo: codigo,
      cabo: cabo,
      lamina: lamina,
      tamanho: tamanho,
      preco: preco
    }
    // Chamar a função inserir
    inserir_foice (foice);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Foice...\n");
    let codigo = prompt("Digite o código da foice: ");
    // Chamar a função excluir
    excluir_foice (codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando Foices...\n");
    // Chamar a função listar
    listar_foices ();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_foice(foice) {
  // Implementar corpo da função
  array_foices.push(foice);
}

function excluir_foice(codigo) {
  // Implementar corpo da função
  let del = false;
  for (let i = 0; i < array_foices.length; i++) {
    if (array_foices[i]['codigo'] == codigo) {
      array_foices.splice(i, 1);
      del = true
    }
  }
}

function listar_foices() {
  // Implementar corpo da função
  for (let i = 0; i < array_foices.length; i++) {
    console.log(`${array_foices[i]['codigo']}: ${array_foices[i]['cabo']} - ${array_foices[i]['lamina']} - ${array_foices[i]['tamanho']} - ${array_foices[i]['preco']}`)}
}


