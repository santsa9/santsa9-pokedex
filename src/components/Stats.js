import React, { useEffect, useState } from 'react';
import { getElements } from './API';
import { useParams } from 'react-router-dom';
import '../css/Stats.css';

function Pokemon(props) {
  const [pokemons, setPokemons] = useState(null);
  const [pokemonActiu, setPokemonActiu] = useState(null);
  const [isFrontView, setIsFrontView] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      const response = await getElements(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemonActiu(response.result);
    };
    getPokemon();
    props.setIdPokemon(parseInt(id));
  }, [id]);

  useEffect(() => {
    if (props.idPokemon == null) {
      props.setIdPokemon(parseInt(id));
    }
  }, [props.idPokemon]);

  const toggleView = () => {
    setIsFrontView(!isFrontView);
  };

  return (
    <div className="Pantalla">
      {/* <h2>Pokémon Stats</h2> */}
      {pokemonActiu ? (
        <div className="stats">
          <div className="nom">{pokemonActiu.name}</div>
          <div className='containerimg'>
            <img
              className="imatgepokem"
              src={
                isFrontView
                  ? pokemonActiu?.sprites?.other?.showdown?.front_default
                  : pokemonActiu?.sprites?.other?.showdown?.back_default
              }
              onClick={toggleView}
            />
           </div>
          <div className="abilities_div">
            <div className='abilities_container'>
              <div className='tipusabilities'>Abilities</div>
              {pokemonActiu?.abilities?.map((ability) => (
                <div key={ability.ability.name}>{ability.ability.name}</div>
              ))}
            </div>
            <div className="llistastats">
              <div className='tipusstats'>Base stats</div>
              {pokemonActiu.stats.map((stat) => (
                <div key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </div>
              ))}
             </div>
            <div className="moves_div">
              <div className='tipusmoves'>Moves</div>
              {pokemonActiu.moves.map((move, index) => (
                <div key={index}>{move.move.name}</div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="Pantalla" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '75%', width: '80%' }}>
        <div className="loader"></div>
      </div>
      )}
    </div>
  );
}

export default Pokemon;
