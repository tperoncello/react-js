import React from 'react';
import NavBarPage from './Components/NavBar';
import HomePage from './Components/Home';
import ItemListContainer from './Components/ItemListContainer'; // Importa el componente ItemListContainer
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="app">
      <NavBarPage />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" /> {/* Pasa la prop greeting */}
      <HomePage />
    </div>
  );
}

export default App;
