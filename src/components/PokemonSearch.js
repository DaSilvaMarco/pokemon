import React, { useState } from "react";
import { Link } from "react-router-dom";
import PokemonService from "../services/PokemonService";

const PokemonSearch = () => {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState([]);

  const handleInputChange = (e) => {
    const search = e.target.value;
    setSearch(search);

    if (search.length <= 1) {
      setPokemons([]);
      return;
    }

    PokemonService.searchPokemon(search).then((pokemons) =>
      setPokemons(pokemons)
    );
  };

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <div className="input-field">
              <input
                type="text"
                placeholder="Rechercher un pokémon"
                value={search}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="collection">
              {pokemons.map((pokemon) => (
                <Link
                  key={pokemon.id}
                  to={`/pokemons/${pokemon.id}`}
                  className="collection-item"
                >
                  {pokemon.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonSearch;
