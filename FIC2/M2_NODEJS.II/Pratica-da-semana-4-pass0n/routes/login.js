const express = require("express");
const router = express.Router();

const login = "admin";
const senha = "2023";

router.get("/", (req, res) => {
  if (req.session.login) {
    res.render("logado", { login: login });
  } else {
    res.render("home");
  };
});

router.post("/", (req, res) => {
  if (req.body.password == senha && req.body.login == login) {
    req.session.login = login;
    res.render("logado", { login: login });
    console.log("Usuário logado:", login)
  } else {
    res.render("home");
  };
});

module.exports = router