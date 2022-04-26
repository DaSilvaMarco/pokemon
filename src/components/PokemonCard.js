import React, { useState } from "react";
import "./../styles/pokemonCard.css";
import formatDate from "./../helpers/format-date.ts";
import formatType from "./../helpers/format-type.ts";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemons, borderColor = "#009688" }) => {
  const [color, setColor] = useState();
  const navigate = useNavigate();

  const showBorder = () => {
    setColor(borderColor);
  };

  const hideBorder = () => {
    setColor("#f5f5f5");
  };

  const goToPokemon = (id) => {
    navigate(`/pokemons/${id}`);
  };

  return (
    <div
      className="col s6 m4"
      key={pokemons.name}
      onMouseEnter={showBorder}
      onMouseLeave={hideBorder}
      onClick={() => goToPokemon(pokemons.id)}
    >
      <div className="card horizontal" style={{ borderColor: color }}>
        <div className="card-image">
          <img src={pokemons.picture} alt={pokemons.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemons.name}</p>
            <p>
              <small>{formatDate(pokemons.created)}</small>
            </p>
            {pokemons.types.map((type, index) => (
              <p key={index} className={formatType(type)}>
                {type}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
