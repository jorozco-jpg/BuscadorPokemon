import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import CardGenerica from "./CardGenerica";
//import { CardGenerica } from "./CardGenerica";

function App() {
  const [PokeName, setPokename] = useState("");
  const [PokeNameSearch, setPokenameSearch] = useState("");

  const [showCard, setshowCard] = useState(false);
  const [showCardGeneric, setshowCardGeneric] = useState(true);

  const handlechange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(PokeName===''){
      alert('No puede realizar una búsqueda vacía')
      setshowCard(false);
      setshowCardGeneric(true);
    }else{
      setshowCard(true);
      setshowCardGeneric(false);
      setPokenameSearch(PokeName);
    }
    
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
                  setshowCardGeneric(true);
                  setshowCard(false);
                }}
              />

              <button type="submit">Buscar Pokemon!</button>
            </label>
          </form>

          {showCard && (<Card searchPokemon={PokeNameSearch} />)}

        </div>
      </header>

          {showCardGeneric && <CardGenerica/>}
    </>
  );
}

export default App;
