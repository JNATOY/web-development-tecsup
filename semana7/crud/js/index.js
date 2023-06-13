'use strict';

window.addEventListener('DOMContentLoaded', () => {    /* DESPUES QUE CARGA EL DOM EJECUTA  EL CONSOLE */
    /* console.log(document.forms['pokemonForm']);         /* BUSCA EN TODO EL DOM FORMULARIOS QUE TENGAN EL NAME POKEMON FORM */
    /* pokemonForm.addEventListener('submit', (e) => { */
    /* e.preventDefault(); */
    const pokemonTBody = document.getElementById('pokemonTBody');
    const pokemonForm = document.forms['pokemonForm'];

    let pokemons = [    /*  hay tres objetos dentro de un arrays */
        { name: 'Charmander', type: 'Fuego', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
        { name: 'Squirtle', type: 'Agua', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
        { name: 'Bulbasaur', type: 'Planta', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' }
    ];

    pokemonForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = pokemonForm['name'].value;       /* esto es el objeto :  pokemonForm['name'] ; CUANDO SELECCIONO EL FORMULARIO QUIERO OBTENER UN VALOR */
        const type = pokemonForm['type'].value;
        const image = pokemonForm['image'].value;
// los tres puntitos quiere decir que va obtener copia de pokemons
        pokemons = [...pokemons, { name, type, image }];
        readPokemons();
        pokemonForm.reset();
    });

        const readPokemons = () => {
// va limpiar el el tbody
        pokemonTBody.innerHTML = '';

        pokemons.forEach((element, index) => {
            const { name, type, image } = element;

            pokemonTBody.innerHTML += `
            <tr>
            <td>${index + 1}</td>
            <td>${name}</td>
            <td><span class="badge text-bg-primary">${type}</span></td>
            <td>
                <img src="${image}" alt="Charmander" width="32"
                height="32" />
            </td>
            </tr>
        `;
        });
    };
    readPokemons();
});
                                  /* el += es para que el contenido que se agrega se ponga al final */
        /* pokemonForm.reset(); */       /* borra todo lo que se ingreso en el formulario */

































