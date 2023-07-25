const express = require("express");
const rotas = express();

const {
  listarLivros,
  listarPorId,
  cadastrarLivros,
  atualizarLivros,
  deletarLivros,
} = require("../controllers/listarController");

rotas.get("/livros", listarLivros);
rotas.get("/livros/:id", listarPorId);
rotas.post("/livros", cadastrarLivros);
rotas.put("/livros/:id", atualizarLivros);
rotas.delete("/livros/:id", deletarLivros);

module.exports = rotas;
