const express = require("express");
const formidable = require("formidable");
const fs = require("fs");

const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.post("/upload", (req, res, next) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
    }

    const urlAntiga = files.up.filepath;
    const urlNova = path.join(__dirname, "../api/uploads/", files.up.originalFilename);

    let rawData = fs.readFileSync(urlAntiga);

    fs.writeFileSync(urlNova, rawData, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ "result": false, "message": "Erro ao fazer upload do arquivo" });
        return;
      } else {
        console.log("Upload concluído com sucesso!!!");
        res.status(200).json({ "result": true, "message": "Upload concluído com sucesso!!!" });
      }
    });
    res.redirect("/");
  });
});


module.exports = router