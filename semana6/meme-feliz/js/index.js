'use strict';

import { memes } from "../utils/memes.js"

document.addEventListener('DOMContentLoaded', () => {
  const memesBuscador = document.getElementById('memesBuscador');
  const memesMemeContainer = document.getElementById('memesMemeContainer');
  /* //BUSCAR COINCIDENCIAS DENTRO DE LA PAGINA */
  memesBuscador.addEventListener('input', (e) => {
    memesMemeContainer.innerHTML = '';

    const memesBuscados = memes.filter(element => element.nombre.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));

    memesBuscados.forEach(element => {
      memesMemeContainer.innerHTML += `
      <li>${element.nombre}</li>
    `;
    });
  });
});