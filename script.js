import ProdutoController from "./controller/ProdutoController.js"

const produtoController = new ProdutoController();
const inputTitulo = document.getElementById("titulo");
const inputPreco = document.getElementById("preco");
const inputImagem = document.getElementById("imagem");

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  produtoController.addProduto(inputTitulo.value.trim(), inputPreco.value, inputImagem.value);
});