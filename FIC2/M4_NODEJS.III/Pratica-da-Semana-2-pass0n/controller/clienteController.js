const Cliente = require("../model/clienteModel");

module.exports = class clienteController {
  static async ClienteCreate(req, res) {
    let { nome, endereco, telefone, email } = req.body;

    const cliente = {
      nome: nome,
      endereco: endereco,
      telefone: telefone,
      email: email
    };
    await Cliente.create(cliente);
    res.json({ message: "Cadastro realizado com sucesso!" });
  };

  static async ClienteListar(req, res) {
    const id = req.params.id;
    if (id) {
      const cliente = await Cliente.findOne({ where: { id_cliente: id } });
      res.json(cliente);
    } else {
      const cliente = await Cliente.findAll({ raw: true });
      res.json(cliente);
    };
  };

  static async ClienteUpdate(req, res) {
    const id = req.params.id;
    let { nome, endereco, telefone, email } = req.body;

    const cliente = {
      nome: nome,
      endereco: endereco,
      telefone: telefone,
      email: email
    };
    await Cliente.update(cliente, { where: { id_cliente: id } });
    res.json({ message: "Cadastro atualizado com sucesso! Foram atualizados:", dados: cliente });
  };

  static async ClienteDelete(req, res) {
    const id = req.params.id;
    await Cliente.destroy({ where: { id_cliente: id } });
    res.json({ message: "Cliente excluído com sucesso!" });
  };
};