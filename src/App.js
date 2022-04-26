import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import PokemonList from "./pages/PokemonList.js";
import PokemonDetails from "./pages/PokemonsDetails.js";
import POKEMONS from "./models/mock-pokemon.ts";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">
              Pokédex
            </Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" element={<PokemonList />} />
        <Route exact path="/pokemons" element={<PokemonList />} />
        <Route exact path="/pokemons/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
