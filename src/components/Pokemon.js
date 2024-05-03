import '../css/Pokemon.css'; 
import ball from '../images/ball.png';
import React, { useEffect,useState } from 'react';
import { getElements } from './API';
import { useParams } from 'react-router-dom';
// http://localhost:3001/pokemon/1 pagina per a veure els pokemons a react

// serveix per fer el format correcte dels nombres on posarà una coma 
function formatWeight(weight) {
  const weightString = String(weight); 
  const decimalIndex = weightString.length - 1;
  const commaFormattedWeight = weightString.slice(0, decimalIndex) + ',' + weightString.slice(decimalIndex);

  return commaFormattedWeight;
}

function Pokemon(props) {
  
  const [pokemons, setPokemons] = useState(null);
  const [pokemonActiu, setPokemonActiu] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const getPokemon = async () => {
        const { result } = await getElements("https://pokeapi.co/api/v2/pokemon/"+id);
        setPokemonActiu(result)
    
    const speciesResponse = await fetch("https://pokeapi.co/api/v2/pokemon-species/"+id);
        const speciesData = await speciesResponse.json();
        setPokemonSpecies(speciesData);
    };
    getPokemon();
}, []);

  return (
    <div className="Pantalla">
        <img className='Imatgepok'src={pokemonActiu?.sprites.front_default}/> 
        
        <div className='nompok'>
          No{pokemonActiu?.id} {pokemonActiu?.name}  
        </div> 
        <div className='tipus'> 
          <div className='tipus_estil'>
            {pokemonActiu?.types?.map((ti, index) => {
              return <span className='tip' key={index}>{ti.type.name}</span>;
            })} 
          </div>
        </div>
        <div className='dades'>  
        <h1 className='height'>Height: {pokemonActiu && formatWeight(pokemonActiu.height)} m</h1>
        <h2 className='weight'>Weight: {pokemonActiu && formatWeight(pokemonActiu.weight)} kg</h2>    
        </div>  
        <div className='descr'>
          <h3 className='inf'>{pokemonSpecies?.flavor_text_entries[8]?.flavor_text}</h3>
        </div>
        
    
    </div>
  );

}

export default Pokemon;