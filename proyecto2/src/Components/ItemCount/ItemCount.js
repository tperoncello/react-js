import React, { useState } from "react";
import "./CartCount.css";

function ItemCount({ cartItemCount, setCartItemCount }) {
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]);

  const incrementarStock = () => {
    setCounter(counter + 1);
  };

  const decrementarStock = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const addToCart = () => {
    if (counter > 0) {
      const product = {
        name: "Producto",
        quantity: counter,
      };
      setCart([...cart, product]);
      setCounter(0);
      const newCartItemCount = cartItemCount + counter;
      setCartItemCount(newCartItemCount);
    } else {
      setCounter(1);
    }
  };

  return (
    <div className="container" id="itemcount">
      {counter === 0 && (
        <div className="row">
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={addToCart}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
      {counter > 0 && (
        <div className="row">
          <div className="col-md-2">
            <div
              className="btn-group-fixed-width"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="btn btn-outline-primary dieta"
                onClick={decrementarStock}
              >
                -
              </button>
              <button type="button" className="btn btn-outline-primary dieta">
                {counter}
              </button>
              <button
                type="button"
                className="btn btn-outline-primary dieta"
                onClick={incrementarStock}
              >
                +
              </button>
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
}

export default ItemCount;
