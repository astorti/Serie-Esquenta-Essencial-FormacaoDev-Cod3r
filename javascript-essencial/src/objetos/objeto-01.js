const produto = {
    nome: 'TV',
    preco: 1899.99,
};

produto.nome = 'Computador';
produto.anoFabricacao = 2024;

console.log(produto);

delete produto.anoFabricacao;

console.log(`Produto: ${produto.nome}`);
console.log(produto);
