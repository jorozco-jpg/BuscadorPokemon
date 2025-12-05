import { useEffect, useState } from "react";
import type { CardProps } from "./Card";

export function useGetPokemon( input: string) {

    const [pokemon, setpokemon] = useState<CardProps>({
      imgrute: "", 
      nombre: "",
      peso:0,
      tipo:[],
      altura:0,
    });

  useEffect(() => {
    async function GetPokemon() {
      let URL = "https://pokeapi.co/api/v2/pokemon/";

      URL = URL + input;
      const PokemonJS = await fetch(URL).then((response) => response.json().catch(() => alert("Pokemon no encontrado"))
      );
      console.log('estoy aqui');
      console.log(PokemonJS.types.slot);

      setpokemon({
        imgrute: PokemonJS.sprites.front_default, 
        nombre: PokemonJS.name,
        peso:PokemonJS.weight,
        tipo: PokemonJS.types.map(t => t.type.name + ' '),
        altura:PokemonJS.height,
      })
    }
    GetPokemon();
  }, [input]);

  return {pokemon};
}