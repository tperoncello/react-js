import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './Components/NavBarC/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Error404 from "./Components/Error404";
import CardMj from "./Components/ItemListContainer/CardMj";


function App() {
  return (
        <div >      
          <BrowserRouter >
            <NavBar />
            <Routes>
              <Route path={"/"} element={<ItemListContainer />} />
              <Route path={"/category/:id"} element={<ItemListContainer />} />
              <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
              <Route path={"*"} element={<Error404 />} />
              <Route path="/cardmj" element={<CardMj />} />
            </Routes>           
          </BrowserRouter>
        </div>
  );
}

export default App;