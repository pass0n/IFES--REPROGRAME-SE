const Livro = require("../model/livrosModel");

module.exports = class livroController {
  static async registrarLivro(req, res) {
    try {
      let { titulo, autor, preco, link } = req.body;

      const livro = {
        titulo: titulo,
        autor: autor,
        preco: preco,
        link: link,
      };
      await Livro.create(livro);
      res.json({ message: "Livro cadastrado com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: "Erro ao cadastrar o livro" });
    }
  }

  static async ListarLivros(req, res) {
    try {
      const id = req.params.id;

      const data = id
        ? await Livro.findOne({ where: { id_livro: id } })
        : await Livro.findAll({ raw: true });

      res.json(data);
    } catch (err) {
      res.status(500).json({ error: "Erro ao listar os livros" });
    }
  }

  static async AtualizarLivro(req, res) {
    try {
      const id = req.params.id;
      let { titulo, autor, preco, link } = req.body;

      const livro = {
        titulo: titulo,
        autor: autor,
        preco: preco,
        link: link,
      };
      await Livro.update(livro, { where: { id_livro: id } });
      res.json({
        message: "Livro atualizado, com os seguintes dados:",
        dados: livro,
      });
    } catch (err) {
      res.status(500).json({ error: "Erro ao atualizar o livro" });
    }
  }

  static async ExcluirLivro(req, res) {
    try {
      const id = req.params.id;

      await Livro.destroy({ where: { id_livro: id } });
      res.json({ message: "Livro excluído com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: "Erro ao excluir o livro" });
    }
  }
};
