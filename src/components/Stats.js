import React, { useEffect, useState } from 'react';
import { getElements } from './API';
import { useParams } from 'react-router-dom';
import '../css/Stats.css';
import ball from '../images/ball.png';

function StatBar({ name, value }) {
  // Calculate the width of the bar based on the stat value
  const width = `${(value / 255) * 100}%`;

  // Determine the color of the bar based on the stat value
  let color = 'green';
  if (value < 60) {
    color = 'red';
  } else if (value < 120) {
    color = 'orange';
  }

  return (
    <div className="stat-bar">
      <div className="stat-name">{name}</div>
      <div className="bar" style={{ width, backgroundColor: color }}></div>
      <div className="stat-value">{value}</div>
    </div>
  );
}

function Stats(props) {
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
      {pokemonActiu ? (
        <div className="stats">
        <div className="nompok2">
          <img className='boleta'src={ball}/> 
            {pokemonActiu?.name}
      </div>
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
            <div className="llistahabs">
              <div className='tipusabilities'>Abilities</div>
                <div className= 'llistatha'>
                {pokemonActiu?.abilities?.map((ability) => (
                  <div key={ability.ability.name}>{ability.ability.name}</div>
                ))}
              </div>
            </div>

            <div className="llistastats">
              <div className='tipusstats'>Base stats</div>
                <div className='conjuntstats'>
                  {pokemonActiu.stats.map((stat) => (
                    <StatBar key={stat.stat.name} name={stat.stat.name} value={stat.base_stat} />
                  ))}
                </div>
            </div>

            <div className="moves_div">
              <div className='tipusmoves'>Moves</div>
                <div className='conjuntmovs'>
                  {pokemonActiu.moves.map((move, index) => (
                  <div key={index}>{move.move.name}</div>
                  ))}
                </div>
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

export default Stats;
