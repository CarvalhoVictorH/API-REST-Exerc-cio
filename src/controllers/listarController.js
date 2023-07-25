const { livros } = require("../bancodedados");
let { identificadorLivros } = require("../bancodedados");

const listarLivros = (req, res) => {
  return res.status(200).json(livros);
};

const listarPorId = (req, res) => {
  const { id } = req.params;
  const livro = livros.find((livro) => {
    return livro.id === Number(id);
  });

  if (!livro) {
    return res.status(404).json({ mensagem: "Livro não encontrado." });
  }

  res.status(201).json(livro);
};

const cadastrarLivros = (req, res) => {
  const { nome, autor } = req.body;

  if (!nome) {
    res.status(400).json({ mensagem: "O nome não foi enviado." });
  }

  if (!autor) {
    res.status(400).json({ mensagem: "O autor não foi enviado." });
  }

  const livro = {
    id: identificadorLivros++,
    nome,
    autor,
    estoque: true,
  };

  livros.push(livro);
  return res.status(201).json(livro);
};

module.exports = {
  listarLivros,
  listarPorId,
  cadastrarLivros,
};
