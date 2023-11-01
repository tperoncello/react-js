import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function loadProductDetails(id) {
  return new Promise((resolve, reject) => {
    // Realiza una solicitud para obtener los detalles del producto usando el `id`
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProductDetails(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error('Error al obtener detalles del producto:', error);
      });
  }, [id]);

  return (
    <ItemDetail product={product} />
  );
}

export default ItemDetailContainer;
