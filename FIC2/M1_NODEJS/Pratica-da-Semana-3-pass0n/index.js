const prompt = require("prompt-sync")();
const fs = require("fs");

async function novo_carro() {
  const placa = prompt("Digite a placa do carro: ");
  const nome = prompt("Digite o nome do carro: ");
  const montadora = prompt("Digite a montadora do carro: ");

  const novoCarro = {
    placa: placa,
    nome: nome,
    montadora: montadora,
  };

  try {
    const carros = await obter_carros();
    const ler_carros = JSON.parse(carros).carros;

    await cadastrar_carro(ler_carros, novoCarro);
    console.log("Carro adicionado com sucesso!!");

  } catch (err) {
    console.log(err);
  }
}

function cadastrar_carro(ler_carros, novoCarro) {
  ler_carros.push(novoCarro);
  const json = JSON.stringify({ carros: ler_carros })

  return new Promise((resolve, reject) => {
    fs.writeFile("./carros_bd.json", json, (err) => {
      if (err) {
        reject(err)
      }

      resolve()
    })
  })
}

function obter_carros() {
  return new Promise((resolve, reject) => {
    // fs.constants.F_OK: Verifica se o arquivo existe.
    // fs.constants.R_OK: Verifica se o arquivo é legível.
    // fs.constants.W_OK: Verifica se o arquivo é gravável.
    // fs.constants.X_OK: Verifica se o arquivo é executável.
    fs.access("./carros_bd.json", fs.constants.F_OK, (err) => {
      if (err) {
        fs.writeFile("./carros_bd.json", '{"carros": []}', (err) => {
          if (err) {
            reject(err);
          } else {
            resolve('{"carros": []}');
          }
        });
      } else {
        fs.readFile("./carros_bd.json", "utf-8", (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      }
    });
  });
}


async function listar_carros() {
  const carros = await obter_carros();
  const ler_carros = JSON.parse(carros).carros;
  console.table(ler_carros);
}


async function app() {
  let opcao;

  do {
    console.log("Sistema de cadastro de carros\n");

    console.log("1 - Listar carros");
    console.log("2 - Cadastrar novo carro");
    console.log("3 - Sair do sistema");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        await listar_carros();
        break;

      case "2":
        await novo_carro();
        break;

      case "3":
        console.log("Obrigado por usar nosso sistema. Volte sempre.");
        break;

      default:
        console.clear();
        console.log("Opção inválida. Tente novamente.");
        break;
    }

  } while (opcao !== "3");
}

app();