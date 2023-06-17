const axios = require("axios");

module.exports = class Services {

  static async LoginFuncionario(req, res) {
    let valores = req.body;
    const options = {
      url: "https://apilivraria.pass0n.repl.co/login",
      method: 'POST',
      data: valores
    };
    axios(options).then((funcionario) => {
      if (funcionario != undefined) {
        return res.render('logado');
      }
    })
  }
  
  static async RegistrarLivro(req, res) {
    let valores = req.body;
    const options = {
      url: "https://apilivraria.pass0n.repl.co/add_livro",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  // LISTAR
  static async ListarLivros(req, res) {
    const options = {
      url: "https://apilivraria.pass0n.repl.co/livro",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const livro = response.data;
      res.render("livros/listar", { livro });
    });
  }

  //Update
  static async AtualizarLivro(req, res) {
    let valores = req.body;
    const options = {
      url: "https://apilivraria.pass0n.repl.co/atualizar/" + valores.id_livro,
      method: "PUT",
      data: valores,
    };
    axios(options);
    const mensagem = "Registro atualizado com sucesso";
    res.render("mensagem", { mensagem });
  }

  //Delete
  static async DeletarLivro(req, res) {
    let id_livro = req.body.id_livro;
    const options = {
      url: "https://apilivraria.pass0n.repl.co/del/" + id_livro,
      method: "DELETE",
    };
    axios(options);
    const mensagem = "Tarefa excluída com sucesso!";
    res.render("mensagem", { mensagem });
  }

  // ================== {{ Funcionários }} ==================//

  static async RegistrarFuncionario(req, res) {
    let valores = req.body;
    const options = {
      url: "https://apilivraria.pass0n.repl.co/register",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Funcionário cadastrado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  static async ListarFuncionario(req, res) {
    const options = {
      url: "https://apilivraria.pass0n.repl.co/funcionarios",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const funcionario = response.data;
      res.render("funcionarios/listar", { funcionario });
    });
  }

  static async AtualizarFuncionario(req, res) {
    let valores = req.body;
    const options = {
      url: "https://apilivraria.pass0n.repl.co/user/" + valores.id_funcionario,
      method: "PUT",
      data: valores,
    };
    axios(options);
    const mensagem = "Funcionário atualizado com sucesso";
    res.render("mensagem", { mensagem });
  }

  static async DeletarFuncionario(req, res) {
    let id = req.body.id_funcionario;
    const options = {
      url: "https://apilivraria.pass0n.repl.co/user/" + id,
      method: "DELETE",
    };
    axios(options);
    const mensagem = "Funcionário excluído com sucesso!";
    res.render("mensagem", { mensagem });
  }
};
