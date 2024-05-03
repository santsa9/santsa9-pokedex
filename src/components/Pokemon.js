import '../css/Pokemon.css'; 
import React, { useEffect,useState } from 'react';
import { getElements } from './API';
import { useParams } from 'react-router-dom';

// serveix per fer el format correcte dels nombres on posarà una coma 
function formatWeight(weight) {
  const weightString = String(weight); 
  if (weightString.length > 1) { // Check if weight has more than one digit
    const decimalIndex = weightString.length - 1;
    const commaFormattedWeight = weightString.slice(0, decimalIndex) + ',' + weightString.slice(decimalIndex);
    return commaFormattedWeight;
  } else if (weightString.length === 1) { // Check if weight has only one digit
    return '0,' + weightString; // Add '0,' before the single digit
  }
  return weightString; // Return the weight string unchanged if it's not a single digit
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
}, );

return (
  <div className="Pantalla">
    <img className='Imatgepok' src={pokemonActiu?.sprites.front_default} />
    <div className='nompok'>
      No{pokemonActiu?.id} {pokemonActiu?.name}
    </div>
      <div className='dades'>
      <div className='tipus_estil'>
        <div className='meitat'>
          {pokemonActiu?.types?.map((ti, index) => {
            const typeName = ti.type.name.toLowerCase();
            return (
              <span
                className={`tip color-${typeName}`} // Dynamic class assignment
                key={index}
              >
                {ti.type.name}
              </span>
            );
          })}
          <h1 className='height'>Height: {pokemonActiu && formatWeight(pokemonActiu.height)} m</h1>
          <h2 className='weight'>Weight: {pokemonActiu && formatWeight(pokemonActiu.weight)} kg</h2>
        </div>
    </div>
    </div>
    <h3 className='inf'>{pokemonSpecies?.flavor_text_entries[8]?.flavor_text}</h3>
  </div>
);
}

export default Pokemon;