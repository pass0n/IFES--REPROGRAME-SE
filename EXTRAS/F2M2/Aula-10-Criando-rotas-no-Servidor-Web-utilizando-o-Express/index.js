const express = require("express");
const app = express();
const routes = require("./routes")
const port = 443;

app.use("/", routes);

app.listen(port, () => {
  console.log("Servidor online");
});