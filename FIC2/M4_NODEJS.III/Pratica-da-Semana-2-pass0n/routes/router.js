const express = require("express");
const router = express.Router();
const controller = require("../controller/clienteController");

router.get("/", (req, res) => {
  return res.json({ message: "Olá, Seja-vindo(a) a nossa API!" });
});

router.post("/cadastrar", controller.ClienteCreate);
router.get("/clientes/:id?", controller.ClienteListar);
router.put("/cliente/:id",controller.ClienteUpdate);
router.delete("/cliente/:id",controller.ClienteDelete);

module.exports = router;