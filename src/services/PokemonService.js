export default class PokemonService {
  static getPokemons() {
    return fetch("http://localhost:3001/pokemons").then((response) =>
      response.json()
    );
  }

  static getPokemon(id) {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then((response) => response.json())
      .then((data) => (this.isEmpty(data) ? null : data));
  }

  static isEmpty(data) {
    return Object.keys(data).length === 0;
  }
}
