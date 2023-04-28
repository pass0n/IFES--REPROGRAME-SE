const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("escola.sqlite", (err) => {
  if(err){
    return console.error(err.message);
  }
  console.log("Banco de dados escola conectado com sucesso!");

  //db.run("CREATE TABLE aluno(matricula int primary key, nome varchar(60), email varchar(40), cidade varchar(60))");
});

/*
db.run("INSERT into aluno(matricula, nome, email, cidade) values (20231, 'Kayllon S. Passon', 'kayllonsv.passon@gmail.com', 'Vila Velha - ES')");
db.run("INSERT into aluno(matricula, nome, email, cidade) values (20232, 'João da Silva Sauro', 'joazin@gmail.com', 'Vitória - ES')");
db.run("INSERT into aluno(matricula, nome, email, cidade) values (20233, 'Maria Penha', 'p_maria@gmail.com', 'Serra - ES')");
*/

db.each("SELECT matricula, nome FROM aluno", (err, row) => {
  if(err) {
    console.error(err.message);
  }
  console.log(`${row.matricula}\t ${row.nome}`);
});