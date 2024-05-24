import React from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import Stats from "./components/Stats";

const routes = (idPokemon, setIdPokemon) => [
    {
        path: "/",
        element: <Layout idPokemon={idPokemon}/>,
        children: [
            { path: "/", element: <Home setIdPokemon={setIdPokemon}/> },
            { path: "/pokemon/:id", element: <Pokemon idPokemon={idPokemon} setIdPokemon={setIdPokemon}/> },
            { path: "/stats/:id", element: <Stats idPokemon={idPokemon} setIdPokemon={setIdPokemon}/>}
        ],
    },
];

export default routes;