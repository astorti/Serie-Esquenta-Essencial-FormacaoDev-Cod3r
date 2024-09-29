async function pokemon(id) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await resp.json();
    return data.name;
}

const pokemonName1 = pokemon(1);
const pokemonName2 = pokemon(20);
const pokemonName3 = pokemon(101);

Promise.all([pokemonName1, pokemonName2, pokemonName3]).then(console.log);
