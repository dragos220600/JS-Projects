const input = document.querySelector('input');
const button = document.querySelector('button');

let pokemonImg = document.querySelector('.imagine');

let pokemonName = document.querySelector('.NAME');
let pokemonHP = document.querySelector('.HP');
let pokemonType = document.querySelector('.TYPE');
let pokemonWeight = document.querySelector('.WEIGHT');
let pokemonHeight = document.querySelector('.HEIGHT');
let pokemonStardust = document.querySelector('.STARDUST');

document.querySelector('.card').addEventListener('mouseover', function() {
    document.querySelector('.imagine').style.visibility = 'hidden';
    document.querySelector('div').style.visibility = 'hidden';
});

document.querySelector('.card').addEventListener('mouseout', function() {
    document.querySelector('.imagine').style.visibility = 'visible';
    document.querySelector('div').style.visibility = 'visible';
});

let getPokemons = async idPokemon => {

    let url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;

    let response = await fetch(url);

    if (response.status === 404) {
        alert("Pokemon inexistent");
    }
    
    let pokemon = await response.json();

    pokemonImg.setAttribute('src', pokemon.sprites.other.dream_world.front_default);
    pokemonName.innerHTML = pokemon.name;
    pokemonHP.innerHTML = `HP ${Math.floor((Math.random() * pokemon.stats[0].base_stat) + 1)}/${pokemon.stats[0].base_stat}`;
    pokemonType.innerHTML = `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`;
    pokemonWeight.innerHTML = `${pokemon.weight}kg`;
    pokemonHeight.innerHTML = `0.${pokemon.height}m`;
    pokemonStardust.innerHTML = Math.floor((Math.random() * 10000) + 1);
}

button.addEventListener('click', () => getPokemons(input.value));