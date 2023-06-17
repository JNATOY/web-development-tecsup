const cards = () => {
  const pokemonLocal = document.getElementById('pokemonLocal');
  const pokemonRemote = document.getElementById('pokemonRemote');

  const readPokemon = async () => {
    const response = await fetch('https://raw.githubusercontent.com/JNATOY/web-development-tecsup/main/semana7/apimones-enclase/json/pokeapi-api-v2-pokemon-25.json');
    const pokemon = await response.json();
    pokemonLocal.insertAdjacentHTML('beforeend', `
      <div class="pokemon__card">
        <header class="pokemon__header">
          <img src="./img/bg-pattern-card.svg" alt="Header card image" class="pokemon__header-image">
        </header>
        <section class="pokemon__body">
          <figure class="pokemon__body-image-container">
            <img src="${pokemon.sprites.other['official-artwork'].front_default}"
              alt="${pokemon.name}" class="pokemon__body-image" />
          </figure>
          <h2 class="pokemon__body-id">Id: ${pokemon.id}</h2>
          <h1 class="pokemon__body-title">
            ${pokemon.name}
          </h1>
          <p class="pokemon__body-types">${pokemon.types.map(element => element.type.name).join(', ')}
          </p>
        </section>
        <footer class="pokemon__footer">
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${pokemon.stats[0].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${pokemon.stats[0].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${pokemon.stats[1].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${pokemon.stats[1].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${pokemon.stats[2].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${pokemon.stats[2].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${pokemon.stats[3].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${pokemon.stats[3].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${pokemon.stats[4].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${pokemon.stats[4].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${pokemon.stats[5].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${pokemon.stats[5].stat.name}</p>
          </div>
        </footer>
      </div>
    `);
  };

  const readPokemon2 = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const pokemon = await response.json();
    pokemonRemote.insertAdjacentHTML('beforeend', `
      <div class="pokemon__card">
        <header class="pokemon__header">
          <img src="./img/bg-pattern-card.svg" alt="Header card image" class="pokemon__header-image">
        </header>
        <section class="pokemon__body">
          <figure class="pokemon__body-image-container">
            <img src="${pokemon.sprites.other['official-artwork'].front_default}"
              alt="${pokemon.name}" class="pokemon__body-image" />
          </figure>
          <h2 class="pokemon__body-id">Id: ${pokemon.id}</h2>
          <h1 class="pokemon__body-title">
            ${pokemon.name}
          </h1>
          <p class="pokemon__body-types">${pokemon.types.map(element => element.type.name).join(', ')}
          </p>
        </section>
        <footer class="pokemon__footer">
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${pokemon.stats[0].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${pokemon.stats[0].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${pokemon.stats[1].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${pokemon.stats[1].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${pokemon.stats[2].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${pokemon.stats[2].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${pokemon.stats[3].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${pokemon.stats[3].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${pokemon.stats[4].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${pokemon.stats[4].stat.name}</p>
          </div>
          <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${pokemon.stats[5].base_stat}</h3>
            <p class="pokemon__footer-stats-name">${pokemon.stats[5].stat.name}</p>
          </div>
        </footer>
      </div>
    `);
  };

  readPokemon();
  readPokemon2();
};

export default cards;