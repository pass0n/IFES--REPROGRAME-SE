const app = require("express")();
const port = 443;

app.get("/", function(req, res){
  res.send("Hello World, i am using Express.")
});

app.listen(port, function(){
  console.log(`Servidor rodando na porta ${port}.`)
});