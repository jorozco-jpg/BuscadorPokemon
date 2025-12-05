import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [PokeName, setPokename] = useState("");
  const [PokeNameSearch, setPokenameSearch] = useState("");

  const [info, setinfo] = useState(false);

  const handlechange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setinfo(true);
    setPokenameSearch(PokeName);
  };

  return (
    <>
      <header>
        <div>
          <form onSubmit={handlechange}>
            <label>
              Ingresar Pokemon
              <input
                value={PokeName}
                onChange={(e) => {
                  setPokename(e.target.value);
                }}
              />
              <button type="submit">Buscar Pokemon!</button>
            </label>
          </form>

          {info && (<Card searchPokemon={PokeNameSearch} />)}

        </div>
      </header>
    </>
  );
}

export default App;
