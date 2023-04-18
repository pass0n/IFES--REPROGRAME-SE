const express = require("express");
const app = express();
port = 443;
const routers = require("./routes/routers");

app.use(routers);

app.use("/static", express.static(__dirname + "/static"));

app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});