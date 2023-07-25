const livros = require("../bancodedados");

const listarLivros = (req, res) => {
  return res.status(200).json(livros);
};

module.exports = {
  listarLivros,
};
