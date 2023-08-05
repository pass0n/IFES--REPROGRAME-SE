const http = require("http");
const port = 443;
const formidable = require("formidable");
const fs = require("fs");

const server = http.createServer((req,res) => {

  if(req.url != "/rotadeupload") {
    res.writeHead(200, { "Content-Type": "text/html" });
    
    res.write(
              "<form action = 'rotadeupload' method = 'post' enctype = 'multipart/form-data'>" +
              "<input type = 'file' name = 'filetoupload'><br>" +
              "<input type = 'submit' value = 'Enviar'>" +
              "</form>"
    );
      res.end();
    } else {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, campos, arquivos) => {
        
        const urlAntiga = arquivos.filetoupload.filepath;
        const urlNova = "./arquivosrecebidos/" + arquivos.filetoupload.originalFilename;
  
        let rawData = fs.readFileSync(urlAntiga);
        
        fs.writeFile(urlNova, rawData, (err) => {
          
        if(err) console.log(err);
          
        res.write("Arquivo enviado com sucesso!");
        res.end();
        });
      });
    };
});

server.listen(port, () => {
  console.log("Servidor Online.");
});