'use strict';

window.addEventListener('DOMContentLoaded', () => {    /* DESPUES QUE CARGA EL DOM EJECUTA  EL CONSOLE */
    console.log(document.forms['pokemonForm']);         /* BUSCA EN TODO EL DOM FORMULARIOS QUE TENGAN EL NAME POKEMON FORM */
    pokemonForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = pokemonForm['name'].value;       /* esto es el objeto :  pokemonForm['name'] ; CUANDO SELECCIONO EL FORMULARIO QUIERO OBTENER UN VALOR */
        const type = pokemonForm['type'].value;
        const image = pokemonForm['image'].value;

        pokemonTBody.innerHTML += `
        <tr>
        <td>n</td>
        <td>${name}</td>
        <td><span class="badge text-bg-danger">${type}</span></td>
        <td>
            <img src="${image}" alt="Charmander" width="32"
            height="32" />
        </td>
        </tr>
    `;                                    /* el += es para que el contenido que se agrega se ponga al final */
        pokemonForm.reset();       /* borra todo lo que se ingreso en el formulario */
    });
});