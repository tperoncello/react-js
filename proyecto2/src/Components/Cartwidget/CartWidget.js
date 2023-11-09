import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import counter from '../ItemCount/ItemCount';

function CartWidget({ fontSizeClass, counter }) {
  return (
    <div className="cart ml-3">
      <Link to="/cardmj">
        <button className="btn btn-primary btn-cart">
          <i className="bi bi-cart"></i>
        </button>
      </Link>
      <span className={`cart-count ${fontSizeClass}`}> 0 </span>
    </div>
  );
}

export default CartWidget;



