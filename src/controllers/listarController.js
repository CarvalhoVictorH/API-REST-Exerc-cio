let { livros, identificadorLivros } = require("../bancodedados");

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

const atualizarLivros = (req, res) => {
  const { id } = req.params;
  const { nome, autor, estoque } = req.body;

  if (!nome) {
    res.status(400).json({ mensagem: "O nome não foi enviado." });
  }

  if (!autor) {
    res.status(400).json({ mensagem: "O autor não foi enviado." });
  }

  const livro = livros.find((livro) => {
    return livro.id === Number(id);
  });

  if (!livro) {
    return res.status(404).json({ mensagem: "Livro não encontrado." });
  }

  livro.nome = nome;
  livro.autor = autor;
  livro.estoque = estoque;

  return res.status(203).send();
};

const deletarLivros = (req, res) => {
  const { id } = req.params;

  const livro = livros.find((livro) => {
    return livro.id === Number(id);
  });

  if (!livro) {
    return res.status(404).json({ mensagem: "Livro não encontrado." });
  }

  livros = livros.filter((livro) => {
    return livro.id !== Number(id);
  });

  return res.status(204).send();
};

module.exports = {
  listarLivros,
  listarPorId,
  cadastrarLivros,
  atualizarLivros,
  deletarLivros,
};
