import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Pokemon from "./../models/pokemon.ts";
import POKEMONS from "./../models/mock-pokemon.ts";
import formatDate from "./../helpers/format-date.ts";
import formatType from "./../helpers/format-type.ts";

const PokemonsDetails = ({ match }) => {
  console.log(POKEMONS);
  return <div>{POKEMONS.name}</div>;
};

export default PokemonsDetails;
