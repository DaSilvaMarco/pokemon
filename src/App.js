import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import PokemonList from "./pages/PokemonList.js";
import PokemonDetails from "./pages/PokemonsDetails.js";
import PageNotFound from "./pages/PageNotFound";
import PokemonEdit from "./pages/PokemonEdit";

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
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemons" element={<PokemonList />} />
        <Route path="/pokemons/:id" element={<PokemonDetails />} />
        <Route path="/pokemons/edit/:id" element={<PokemonEdit />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
