import React from "react";
import PokemonCard from "./../components/PokemonCard";

const PokemonList = ({ pokemons }) => {
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
