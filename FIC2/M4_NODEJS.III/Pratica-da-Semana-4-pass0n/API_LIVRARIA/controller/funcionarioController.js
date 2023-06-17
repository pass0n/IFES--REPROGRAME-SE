const Funcionario = require("../model/funcionarioModel");
const jwt = require("jsonwebtoken");

module.exports = class funcionarioController {
  static async CriarFuncionario(req, res) {
    try {
      const { nome, email, senha } = req.body;

      const funcionario = {
        nome: nome,
        email: email,
        senha: senha,
      };
      await Funcionario.create(funcionario);
      res.json({ message: "Funcionário cadastrado com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: "Erro ao cadastrar o funcionário" });
    }
  }

  static async ListarFuncionarios(req, res) {
    try {
      const id = req.params.id;

      const data = id
        ? await Funcionario.findOne({ where: { id_funcionario: id } })
        : await Funcionario.findAll({ raw: true });
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: "Erro ao listar os funcionários" });
    }
  }

  static async AtualizarFuncionario(req, res) {
    try {
      const id = req.params.id;
      const { nome, email, senha } = req.body;

      const funcionario = {
        nome: nome,
        email: email,
        senha: senha,
      };
      await Funcionario.update(funcionario, { where: { id_funcionario: id } });
      res.json({
        message: "Funcionário atualizado com sucesso! Atualizados: ",
        dados: funcionario,
      });
    } catch (err) {
      res.status(500).json({ error: "Erro ao atualizar o funcionário" });
    }
  }

  static async DeletarFuncionario(req, res) {
    try {
      const id = req.params.id;

      await Funcionario.destroy({ where: { id_funcionario: id } });
      res.json({ message: "Funcionário excluído com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: "Erro ao excluir o funcionário" });
    }
  }

  static async VerificarLogin(req, res) {
    try {
      const { email, senha } = req.body;
      
      const funcionario = await Funcionario.findOne({
        where: { email, senha },
      });

      if (funcionario !== null) {
        const id = funcionario.id_funcionario;
        const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: 300 });

        res.json({ auth: true, token });
      } else {
        res.status(402).json({ message: "Erro ao logar no sistema." });
      }
    } catch (err) {
      res.status(500).json({ error: "Erro ao verificar o login do funcionário" });
    }
  }

  static async verificaJWT(req, res, next) {
    try {
      const token = req.headers["x-access-token"];

      if (!token) {
        return res.status(401).json({
          auth: false,
          message: "Nenhum token criado.",
        });
      }

      const decoded = jwt.verify(token, process.env.SECRET);
      req.userId = decoded.id;
      next();
    } catch (err) {
      res.status(500).json({
        auth: false,
        message: "Falha na autenticação com o token.",
      });
    }
  }
};
