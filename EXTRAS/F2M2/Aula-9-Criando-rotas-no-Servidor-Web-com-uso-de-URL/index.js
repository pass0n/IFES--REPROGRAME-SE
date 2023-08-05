const http = require("http");
const port = 443;
const url = require("url");

const server = http.createServer ((req, res) => {
  res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
  res.write ("Parâmetros: " + req.url);

  const params = url.parse(req.url, true).query;
  res.write(`<h1>Informações Pessoais</h1>
             <p>Nome: ${params.nome}</p>
             <p>Sobrenome: ${params.sobrenome}</p>
             <p>Cidade: ${params.cidade}</p>`);

  res.end();
});

server.listen(port, () => {
  console.log("Servidor Online.");
});