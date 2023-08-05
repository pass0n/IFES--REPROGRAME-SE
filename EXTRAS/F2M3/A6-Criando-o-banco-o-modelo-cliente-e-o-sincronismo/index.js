(async () => {
  const database = require("./db");
  const Cliente = require("./cliente");

  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (err) {
    console.log(err)
  }

})();