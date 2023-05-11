const database = require("./db");
const routers = require("./routes/routers");

const express = require("express");
const app = express();
const porta = 9443;
const bodyParser = require("body-parser");

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
}));     

app.use(routers);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta: ${porta}.`);
});

(async () => {
  
  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (err) {
    console.log(err)
  }
})();