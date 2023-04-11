const express = require("express");
const app = express();
const produtos = require("./routes/produtos");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/produtos", (req, res) => {
  res.sendFile(__dirname + "/views/produtos.html");
});

// https://www.youtube.com/watch?v=ROL4ylHN47g
app.use("/produtos", produtos);

app.get("/sobre", (req, res) => {
  res.sendFile(__dirname + "/views/sobre.html");
});

app.get("/contato", (req, res) => {
  res.sendFile(__dirname + "/views/contato.html");
});

// https://expressjs.com/pt-br/starter/static-files.html
app.use("/static", express.static(__dirname + "/public"));

// https://www.geeksforgeeks.org/how-to-add-a-404-error-page-in-the-express/
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
});

app.listen(443, () => {
  console.log("Servidor no AR!");
})