import React, { useState } from "react";
import "./CartCount.css"; // Importa el archivo CSS

const CartCount = ({ stockItems }) => {
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]); // Estado para mantener los productos en el carrito

  const incrementarStock = () => {
    setCounter(counter + 1);
  };

  const decrementarStock = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const addToCart = () => {
    if (stockItems >= counter) {
      const product = {
        name: "Producto", // Puedes usar el nombre del producto real aquí
        quantity: counter,
      };
      setCart([...cart, product]);
      setCounter(0); // Reiniciar el contador a 0 después de agregar al carrito
    } else {
      setCounter(1); // Sumar uno al contador si no hay ningún artículo
    }
  };

  return (
    <div className="container" id="itemcount">
      {counter === 0 && (
        <div className="row">
          <div className="col-md-2">
            <button type="button" className="btn btn-outline-primary" onClick={addToCart}>
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
      {counter > 0 && (
        <div className="row ">
          <div className="col-md-2">
            <div className="btn-group-fixed-width" role="group" aria-label="Basic outlined example">
              <button type="button" className="btn btn-outline-primary dieta" onClick={decrementarStock}>-</button>
              <button type="button" className="btn btn-outline-primary dieta">{counter}</button>
              <button type="button" className="btn btn-outline-primary dieta" onClick={incrementarStock}>+</button>
            </div>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div className="row">
          <div className="col-md-12">
            <p>Artículos en el carrito: {cart.length}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCount;    

