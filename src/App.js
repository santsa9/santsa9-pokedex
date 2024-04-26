import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { useState } from 'react';

function App() {

  const [idPokemon, setIdPokemon] = useState(null);
  const routing = useRoutes(routes(idPokemon, setIdPokemon));


  return (
    <div className="App">
      {routing}

    </div>
  );
}

export default App;