import React from 'react';
import HomePage from './Components/Home'; // Importa el componente Home desde el archivo correcto
import './App.css';
import NavBarPage from './Components/NavBar';

function App() {

  return (
    <div className="app">
      <NavBarPage/> {}
      <HomePage /> {/* Renderiza el componente HomePage */}
    </div>
  );
}

export default App;