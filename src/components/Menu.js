import pokebola from '../images/pokeball.png';
import "../css/Menu.css";
import React, { useEffect,useState } from 'react';
import { getElements } from './API';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Menu({idPokemon}) {

  const navigate = useNavigate();

  return (
    <div className="Menu">
      <div className="Cap"></div>
      <div className="Negre">
      {/* avançar1 i restar1 */}
        <button className="gris1"></button>
        <button className="gris2"></button>
        {/* botó vermell ens torna a la pagina principal */}
        <button className="red" onClick={() => {navigate('/')}}></button> 
        <button className="verd"></button>
      </div>
      <div className='bolagran'>
        {/* al fer click la pokeball gran anem a la seguent pàgina */}
        <button className="Bola" onClick={() => {navigate('pokemon/'+idPokemon)}}></button> 
      </div>
    </div>
  );
}

export default Menu;