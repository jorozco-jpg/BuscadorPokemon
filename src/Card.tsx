import { useGetPokemon } from "./useGetPokemon"; //cargar la funcion para obtener la funcion que obtiene la info del pokemon buscado
//definir los datos que va a mostrar el resultado de busqueda
export type CardProps = {
  nombre: string;
  imgrute: string;
  peso:number,
  tipo:[],
  altura:number,
  hp:number,
  attack:number,
  defense:number,
  SpecialAttak:number,
  SpecialDefense:number,
  speed:number,
};

interface props { //para tipado de typescripts, y que la funcion si o si reciba un string
  searchPokemon: string;
}
//funcion donde se define la card
function Card({ searchPokemon }: props) {
  const { pokemon } = useGetPokemon(searchPokemon); //pasar la busqueda del pokemon
  
  return (
    <div style={{border: "2px solid yellow", width: "725px", height: "100vh"}} className="Ventana Infomracion">
      <h2 style={{border: "2px solid #1c76c5", width:'fit-content',  margin: 'auto'}}>Nombre Pokemon: {pokemon.nombre}</h2>
      <img src={pokemon.imgrute} style={{border: "5px solid white"}}/>
      <h3 style={{border: "5px solid white",  width:'fit-content',  margin: 'auto'}}>Tipo: {pokemon.tipo}</h3>
      <h3 style={{border: "5px solid white", width:'fit-content',  margin: 'auto'}}>Peso: {pokemon.peso} </h3>
      <h3 style={{border: "5px solid white", width:'fit-content',  margin: 'auto'}}>Altura: {pokemon.altura} </h3>
      
      <div style={{border: "2px solid yellow", width:"100%", textAlign: 'center', borderRadius: '20%'}}>
      <h3>Estadísticas Base:</h3>
      <h3 style={{border: "5px solid white", width:'fit-content',  margin: 'auto'}}>Hp: {pokemon.hp} </h3>
      <h3 style={{border: "5px solid white", width:'fit-content',  margin: 'auto'}}>Attack: {pokemon.attack} </h3>
      <h3 style={{border: "5px solid white", width:'fit-content',  margin: 'auto'}}>Defense: {pokemon.defense} </h3>
      <h3 style={{border: "5px solid white", width:'fit-content',  margin: 'auto'}}>SpecialAttak: {pokemon.SpecialAttak} </h3>
      <h3 style={{border: "5px solid white", width:'fit-content',  margin: 'auto'}}>SpecialDefense: {pokemon.SpecialDefense} </h3>
      <h3 style={{border: "5px solid white", width:'fit-content',  margin: 'auto'}}>Speed: {pokemon.speed} </h3>
      </div>

    </div>
  );
}

export default Card;
