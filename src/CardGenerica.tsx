import { useGetPokemonGeneral } from "./useGetPokemon";


function CardGenerica() {
  const pokemonGeneral = useGetPokemonGeneral();

  return (
    
    <div>
      <div>
        <h2>Lista Pokemon</h2>
      </div>
      {pokemonGeneral.nombrePokemon.map((name, index) => (
        <div key={name} style={{border: "2px solid yellow", width:"89vh", textAlign: 'center', borderRadius: '20%'}}>
          <h3 style={{display: 'grid', borderRadius: '20%', border: "3px solid #ffbe85", textAlign: "center", width:'fit-content',  margin: 'auto'}} >Nombre Pokemon: {name}</h3>
          <img src={pokemonGeneral.imgUrls[index]} style={{display: 'inline-block'}}/>
          <p>Tipo/s: {pokemonGeneral.types[index]}</p>
        </div>
      ))}
    </div>
  );
}

export default CardGenerica;