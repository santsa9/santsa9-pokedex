import React from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";

const routes = (idPokemon, setIdPokemon) => [
    {
        path: "/",
        element: <Layout idPokemon={idPokemon}/>,
        children: [
            { path: "/", element: <Home setIdPokemon={setIdPokemon}/> },
            { path: "/pokemon/:id", element: <Pokemon /> }
        ],
    },
];

export default routes;