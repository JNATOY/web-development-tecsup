'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let pokemons = [];
    let pokemonId = -1;

    const pokemonTBody = document.getElementById('pokemonTBody');
    const pokemonForm = document.forms['pokemonForm'];
    const actionButton = document.getElementById('actionButton'); // 1er paso se agrego para seleccionar el id del html

    //esto es el objeto :  pokemonForm['name'] ; CUANDO SELECCIONO EL FORMULARIO QUIERO OBTENER UN VALOR

const type = pokemonForm['type'].value;
    const createPokemon = (e) => {
        const name = pokemonForm['name'].value;
        const type = pokemonForm['type'].value;
        const image = pokemonForm['image'].value;
// los tres puntitos quiere decir que va obtener copia de pokemons
        pokemons = [...pokemons, { name, type, image }];
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

            const idTableData = document.createElement('td');
            idTableData.textContent = index + 1;

            const nameTableData = document.createElement('td');
            nameTableData.textContent = name;

            const typeTableDataT = document.createElement('td');
            typeTableDataT.textContent = type;

            const imageTableData = document.createElement('td');
            const imageImg = document.createElement('img');
            imageImg.setAttribute('src', image);
            imageImg.setAttribute('alt', name);
            imageImg.setAttribute('width', '64px');
            imageImg.setAttribute('height', '64px');
            imageTableData.appendChild(imageImg);

            const actionsTableData = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-outline-danger btn-sm p-1 m-1';
            deleteButton.textContent = '🗑';
            deleteButton.addEventListener('click', () => deletePokemon(index));
            const editButton = document.createElement('button');
            editButton.className = 'btn btn-outline-success btn-sm p-1 m-1';
            editButton.textContent = '✏';
            editButton.addEventListener('click', () => readPokemon(index));
            actionsTableData.appendChild(deleteButton);
            actionsTableData.appendChild(editButton);

            tableRow.appendChild(idTableData);
            tableRow.appendChild(nameTableData);
            tableRow.appendChild(typeTableDataT);
            tableRow.appendChild(imageTableData);
            tableRow.appendChild(actionsTableData);

            pokemonTBody.appendChild(tableRow);
        });
    };
//obtener un pokemon por id
    const readPokemon = (id) => {
        pokemonId = id;
 //2 paso pone la palabra editar cuando se da boton editar
        actionButton.textContent = 'Editar';
//si el indice es igual al poqueños id  que mando entonces ese es el pokemon
        const pokemon = pokemons.find((_, index) => index === id);
//desestructuro (extraccion de propiedades de un objeto)
        const { name, type, image } = pokemon;
        pokemonForm['name'].value = name;
        pokemonForm['type'].value = type;
        pokemonForm['image'].value = image;
    };

    const updatePokemon = () => {
        const name = pokemonForm['name'].value;
        const type = pokemonForm['type'].value;
        const image = pokemonForm['image'].value;

        pokemons = pokemons.map((element, index) => index !== pokemonId ? element : { name, type, image });
        localStorage.setItem('pokemonsCrud', JSON.stringify(pokemons));
        readPokemons();
        pokemonForm.reset();
        pokemonId = -1;
        actionButton.textContent = 'Crear';
    };
 // --------------------------------INICIO DE ALERTA---------------------------------------
    const deletePokemon = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success mx-1',
                cancelButton: 'btn btn-danger mx-1'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: '¿Estás seguro?',
            text: "No podrás recuperarlo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '¡Sí, elimínalo!',
            cancelButtonText: '¡No, cancélalo!',
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
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
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

    pokemonForm.addEventListener('submit', (e) => {
        e.preventDefault();
// eso es para permitir crear id cuando es diferente de -1 , nunca va poder ser -1
        pokemonId === -1 ? createPokemon() : updatePokemon();
    });
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

































