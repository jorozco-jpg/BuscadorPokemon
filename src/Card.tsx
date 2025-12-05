import { useGetPokemon } from "./useGetPokemon";

export type CardProps = {
  nombre: string;
  imgrute: string;
  peso:number,
  tipo:[],
  altura:number,
};

interface props {
  searchPokemon: string;
}

function Card({ searchPokemon }: props) {
  const { pokemon } = useGetPokemon(searchPokemon);
  
  return (
    <div style={{border: "5px solid white", width: "80vw", height: "40vh"}}>
      <h2>Nombre Pokemon: {pokemon.nombre}</h2>
      <img src={pokemon.imgrute} alt="" />
      <h3>Tipo: {pokemon.tipo}</h3>
      <div>
      <h3>Peso: {pokemon.peso} </h3>
      <h3>Altura: {pokemon.altura} </h3>
      </div>
    </div>
  );
}

export default Card;
