const express = require("express");
const path = require("path");
const router = express.Router();

// https://stackoverflow.com/questions/30845416/how-to-go-back-1-folder-level-with-dirname
router.get("/smartphone", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/img.html"));
});

router.get("/notebook", (req, res) => {
  res.send("Rota de notebooks");
});

router.get("/tablet", (req, res) => {
  res.send("Rota de tablets");
});

router.get("/smarttv", (req, res) => {
  res.send("Rota de smarttvs");
});

module.exports = router