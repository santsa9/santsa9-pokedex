//import portada from '../images/portada.jpg'; // Remove this line
import '../css/Home.css'; 
import torchic from '../images/torchic.png';
import ball from '../images/ball.png';
import React, { useEffect,useState } from 'react';
import { getElements } from './API';


function Home({setIdPokemon}) {
  
  const [pokemons, setPokemons] = useState(null);
  const [pokemonActiu, setPokemonActiu] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
        const { result } = await getElements("https://pokeapi.co/api/v2/pokemon?offset=0&limit=386");
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

  return (
    <div className="Pantalla">
      
      <header className="partdalt">
        <h1 className="Primer">
          <img className='Poke1'src={pokemonActiu?.sprites.front_default}/> 
        <h2 className="lineapoke">
          <img className='boleta'src={ball}/> 
          <div className="nombrenom">
              <span>{pokemonActiu?.name}</span> 
              <h1>Prova</h1>
              {/* No{pokemonActiu?.id} */}
          </div>

          </h2>
        </h1>
      </header>

      
      <div className="partbaixa">
  {pokemons?.map((pokemon) => (
    <div className="botonet" key={pokemon.id}>  {/* Added key prop */}
      <button className="llista" onClick={() => setPokemonActiu(pokemon)}>
        <img className="boleta2" src={ball} alt="Pokeball" /> {/* Image inside button */}
        <span>No{pokemon.id} {pokemon.name}</span>
      </button>
    </div>
  ))}
</div>


    </div>
  );

}

export default Home;