class Produto {
    id: number;
    nome: string;
    preco: number;
    promocao: boolean;

    constructor(id: number, nome: string, preco: number, promocao: boolean) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.promocao = promocao
    }
}

const produto: Produto = new Produto(1, 'Relógio', 149.99, true);
console.log(produto);
