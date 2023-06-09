const express = require("express");
const Services = require("../services/services");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/usuario/cadastrar", function (req, res) {
  var isSpecificView = true;

  res.render("usuarios/cadastrar", { isSpecificView: isSpecificView });
});

router.post("/usuario/Create", Services.CadastrarUsuario);
router.get("/usuarios/listar", Services.ListarUsuarios);

router.post("/usuario/Update", Services.AtualizarUsuario);

router.post("/usuario/Delete", Services.DeletarUsuario);

router.get("/usuario/:id_usuario/:nome/:email/:senha", (req, res) => {
  let usuario = {
    id_usuario: req.params.id_usuario,
    nome: req.params.nome,
    email: req.params.email,
    senha: req.params.senha,
  };
  res.render("usuarios/update", { usuario });
});

//============================================================

router.get("/tarefas/cadastrar", (req, res) => {
  res.render("tarefas/cadastrar");
});

router.post("/tarefas/Create", Services.TarefaCreate);

router.get("/tarefas/listar", Services.TarefaListar);

router.post("/tarefas/Update", Services.TarefaUpdate);

router.post("/tarefas/Delete", Services.TarefaDelete);

router.get("/tarefas/Atualizar/:id_tarefa/:titulo/:descricao", (req, res) => {
  let tarefas = {
    id_tarefa: req.params.id_tarefa,
    titulo: req.params.titulo,
    descricao: req.params.descricao,
  };
  res.render("tarefas/update", { tarefas });
});

module.exports = router;
