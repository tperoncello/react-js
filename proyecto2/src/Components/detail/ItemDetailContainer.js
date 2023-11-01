

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'; // Asegúrate de que la ruta sea correcta

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // Lógica para obtener los detalles del ítem basado en el ID
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container mt-4">
      <Link to="/">Volver</Link> {/* Botón para volver atrás a la lista de ítems */}
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-4 col-md-6">
          <div className="card" style={{ width: '18rem' }}>
            <img src={item.thumbnail} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{`Price: $${item.price}`}</p>
              {/* Agrega aquí más detalles del ítem si es necesario */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
