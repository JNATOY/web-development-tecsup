'use strict';
import { memes } from "../utils/memes.js";

const documentReady = () => {
  const memesBuscador = document.querySelector('#memesBuscador');
  const memesMemeContainer = document.querySelector('#memesMemeContainer');

  const buscadorMomo = (e) => {
    if (e.target.value === '') {
      memesMemeContainer.innerHTML = '';
      return
    }
    memesMemeContainer.innerHTML = '';

    const memesBuscados = memes.filter((element) => {
      return (element.nombre.toLowerCase().includes(e.target.value.toLowerCase()));
    });

    memesBuscados.forEach((element) => {
      memesMemeContainer.innerHTML += `
      <div class="memes__meme">
        <figure class="memes__meme-image-container">
          <img src="${element.imagen}" alt="${element.nombre}" class="memes__meme-image" />
        </figure>
        <h3 class="memes__meme-title">${element.nombre}</h3>
        <a href="${element.enlace}" class="memes__meme-button">Ver</a>
      </div>
    `
    });
  };

  memesBuscador.addEventListener('input', buscadorMomo);
}

document.addEventListener('DOMContentLoaded', documentReady);