import React, { useState, useEffect } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartCount from './Contador/CartCount';

function ItemContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=producto')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []);

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


