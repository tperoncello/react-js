import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id} className='text-decoration-none'>
      <div className='container contenedor'>
        <div className='card border'>
          <img src={item.imagen} className='card-img-top' alt={item.nombre} />
          <div className='card-body text-center'>
            <p className='card-text'>{item.nombre}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
