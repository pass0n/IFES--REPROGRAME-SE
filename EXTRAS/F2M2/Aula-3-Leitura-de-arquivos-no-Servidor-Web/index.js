const http = require("http");
const fs = require("fs");

const porta = 443
const servidor = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write(data);
    res.end();
  });
});

servidor.listen(porta, ()=> {console.log("Servidor rodando")});