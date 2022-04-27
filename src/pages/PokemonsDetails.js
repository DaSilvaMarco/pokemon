import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import POKEMONS from "./../models/mock-pokemon.ts";
import formatDate from "./../helpers/format-date.ts";
import formatType from "./../helpers/format-type.ts";
import PageNotFound from "./PageNotFound";

const PokemonsDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const location = useLocation();

  useEffect(() => {
    POKEMONS.forEach((pokemon) => {
      if (location.pathname === `/pokemons/${pokemon.id}`) {
        setPokemon(pokemon);
      }
    });
  }, [location.pathname]);

  return (
    <div>
      {pokemon ? (
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <h2 className="header center">{pokemon.name}</h2>
            <div className="card hoverable">
              <div className="card-image">
                <img
                  src={pokemon.picture}
                  alt={pokemon.name}
                  style={{ width: "250px", margin: "0 auto" }}
                />
                <Link
                  to={`/pokemons/edit/${pokemon.id}`}
                  className="btn btn-floating halfway-fab waves-effect waves-light"
                >
                  <i className="material-icons">edit</i>
                </Link>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr>
                        <td>Nom</td>
                        <td>
                          <strong>{pokemon.name}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Points de vie</td>
                        <td>
                          <strong>{pokemon.hp}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Dégâts</td>
                        <td>
                          <strong>{pokemon.cp}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Types</td>
                        <td>
                          {pokemon.types.map((type) => (
                            <span key={type} className={formatType(type)}>
                              {type}
                            </span>
                          ))}
                        </td>
                      </tr>
                      <tr>
                        <td>Date de création</td>
                        <td>{formatDate(pokemon.created)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default PokemonsDetails;
