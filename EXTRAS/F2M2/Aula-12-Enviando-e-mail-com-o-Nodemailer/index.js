const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = 443;

app.get("/", (req, res) => {
  res.send("Enviando e-mail com o Nodemailer!");
});

app.get("/sendemail", (req, res) => {
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "87b6ccc6b5b04f",
      pass: "27746eb936fd8c",
    }
  });

  let message = {
    from: "picapau@microsoft.org",
    to: "pikachu@nasa.space",
    subject: "Mensagem enviada por sendmail",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>",
  };

  transport.sendMail(message, (err) => {
    if (err) {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: e-mail não enviado!",
      });
    } else {
      return res.json({
        erro: false,
        mensagem: "E-mail enviado com sucesso!",
      });
    };
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
