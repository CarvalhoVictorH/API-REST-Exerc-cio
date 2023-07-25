const express = require("express");
const rotas = express();
const { listarLivros } = require("../controllers/listarController");

rotas.get("/livros", listarLivros);

module.exports = rotas;
