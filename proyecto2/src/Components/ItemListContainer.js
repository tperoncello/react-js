import React from 'react';
import './Home.css'

function ItemListContainer({ greeting }) {
  return (
    <div>

      <h1 className="text-center mt-4">{greeting}</h1>
      <p className="text-center">Explora nuestra selección de productos:</p>
    </div>
  );
}

export default ItemListContainer;