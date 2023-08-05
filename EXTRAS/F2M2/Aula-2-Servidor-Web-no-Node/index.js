const http = require("http");
const porta = 443

// req = requisição res = resposta
const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type":"text/plain" });
  res.write("Primeiro Servidor NodeJS");
  res.end
});
servidor.listen(porta, () => {console.log("Servidor rodando")})