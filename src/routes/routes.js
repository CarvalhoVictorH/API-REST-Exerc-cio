const express = require("express");
const rotas = express();

const {
  listarLivros,
  listarPorId,
  cadastrarLivros,
} = require("../controllers/listarController");

rotas.get("/livros", listarLivros);
rotas.get("/livros/:id", listarPorId);
rotas.post("/livros", cadastrarLivros);

module.exports = rotas;
