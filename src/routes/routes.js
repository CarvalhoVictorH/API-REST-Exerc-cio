const express = require("express");
const rotas = express();

rotas.get("/", (req, res) => {
  res.send("Servidor Ok!");
});

module.exports = rotas;
