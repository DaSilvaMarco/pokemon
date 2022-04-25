import { useEffect, useState } from "react";
import "./App.css";
import POKEMONS from "./models/mock-pokemon.ts";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  console.log(pokemons);

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          {pokemons.map((pokemon) => (
            <div className="col s6 m4" key={pokemon.name}>
              <div className="card horizontal">
                <div className="card-image">
                  <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{pokemon.name}</p>
                    <p>
                      <small>{pokemon.created.toString()}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
