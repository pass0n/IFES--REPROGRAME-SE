const http = require("http");
const port = 443;

const servidor = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type":"text/html"});

  if(req.url == "/") {
    res.write("<h1>Wellcome!</h1>");
  } 
    else if(req.url == "/contato") {
    res.write("<h1>This is a contact page.</h1>");
  } 
    else if(req.url == "/contato/node") {
    res.write("<h1>This is a node contact page.</h1>");
  } else {
      res.write("<h1>Nothing found...</h1>")
  }

  res.end();
});

servidor.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});