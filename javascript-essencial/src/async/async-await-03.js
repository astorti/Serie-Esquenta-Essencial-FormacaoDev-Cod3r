async function pokemon(id) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await resp.json();
    return data.name;
}

async function obterPokemonsEmSequencia() {
    const pokemonName1 = await pokemon(1);
    const pokemonName2 = await pokemon(2);
    const pokemonName3 = await pokemon(3);
    return ['Sequência', pokemonName1, pokemonName2, pokemonName3];
}

function obterPokemonsEmParalelo() {
    const label = Promise.resolve('paralelo');
    const pokemonName1 = pokemon(4);
    const pokemonName2 = pokemon(5);
    const pokemonName3 = pokemon(6);
    return Promise.all([label, pokemonName1, pokemonName2, pokemonName3]);
}

obterPokemonsEmSequencia().then(console.log);
obterPokemonsEmParalelo().then(console.log);
