const prompt = require("prompt-sync")();
const axios = require("./api");

// some > https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
async function checar_id(id) {
  const resposta = await axios.api.get("/tarefas");
  const tarefas = resposta.data;
  return tarefas.some(tarefas => tarefas.id === id);
}

async function cadastrar_tarefa() {

  const id = prompt("Digite o identificador da tarefa: ");
  const descricao = prompt("Digite a descrição da tarefa: ");

  const duplicado = await checar_id(id);
  if (duplicado) {
    console.log(`Já existe uma tarefa com o ID: ${id}.`);
    return;
  }

  try {
    const novaTarefa = {
      id: id,
      descricao: descricao,
      status: "Pendente"
    };
    await axios.api.post("/tarefas", novaTarefa);
    console.log(`Tarefa com ID: ${id}, cadastrada com sucesso.`);
  } catch (err) {
    console.log("Ocorreu um erro no cadastramento, Por favor, tente novamente.");
  }
}

// object assign > https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
async function alterar_tarefa() {

  const id = prompt("Digite o identificador da tarefa: ");
  const descricao = prompt("Digite a nova descrição da tarefa: ");

  /*try {
      const respota = await axios.api.get(`/tarefas/${id}`);
      const tarefa = respota.data;

      const atualizar = Object.assign(tarefa, { descricao });

      await axios.api.put(`/tarefas/${id}`, atualizar);
      console.log("A tarefa foi alterada com sucesso.");

  }*/
  // método atualizado para patch
  try {
    await axios.api.patch(`/tarefas/${id}`, { descricao });
    console.log("A tarefa foi alterada com sucesso.");
  } catch (err) {
    console.log(`Não foi possível encontrar uma tarefa com o ID: ${id}. Por favor, insira um ID válido e tente novamente.`);
  }
}

async function marcar_concluida() {

  const id = prompt("Digite o identificador da tarefa: ");

  /*try {
    const respota = await axios.api.get(`/tarefas/${id}`);
    const tarefa = respota.data;

    const atualizar = Object.assign(tarefa, { status: "Concluída" });

    await axios.api.put(`/tarefas/${id}`, atualizar);
    console.log("A tarefa foi atualizada com sucesso.");
  }*/
  // método atualizado para patch
  try {
    await axios.api.patch(`/tarefas/${id}`, { status: "Concluída" });

    console.log("A tarefa foi atualizada com sucesso.");
  } catch (err) {
    console.log(`Não foi possível encontrar uma tarefa com o ID: ${id}. Por favor, insira um ID válido e tente novamente.`);
  }
}

async function remover_tarefa() {
  const id = prompt("Digite o identificar a ser deletado: ");
  try {
    await axios.api.delete(`/tarefas/${id}`);
    console.log("A tarefa foi removida com sucesso.");
  } catch (err) {
    console.log(`Não foi possível encontrar uma tarefa com o ID: ${id}. Por favor, insira um ID válido e tente novamente.`);
  }
}

// filter > https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter
async function listar_tarefas_concluidas() {
  try {
    const resposta = await axios.api.get("/tarefas/");
    const concluidas = resposta.data.filter(tarefas => tarefas.status === "Concluída");
    console.table(concluidas);
  } catch (err) {
    console.log("Ocorreu um erro ao tentar listar a tarefa. Por favor, tente novamente.");
  }
}

async function listar_tarefas_pendentes() {
  try {
    const resposta = await axios.api.get("/tarefas/");
    const pendentes = resposta.data.filter(tarefas => tarefas.status === "Pendente");
    console.table(pendentes);
  } catch (err) {
    console.log("Ocorreu um erro ao tentar listar a tarefa. Por favor, tente novamente.");
  }
}

async function app() {
  let opcao;

  do {
    console.log("O quê deseja fazer ?\n");

    console.log("1 - Cadastrar nova tarefa");
    console.log("2 - Alterar uma tarefa");
    console.log("3 - Marcar tarefa como concluida");
    console.log("4 - Excluir uma tarefa");
    console.log("5 - Listar tarefas pendentes");
    console.log("6 - Listar tarefas concluídas");
    console.log("0 - Sair do sistema")

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        await cadastrar_tarefa();
        prompt("Precione ENTER para continuar...");
        console.clear();
        break;

      case "2":
        await alterar_tarefa();
        prompt("Precione ENTER para continuar...");
        console.clear();
        break;

      case "3":
        await marcar_concluida();
        prompt("Precione ENTER para continuar...");
        console.clear();
        break;

      case "4":
        await remover_tarefa();
        prompt("Precione ENTER para continuar...");
        console.clear();
        break;

      case "5":
        await listar_tarefas_pendentes();
        prompt("Precione ENTER para continuar...");
        console.clear();
        break;

      case "6":
        await listar_tarefas_concluidas();
        prompt("Precione ENTER para continuar...");
        console.clear();
        break;

      case "0":
        console.log("Obrigado por usar nosso sistema. Volte sempre.");
        break;

      default:
        console.clear();
        break;
    }

  } while (opcao !== "0");
}

app();