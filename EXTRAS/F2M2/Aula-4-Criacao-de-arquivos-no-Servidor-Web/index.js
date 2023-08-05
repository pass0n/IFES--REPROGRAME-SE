const http = require("http");
const fs = require("fs");

const porta = 443
const servidor = http.createServer((req, res) => {
  fs.appendFile("test.txt", "Texto criado pelo appendFile", (err) => {
    if(err) throw err
    console.log("Arquivo criado com sucesso");
     res.end();
  });
});

servidor.listen(porta, () => {console.log("Servidor rodando")});