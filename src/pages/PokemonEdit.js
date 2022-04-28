import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import PokemonForm from "../components/PokemonForm";
import PokemonService from "../services/PokemonService";

const PokemonEdit = () => {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    PokemonService.getPokemon(id).then((pokemon) => setPokemon(pokemon));
  });

  return (
    <div>
      {pokemon ? (
        <div className="row">
          <h2 className="header center">Éditer {pokemon.name}</h2>
          <PokemonForm pokemon={pokemon} isEditForm={true} />
        </div>
      ) : (
        <h4 className="center">
          <Loader />
        </h4>
      )}
    </div>
  );
};

export default PokemonEdit;
