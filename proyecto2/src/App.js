import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBarC/NavBar';
import HomePage from './Components/Home';
import ItemListContainer from './Components/MensajesInicio/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Error404 from '../src/Components/Error404';  // Corrige la ruta del componente Error404
import CardMj from '../src/Components/MensajesInicio/CardMj';
import Televisores from './Components/MensajesInicio/Televisores';
import Camaras from './Components/MensajesInicio/Camaras';
import Celulares from './Components/MensajesInicio/Celulares';
import Auriculares from './Components/MensajesInicio/Auriculares';
import Consolas from './Components/MensajesInicio/Consolas'; 
import Computacion from './Components/MensajesInicio/Computacion';
import ItemDetailContainer from './Components/detail/ItemDetailContainer';
import ItemDetail from './Components/detail/ItemDetail'; // Ajusta la ruta a la ubicación correcta de ItemDetail





function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />} />
          <Route path="/category/:id" element={<ItemListContainer />} />

          {/* Ruta para los detalles del producto */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemDetail />} />
        
          <Route path="/televisores" element={<Televisores />} />
          <Route path="/camaras" element={<Camaras />} />
          <Route path="/celulares" element={<Celulares />} />
          <Route path="/auriculares" element={<Auriculares />} />
          <Route path="/consolas" element={<Consolas />} />
          <Route path="/computacion" element={<Computacion />} />

          <Route path="/cardmj" element={<CardMj />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        
        {/* Elimina el componente HomePage del BrowserRouter y colócalo fuera */}
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
