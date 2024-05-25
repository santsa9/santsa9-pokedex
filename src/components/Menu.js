import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import pokebola from '../images/pokeball.png';
import '../css/Menu.css';

function Menu({ idPokemon }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateToPokemon = (direction) => {
    if (direction === 'next') {
      navigate(`/pokemon/${idPokemon + 1}`);
    } else if (direction === 'prev') {
      navigate(`/pokemon/${Math.max(idPokemon - 1, 1)}`); // Ensure we don't navigate below Pokemon 1
    }
  };

  const handleNavigateToStats = (direction) => {
    if (direction === 'next') {
      navigate(`/stats/${idPokemon + 1}`);
    } else if (direction === 'prev') {
      navigate(`/stats/${Math.max(idPokemon - 1, 1)}`); // Ensure we don't navigate below Pokemon 1
    }
  };

  const isPokemonPage = location.pathname.startsWith('/pokemon');
  const isStatsPage = location.pathname.startsWith('/stats');

  return (
    <div className="Menu">
      <div className="Cap"></div>
      <div className="Negre">
      </div>

      <button
        className="gris1"
        onClick={() => {
          if (isPokemonPage) {
            handleNavigateToPokemon('next');
          } else if (isStatsPage) {
            handleNavigateToStats('next');
          }
        }}
      >
      </button>
      <button
        className="gris2"
        onClick={() => {
          if (isPokemonPage) {
            handleNavigateToPokemon('prev');
          } else if (isStatsPage) {
            handleNavigateToStats('prev');
          }
        }}
      >
      </button>

      <button className="red" onClick={() => navigate('/')}>
      </button>
      <button className="verd" onClick={() => navigate(`/stats/${idPokemon}`)}>
      </button>

      <div className="bolagran">
        <button className="Bola" onClick={() => navigate(`/pokemon/${idPokemon}`)}>
        </button>
      </div>
    </div>
  );
}

export default Menu;