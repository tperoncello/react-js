import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  };

  return (
    <div className='item-detail'>
      <h2 className='item-title'>{item.title}</h2>
      <div className='item-content'>
        <div className='item-images'>
          <img src={item.Img} alt={item.title} />
        </div>
        <div className='item-details'>
          <p className='item-price'>$ {item.price}</p>
          <p className='item-description'>{item.description}</p>
          <div className='item-actions'>
            <ItemCount stock={10} initial={0} onAdd={onAdd} />
            <Link to="/cart">
              <button className="btn btn-primary btn-cart">
                Terminar compra
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
