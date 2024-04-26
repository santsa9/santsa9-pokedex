//import portada from '../images/portada.jpg'; // Remove this line
import '../css/Pokemon.css'; 
import ball from '../images/ball.png';
import React, { useEffect,useState } from 'react';
import { getElements } from './API';
import { useParams } from 'react-router-dom';
// http://localhost:3001/pokemon/1 pagina per a veure els pokemons a react

function Pokemon(props) {
  
  const [pokemons, setPokemons] = useState(null);
  const [pokemonActiu, setPokemonActiu] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const getPokemon = async () => {
        const { result } = await getElements("https://pokeapi.co/api/v2/pokemon/"+id);
        setPokemonActiu(result)
    };
    getPokemon();
}, []);

  return (
    <div className="Pantalla">
        <img className='Imatgepok'src={pokemonActiu?.sprites.front_default}/> 
        
        <div className='nompok'>
          {pokemonActiu?.name}  
          {/*AAAAAAAAAAAAAAAAAAAA a la pokeapi buscar pokemon-species/1/ flavor txt */}
        </div> 
        <div className='tipus'> 
          {/* <h1 className='tipus_estil'>{pokemonActiu?.types?.map((ti, index) => {
          return <h6 key={index}>{ti.type.name}</h6>;
        })} 
          </h1> */}
        <div className='descripcio'>
          {pokemonActiu?.flavor_text_entries?.map}
        </div >
                    {/* <h3 className="mesures">
              <div className="alcada">Height: {pokemonActiu?.height}0 cm</div>
              <div className="alcada">Weight: {pokemonActiu?.weight} kg</div>
              <div className="alcada">Type: {pokemonActiu?.type}</div> de moment ho trec, anirà a la segona pàgina
            </h3> */}

        </div>
    
    </div>
  );

}

export default Pokemon;

