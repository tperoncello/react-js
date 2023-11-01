import React from 'react';

function ItemDetail({ product }) {
  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock}</p>
      {/* Agrega cualquier otra información sobre el producto que desees mostrar */}
    </div>
  );
}

export default ItemDetail;

