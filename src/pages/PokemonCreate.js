import React, { useState } from "react";
import PokemonForm from "../components/PokemonForm";
import Pokemon from "../models/pokemon.ts";

const PokemonCreate = () => {
  const [id] = useState(new Date().getTime());
  const [pokemon] = useState(new Pokemon(id));

  return (
    <div className="row">
      <h2 className="header center">Ajouter un Pokémon</h2>
      <PokemonForm pokemon={pokemon} isEditForm={false} />
    </div>
  );
};

export default PokemonCreate;
