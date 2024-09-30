interface Animal {
    nome: string;
    idade?: number 
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface Pet extends Animal {
    dono: string;
}

let cachorro: Pet = {
    nome: 'Rex',
    idade: 5,
    tipo: 'terrestre',
    domestico: true,
    dono: 'Victor',
};

console.log(cachorro);
