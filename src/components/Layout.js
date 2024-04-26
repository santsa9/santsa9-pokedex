import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';

const Layout = ({idPokemon}) => {
    return (
        <div>
            <Outlet />
            <Menu idPokemon={idPokemon}/>
        </div>
    );
};
export default Layout;