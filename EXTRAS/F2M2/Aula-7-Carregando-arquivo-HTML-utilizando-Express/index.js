const app = require("express")();
const port = 443;

app.get("/contato", (req, res) => {
  res.send("Página Contato");
});

app.get("/sobre", (req, res) => {
  res.send("Página Sobre");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pagina.html");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});