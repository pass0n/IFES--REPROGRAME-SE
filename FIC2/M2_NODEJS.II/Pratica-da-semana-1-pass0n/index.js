const http = require("http");
const fs = require("fs");
const readline = require("readline");

const porta = 443
const servidor = http.createServer((req, res) => {
  fs.readFile("pagina.html", (err, arquivo) => {
    res.writeHead(200, { "Content-Type" : "text/html"});
    res.write(arquivo);
    res.end();
  });

  const txt = "arquivo.txt"
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, quam eget lacinia congue, nibh nulla ullamcorper lorem, eu elementum odio nisi nec dui. Nulla vel quam ut lorem faucibus commodo sit amet in lacus."
  
  fs.appendFile(txt, lorem, (err) => {
    if(err) throw err
    console.log(`Arquivo: ${txt} criado com sucesso`)
  });
});

async function readFileByLine(file) {
  const fileStream = fs.createReadStream(file);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});
  for await (const line of rl) {
    console.log(line);
  };
};

readFileByLine('arquivo.txt')

servidor.listen(porta, () => {console.log("Servidor rodando")});


