const express = require("express");
const router = express.Router();

const funcionarioController = require("../controller/funcionarioController");
const livrosController = require("../controller/livrosController");

router.get("/", (req, res) => {
  return res.json({ message: "API DE LIVROS" });
});

router.post("/login", funcionarioController.VerificarLogin);

router.get(
  "/list/:id?",
  funcionarioController.verificaJWT,
  funcionarioController.ListarFuncionarios
);

router.post("/register", funcionarioController.CriarFuncionario);
router.get("/funcionarios/:id?", funcionarioController.ListarFuncionarios);
router.put("/user/:id", funcionarioController.AtualizarFuncionario);
router.delete("/user/:id", funcionarioController.DeletarFuncionario);

router.post("/add_livro", livrosController.registrarLivro);
router.get("/livro/:id?", livrosController.ListarLivros);
router.put("/atualizar/:id", livrosController.AtualizarLivro);
router.delete("/del/:id", livrosController.ExcluirLivro);

module.exports = router;