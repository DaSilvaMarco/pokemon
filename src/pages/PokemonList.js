import React, { useEffect, useState } from "react";
import PokemonCard from "./../components/PokemonCard";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemons")
      .then((response) => response.json())
      .then((pokemons) => {
        setPokemons(pokemons);
      });
  });

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
