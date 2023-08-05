const app = require("express")();
const port = 443;

app.get("/", (req, res) => {
  res.send("Wellcome to the web server using express.")
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});