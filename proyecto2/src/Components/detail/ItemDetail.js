import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemContent'; // Asegúrate de que la ruta de importación sea correcta

function ItemDetail({ match }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Aquí haces una solicitud para obtener los detalles del producto
    // Puedes usar fetch o axios u otra librería para hacer la solicitud a tu API
    fetch(`URL_DE_TU_API/productos/${match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error('Error al obtener detalles del producto:', error);
      });
  }, [match.params.id]);

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

      {/* Aquí puedes agregar el componente ItemCount si es relevante */}
      <ItemCount stockItems={product.stock} />
    </div>
  );
}

export default ItemDetail;
