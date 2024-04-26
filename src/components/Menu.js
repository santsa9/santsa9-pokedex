import pokebola from '../images/pokeball.png';
import "../css/Menu.css";
import React, { useEffect,useState } from 'react';
import { getElements } from './API';
import { useNavigate } from 'react-router-dom';

function Menu({idPokemon}) {

  const navigate = useNavigate();

  return (
    <div className="Menu">
      <div className="Cap"></div>
      <div className="Negre">
        <button className="gris1"></button>
        <button className="gris2"></button>
        <button className="red"></button>
        <button className="verd"></button>
        <button className="Bola" onClick={() => {navigate('pokemon/'+idPokemon)}}></button>
      </div>
    </div>
  );
}

export default Menu;
