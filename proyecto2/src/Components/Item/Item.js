import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
  return (
    <Link to={'/item/' + item.id} className='text-decoration-none'>
      <div className='container contenedor'>
        <div className='card border'>
          <img src={item.Img} className='card-img-top' alt={item.title} />
          <div className='card-body text-center'>
            <p className='card-text'>{item.title} - $ {item.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;