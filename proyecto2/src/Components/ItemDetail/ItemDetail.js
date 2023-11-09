import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item, stockItems }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (quantity) => {
    setCartCount(cartCount + quantity);
    // Puedes agregar aquí la lógica para agregar los productos al carrito
    // por ejemplo, guardarlos en un estado del componente padre.
    // También puedes mostrar una alerta aquí si lo deseas.
  };

  return (
    <div className='item-detail'>
      <div className='item-images'>
        <img src={item.imagen} alt={item.nombre} />
      </div>
      <div className='item-details'>
        <h2 className='item-title'>{item.nombre}</h2>
        <p className='item-description'>{item.descripcion}</p>
        <p className='item-price'>$ {item.precio}</p>
        <p className='item-stock'>Cantidad disponible: {item.stock}</p>
        <div className='item-actions'>
          <ItemCount stockItems={stockItems} onAddToCart={handleAddToCart} />
          
          <Link to="/cardmj" className='buy-button'>Comprar</Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;



