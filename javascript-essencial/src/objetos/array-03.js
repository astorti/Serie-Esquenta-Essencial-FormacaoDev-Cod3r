const pessoas = [{ autor: 'Frank Herbert' }, { autor: 'Isaac Asimov' }, { autor: 'Arthur Conan Doyle' }];

const primeirosNomes = pessoas.map((pessoa) => pessoa.autor.split(' ')[0]);

console.log(primeirosNomes);
