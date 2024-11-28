import Produto from "../model/Produto.js";
import ProdutoView from "../view/ProdutoView.js";

export default class ProdutoController {
    constructor() {
        this.produtos = [];
    }

    addProduto(titulo, preco, imagem) {
        const produtoModel = new Produto(titulo, preco, imagem);
        this.produtos.push(produtoModel);
        this.renderProdutos();
    }

    renderProdutos() {
        const produtosContainer = document.getElementById("produtos__container");
        produtosContainer.innerHTML = ``;

        this.produtos.forEach(produto => {
            const produtoView = new ProdutoView(produto);

            produtosContainer.appendChild(produtoView);
        });

    }


}