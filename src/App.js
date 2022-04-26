import { useEffect, useState } from "react";
import "./App.css";
import PokemonList from "./pages/PokemonList";
import POKEMONS from "./models/mock-pokemon.ts";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return <PokemonList pokemons={pokemons} />;
}

export default App;
