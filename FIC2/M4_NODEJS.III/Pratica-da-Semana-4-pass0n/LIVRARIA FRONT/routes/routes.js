const express = require("express");
const Services = require("../services/services");
const router = express.Router();

router.get("/", (req, res) => {
  var isSpecificView = true;
  res.render("funcionarios/login", { isSpecificView: isSpecificView });
})
router.post("/login", Services.LoginFuncionario)

router.get("/registar/livro", (req, res) => {
  res.render("livros/cadastrar");
});

router.post("/livro/Create", Services.RegistrarLivro);

router.get("/livros", Services.ListarLivros);

router.post("/livro/Update", Services.AtualizarLivro);

router.post("/livro/Delete", Services.DeletarLivro);

router.get("/livro/:id_livro/:titulo/:autor/:preco/:link", (req, res) => {
  let livro = {
    id_livro: req.params.id_livro,
    titulo: req.params.titulo,
    autor: req.params.autor,
    preco: req.params.preco,
    link: decodeURIComponent(req.params.link),
  };
  res.render("livros/update", { livro });
});

// ================== {{ Funcionários }} ==================//

router.get("/cadastro", function (req, res) {
  var isSpecificView = true;

  res.render("funcionarios/cadastrar", { isSpecificView: isSpecificView });
});

router.post("/funcionario/create", Services.RegistrarFuncionario);

router.get("/funcionarios", Services.ListarFuncionario);

router.post("/funcionario/Update", Services.AtualizarFuncionario);

router.post("/funcionario/Delete", Services.DeletarFuncionario);

router.get("/funcionario/:id_funcionario/:nome/:email/:senha", (req, res) => {
  let funcionario = {
    id_funcionario: req.params.id_funcionario,
    nome: req.params.nome,
    email: req.params.email,
    senha: req.params.senha,
  };
  res.render("funcionarios/update", { funcionario });
});

module.exports = router;
