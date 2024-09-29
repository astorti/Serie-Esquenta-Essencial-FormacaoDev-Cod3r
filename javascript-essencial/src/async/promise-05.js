function pokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => response.json())
        .then((data) => data.name);
}

const pokemonName1 = pokemon(10);
const pokemonName2 = pokemon(20);
const pokemonName3 = pokemon(21);

Promise.all([pokemonName1, pokemonName2, pokemonName3]).then(console.log);
