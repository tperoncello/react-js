import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function CardWidget({ fontSizeClass, circleContent }) {
  return (
    <div className="cart ml-3">
      <button className="btn btn-primary btn-cart">
        <i className="bi bi-cart"></i>
      </button>
      <span className={`cart-count ${fontSizeClass}`}>{circleContent}</span>
    </div>
  );
}

export default CardWidget;
