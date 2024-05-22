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
      const response = await getElements(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemonActiu(response.result);
    };
    getPokemon();
}, );

return (
  <div className="Pantalla">
    <h1 className='prova'>Pokémon stats</h1> 
    <h3 className="inf">{pokemonSpecies?.flavor_text_entries.find(entry => entry.language.name === "en")?.flavor_text}</h3>
  </div>
);
}

export default Pokemon;