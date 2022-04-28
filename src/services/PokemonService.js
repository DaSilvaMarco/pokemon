export default class PokemonService {
  static getPokemons() {
    return fetch("http://localhost:3001/pokemons").then((response) =>
      response.json().catch((error) => this.handleError(error))
    );
  }

  static getPokemon(id) {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then((response) => response.json())
      .then((data) => (this.isEmpty(data) ? null : data))
      .catch((error) => this.handleError(error));
  }

  static updatePokemon(pokemon) {
    return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
      method: "PUT",
      body: JSON.stringify(pokemon),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static deletePokemon(pokemon) {
    return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static addPokemon(pokemon) {
    delete pokemon.created;

    return fetch(`http://localhost:3001/pokemons/`, {
      method: "POST",
      body: JSON.stringify(pokemon),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static searchPokemon(search) {
    return fetch(`http://localhost:3001/pokemons?q=${search}`)
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static isEmpty(data) {
    return Object.keys(data).length === 0;
  }

  static handleError(error) {
    console.error(error);
  }
}
