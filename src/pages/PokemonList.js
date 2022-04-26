import React, { useEffect, useState } from "react";
import PokemonCard from "./../components/PokemonCard";
import POKEMONS from "./../models/mock-pokemon.ts";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          {pokemons.map((pokemons) => (
            <PokemonCard key={pokemons.id} pokemons={pokemons} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
