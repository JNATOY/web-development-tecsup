'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let pokemons;

    const pokemonTBody = document.getElementById('pokemonTBody');
    const pokemonForm = document.forms['pokemonForm'];

    const createPokemon = (e) => {
        e.preventDefault();
        const name = pokemonForm['name'].value;      //esto es el objeto :  pokemonForm['name'] ; CUANDO SELECCIONO EL FORMULARIO QUIERO OBTENER UN VALOR
        const type = pokemonForm['type'].value;
        const image = pokemonForm['image'].value;

        pokemons = [...pokemons, { name, type, image }];    // los tres puntitos quiere decir que va obtener copia de pokemons
        localStorage.setItem('pokemonsCrud', JSON.stringify(pokemons));
        readPokemons();
        pokemonForm.reset();
    };

    const readPokemons = () => {
        pokemonTBody.innerHTML = '';

        pokemons.forEach((element, index) => {
            const { name, type, image } = element;

            // pokemonTBody.innerHTML += `
            //   <tr>
            //     <td>${index + 1}</td>
            //     <td>${name}</td>
            //     <td><span class="badge text-bg-primary">${type}</span></td>
            //     <td>
            //       <img src="${image}" alt="${name}" width="32"
            //         height="32" />
            //     </td>
            //     <td>
            //       <button class="btn btn-outline-danger btn-sm" onClick=deletePokemon(${index})>❌</button>
            //     </td>
            //   </tr>
            // `;

            const tableRow = document.createElement('tr');

            const tableDataId = document.createElement('td');
            tableDataId.textContent = index + 1;

            const tableDataName = document.createElement('td');
            tableDataName.textContent = name;

            const tableDataType = document.createElement('td');
            tableDataType.textContent = type;

            const tableDataImage = document.createElement('td');
            const imgImage = document.createElement('img');
            imgImage.setAttribute('src', image);
            imgImage.setAttribute('alt', name);
            imgImage.setAttribute('width', '64px');
            imgImage.setAttribute('height', '64px');
            tableDataImage.appendChild(imgImage);

            const tableDataActions = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-outline-danger btn-sm';
            deleteButton.textContent = '🗑';
            deleteButton.addEventListener('click', () => deletePokemon(index))
            tableDataActions.appendChild(deleteButton);

            tableRow.appendChild(tableDataId);
            tableRow.appendChild(tableDataName);
            tableRow.appendChild(tableDataType);
            tableRow.appendChild(tableDataImage);
            tableRow.appendChild(tableDataActions);

            pokemonTBody.appendChild(tableRow);
        });
    };

    const deletePokemon = (id) => {

        // --------------------------------INICIO DE ALERTA---------------------------------------

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success mx-1', // porque le puso mx-1 ?
                cancelButton: 'btn btn-danger mx-1'      // porque le puso mx-1 ?
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: '¿Estás seguro?',
            text: "No podrás recuperarlo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '¡Sí, elimínalo!',
            cancelButtonText: 'No, cancélalo!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                //inicio del pokemons.filter devuelve los poquemos de un id diferente del que uno manda
                pokemons = pokemons.filter((_, index) => index !== id);
                localStorage.setItem('pokemonsCrud', JSON.stringify(pokemons));
                readPokemons();
                //fin del pokemons.filter
                swalWithBootstrapButtons.fire(
                    '¡Eliminado!',
                    'Tu Pokémon ha sido eliminado',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Tu Pokémon está seguro',
                    'error'
                );
            }
        })
    };

// --------------------------------------FIN DE ALERTA ------------------------------------------------

    if (localStorage.getItem('pokemonsCrud')) {
        pokemons = JSON.parse(localStorage.getItem('pokemonsCrud'));
    } else {
        pokemons = [
            { name: 'Charmander', type: 'Fuego', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
            { name: 'Squirtle', type: 'Agua', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
            { name: 'Bulbasaur', type: 'Planta', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' }
        ];
        localStorage.setItem('pokemonsCrud', JSON.stringify(pokemons));
    }

    pokemonForm.addEventListener('submit', createPokemon);
    readPokemons();
});

// window.addEventListener('DOMContentLoaded', () => {   /* DESPUES QUE CARGA EL DOM EJECUTA  EL CONSOLE */
/* console.log(document.forms['pokemonForm']);         /* BUSCA EN TODO EL DOM FORMULARIOS QUE TENGAN EL NAME POKEMON FORM */
/* pokemonForm.addEventListener('submit', (e) => { */
/* e.preventDefault(); */


// });


// Apuntes

// el += es para que el contenido que se agrega se ponga al final
// pokemonForm.reset();         borra todo lo que se ingreso en el formulario
// las imagenes se ponen con inicio +punto ( imagen de la papelera)

































