import React, { useState,} from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartCount from './ItemCount/ItemCount';

function ItemContainer() {
  const [products,] = useState([]);

  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center align-items-center">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card custom-card" style={{ margin: '0' }}>
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body" to={`/product/${product.id}`}>
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{`Price: $${product.price}`}</p>
                <CartCount />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemContainer;


