import React from 'react';
import '../Home.css'

function CardMj({ greeting }) {
  return (
    <div>

      <h1 className="text-center mt-4">{greeting}Carrito</h1>
      <p className="text-center">Estos son todos tus productos en el carrito</p>
    </div>
  );
}

export default CardMj;