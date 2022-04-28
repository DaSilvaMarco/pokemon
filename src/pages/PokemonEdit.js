import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import PokemonForm from "./../components/PokemonForm.js";

const PokemonEdit = () => {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/pokemons/${id}`)
      .then((response) => response.json())
      .then((pokemon) => {
        if (pokemon.id) setPokemon(pokemon);
      });
  });

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
