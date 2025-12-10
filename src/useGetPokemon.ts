import { useEffect, useState } from "react";
import type { CardProps } from "./Card"; //cargar Props del pokemon que se esta buscando 
//esta funcin es solamente para buscar el input <nombre del pokemon> y devolver en un json el resultado
export function useGetPokemon( input: string) {
   
    const [pokemon, setpokemon] = useState<CardProps>({
      imgrute: "", 
      nombre: "",
      peso:0,
      tipo:[],
      altura:0,
      hp:0,
      attack:0,
      defense:0,
      SpecialAttak:0,
      SpecialDefense:0,
      speed:0,
    });

  useEffect(() => {
    async function GetPokemon() {
      let URL = "https://pokeapi.co/api/v2/pokemon/";

      URL = URL + input;
      const PokemonJS = await fetch(URL).then((response) => response.json().catch(() => alert("Pokemon no encontrado")));

      setpokemon({
        imgrute: PokemonJS.sprites.front_default, 
        nombre: PokemonJS.name,
        peso:PokemonJS.weight,
        tipo: PokemonJS.types.map(t => t.type.name + ' '),
        altura:PokemonJS.height,
        hp: PokemonJS.stats.find( Hp => Hp.stat.name === 'hp').base_stat,
        attack:PokemonJS.stats.find( Attack => Attack.stat.name === 'attack').base_stat,
        defense:PokemonJS.stats.find( Defense => Defense.stat.name === 'defense').base_stat,
        SpecialAttak:PokemonJS.stats.find( SpecialAttak => SpecialAttak.stat.name === 'special-attack').base_stat,
        SpecialDefense:PokemonJS.stats.find( SpecialDefense => SpecialDefense.stat.name === 'special-defense').base_stat,
        speed:PokemonJS.stats.find( Speed => Speed.stat.name === 'speed').base_stat,
      })
    }

      GetPokemon();
  }, [input]);

  return {pokemon};
  
}

export function useGetPokemonGeneral(){

    const [pokemonGeneral, setpokemonGeneral] = useState({
      count: 0,
      nombrePokemon: [],
      imgUrls: [],
      types: [],
    });

    useEffect(() => {
    async function GetPokemonGeneral() {
      const  URL = "https://pokeapi.co/api/v2/pokemon/";
      
      const PokemonJSGeneral = await fetch(URL).then(response => response.json());

      const urls = PokemonJSGeneral.results.map(pokemonImg => pokemonImg.url);
      
      const PokemonsGenericos = await Promise.all(
        urls.map(url => fetch(url).then(pokemon => pokemon.json()))
      );

      
      setpokemonGeneral({
        count: PokemonJSGeneral.count,
        nombrePokemon: PokemonsGenericos.map(names => names.name),
        imgUrls: PokemonsGenericos.map(img => img.sprites.front_default),
        types: PokemonsGenericos.map(tipos => tipos.types.map(tipo => tipo.type.name + ' ')),
      })
    }
    GetPokemonGeneral();
  }, []);
  return(pokemonGeneral);
}