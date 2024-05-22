//import portada from '../images/portada.jpg'; // Remove this line
import '../css/Home.css'; 
import torchic from '../images/torchic.png';
import ball from '../images/ball.png';
import React, { useEffect,useState } from 'react';
import { getElements } from './API';

function Home({setIdPokemon}) {
  
  const [pokemons, setPokemons] = useState(null);
  const [pokemonActiu, setPokemonActiu] = useState(null);
  const [isFrontView, setIsFrontView] = useState(true);
  // fins a la gen  pkmn 809
  useEffect(() => {
    const getPokemon = async () => {
        const { result } = await getElements("https://pokeapi.co/api/v2/pokemon?offset=0&limit=809");
        const pokemonData = await Promise.all(result?.results.map(async (poke) => {
            const ajuda = await getElements(poke.url);
            return ajuda.result;
        }));
        setPokemons(pokemonData);
        setPokemonActiu(pokemonData[0])
        setIdPokemon(pokemonData[0].id)
    };
    getPokemon();
}, []);

const toggleView = () => {
  setIsFrontView(!isFrontView);
    };

useEffect(() => {
    setIdPokemon(pokemonActiu?.id);
}, [pokemonActiu]);

  return (
    <div className="Pantalla">
      <header className="partdalt">
        <h1 className="Primer">
          <img
           className='Poke1'
           src={isFrontView ? pokemonActiu?.sprites?.other?.showdown?.front_default : pokemonActiu?.sprites?.other?.showdown?.back_default} 
           onClick={toggleView} onDoubleClick={pokemonActiu?.sprites?.other?.showdown?.front_shiny}
          /> 
        </h1>
          <h2 className="lineapoke">
            <img className='boleta'src={ball}/> 
            <div className="nombrenom">
                <span>{pokemonActiu?.name}</span> 
            </div>
          </h2>
        
      </header>
      <div className="partbaixa">
  {pokemons?.map((pokemon) => (
    <div className="botonet" key={pokemon.id}>  
      <button className="llista" onClick={() => setPokemonActiu(pokemon)}>
        <img className="boleta2" src={ball} alt="Pokeball" /> 
        <span>No{pokemon.id} {pokemon.name}</span>
      </button>
    </div>
  ))}
</div>
    </div>
  );

}

export default Home;