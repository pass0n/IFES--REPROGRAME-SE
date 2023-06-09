const axios = require("axios");

module.exports = class Services {
  static async TarefaCreate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://listatarefas.pass0n.repl.co/tarefas/Cadastrar",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  // LISTAR
  static async TarefaListar(req, res) {
    const options = {
      url: "https://listatarefas.pass0n.repl.co/tarefas",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const tarefa = response.data;
      res.render("tarefas/listar", { tarefa });
    });
  }

  //Update
  static async TarefaUpdate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://listatarefas.pass0n.repl.co/tarefas/" + valores.id_tarefa,
      method: "PUT",
      data: valores,
    };
    axios(options);
    const mensagem = "Registro atualizado com sucesso";
    res.render("mensagem", { mensagem });
  }

  //Delete
  static async TarefaDelete(req, res) {
    let id_tarefa = req.body.id_tarefa;
    const options = {
      url: "https://listatarefas.pass0n.repl.co/tarefas/" + id_tarefa,
      method: "DELETE",
    };
    axios(options);
    const mensagem = "Tarefa excluída com sucesso!";
    res.render("mensagem", { mensagem });
  }

  // ================== {{ Usuários }} ==================//

  static async CadastrarUsuario(req, res) {
    let valores = req.body;
    const options = {
      url: "https://listatarefas.pass0n.repl.co/usuarios/Cadastrar",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Usuário cadastrado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  static async ListarUsuarios(req, res) {
    const options = {
      url: "https://listatarefas.pass0n.repl.co/usuarios",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const usuario = response.data;
      res.render("usuarios/listar", { usuario });
    });
  }

  static async AtualizarUsuario(req, res) {
    let valores = req.body;
    const options = {
      url: "https://listatarefas.pass0n.repl.co/usuarios/" + valores.id_usuario,
      method: "PUT",
      data: valores,
    };
    axios(options);
    const mensagem = "Usuário atualizado com sucesso";
    res.render("mensagem", { mensagem });
  }

  static async DeletarUsuario(req, res) {
    let id = req.body.id_usuario;
    const options = {
      url: "https://listatarefas.pass0n.repl.co/usuarios/" + id,
      method: "DELETE",
    };
    axios(options);
    const mensagem = "Usuario excluído com sucesso!";
    res.render("mensagem", { mensagem });
  }
};
