import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBarC/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './Components/Error404';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Components/Context/CartContext';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import loading from './Components/loading/loading';
import './App.css'; 

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <loading loadingDelayHidden={1000} />
          <Routes>
            <Route path={'/'} element={<ItemListContainer />} />
            <Route path={'/category/:id'} element={<ItemListContainer />} />
            <Route path={'/item/:id'} element={<ItemDetailContainer />} />
            <Route path={'*'} element={<Error404 />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;