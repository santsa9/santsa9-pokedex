import pokebola from '../images/pokeball.png';
import "../css/Menu.css";
import React, { useEffect, useState } from 'react';
import { getElements } from './API'; // Assuming this fetches Pokemon data
import { useNavigate } from 'react-router-dom';

function Menu({ idPokemon }) {
  const navigate = useNavigate();

  const handleNavigateToPokemon = (direction) => {
    if (direction === 'next') {
      navigate(`/pokemon/${idPokemon + 1}`);
    } else if (direction === 'prev') {
      navigate(`/pokemon/${Math.max(idPokemon - 1, 1)}`); // Ensure we don't navigate below Pokemon 1
    }
  };

  return (
    <div className="Menu">
      <div className="Cap"></div>
      <div className="Negre">
        {/* Display logic based on current pathname (consider using a state variable for efficiency) */}
      </div>

      <button className="gris1" onClick={() => handleNavigateToPokemon('next')}>
        {/* Consider adding an icon or label for clarity */}
      </button>
      <button className="gris2" onClick={() => handleNavigateToPokemon('prev')}>
        {/* Consider adding an icon or label for clarity */}
      </button>

      <button className="red" onClick={() => navigate('/')}>
        {/* Consider adding an icon or label for "Home" */}
      </button>
      <button className="verd" onClick={() => navigate(`/stats/${idPokemon}`)}>
        {/* Consider adding an icon or label for "Stats" */}
      </button>

      <div className="bolagran">
        <button className="Bola" onClick={() => navigate(`/pokemon/${idPokemon}`)}>
          {/* Consider using a Pokeball image for better visual representation */}
        </button>
      </div>
    </div>
  );
}

export default Menu;
