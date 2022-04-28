import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "./../components/PokemonCard";
import PokemonService from "./../services/PokemonService";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    PokemonService.getPokemons().then((pokemons) => setPokemons(pokemons));
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
        <Link
          to="/pokemons/create"
          className="btn-floating btn-large waves-effect waves-light red z-depth-3"
          style={{ position: "fixed", bottom: "25px", right: "25px" }}
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default PokemonList;
