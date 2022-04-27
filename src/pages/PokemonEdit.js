import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import PokemonForm from "./../components/PokemonForm.js";
import POKEMONS from "./../models/mock-pokemon.ts";

const PokemonEdit = () => {
  const [pokemon, setPokemon] = useState(null);
  const location = useLocation();

  useEffect(() => {
    POKEMONS.forEach((pokemon) => {
      if (location.pathname === `/pokemons/edit/${pokemon.id}`) {
        setPokemon(pokemon);
      }
    });
  }, [location.pathname]);

  return (
    <div>
      {pokemon ? (
        <div className="row">
          <h2 className="header center">Éditer {pokemon.name}</h2>
          <PokemonForm pokemon={pokemon}></PokemonForm>
        </div>
      ) : (
        <h4 className="center">Aucun pokémon à afficher !</h4>
      )}
    </div>
  );
};

export default PokemonEdit;
