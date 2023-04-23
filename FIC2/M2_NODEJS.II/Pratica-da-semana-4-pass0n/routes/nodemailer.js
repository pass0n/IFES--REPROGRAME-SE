const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/mail", (req, res) => {
  res.render("email");
});

router.post("/sendemail", (req, res) => {
  const { email, assunto, mensagem } = req.body;
  console.log(email, assunto, mensagem);
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      //user: "7756bbcb61abb1",
      //pass: "41cb40a641c05b"
      user: "2044f973c6a984",
      pass: "a4e154605a67ae"
    }
  });

  let message = {
    from: "no_replit@ifes.com",
    to: email,
    subject: assunto,
    text: mensagem,
    html: `<p>${mensagem}</p>`,
  };

  transport.sendMail(message, (err) => {
    if (err) {
      res.status(400).json({
        erro: true,
        mensagem: "Erro: e-mail não enviado!",
      });
    } else {
      res.json({
        erro: false,
        mensagem: "E-mail enviado com sucesso!",
      });
    };
  });
  res.redirect("/mail")
});

module.exports = router