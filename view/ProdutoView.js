export default class ProdutoView {
    constructor(model) {
        this.model = model;

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${this.model.imagem}" alt="${this.model.titulo}">
            <h3>${this.model.titulo}</h3>
            <p>R$ ${Number(this.model.preco).toFixed(2)}</p>
        `;

        return card;
    }


}