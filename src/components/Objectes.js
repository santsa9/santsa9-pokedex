import '../css/Objectes.css'; 
import React, { useEffect,useState } from 'react';
import { getElements } from './API';
import { useParams } from 'react-router-dom';

// serveix per fer el format correcte dels nombres on posarà una coma 


function Pokemon(props) {
  const [pokemons, setPokemons] = useState(null);
  const [pokemonActiu, setPokemonActiu] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [pokemonMote, setPokemonMote] = useState(null);


  const { id } = useParams();
  useEffect(() => {
    const getPokemon = async () => {
        const { result } = await getElements("https://pokeapi.co/api/v2/pokemon/"+id);
        setPokemonActiu(result)
    
    const speciesResponse = await fetch("https://pokeapi.co/api/v2/pokemon-species/"+id);
        const speciesData = await speciesResponse.json();
        setPokemonSpecies(speciesData);

    const pokemonMote = await fetch("https://pokeapi.co/api/v2/pokemon-species/"+id);
        const pokemonMotes = await pokemonMote.json();
        setPokemonMote(pokemonMotes);
    };
    getPokemon();
}, );

return (
  <div className="Pantalla">
    <h1 className='prova'>Stats i moviments del pokemon</h1> 
  </div>
);
}

export default Pokemon;