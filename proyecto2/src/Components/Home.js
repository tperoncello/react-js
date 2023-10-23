import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';

function Home() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      image: 'https://picsum.photos/200/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      image: 'https://picsum.photos/200/150',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      image: 'https://picsum.photos/200/150',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4',
      image: 'https://picsum.photos/200/150',
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description of Product 5',
      image: 'https://picsum.photos/200/150',
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description of Product 6',
      image: 'https://picsum.photos/200/150',
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Description of Product 7',
      image: 'https://picsum.photos/200/150',
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description of Product 8',
      image: 'https://picsum.photos/200/150',
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'Description of Product 9',
      image: 'https://picsum.photos/200/150',
    },
    {
      id: 10,
      name: 'Product 10',
      description: 'Description of Product 10',
      image: 'https://picsum.photos/200/150',
    },
    {
      id: 11,
      name: 'Product 11',
      description: 'Description of Product 11',
      image: 'https://picsum.photos/200/150',
    },
    {
      id: 12,
      name: 'Product 12',
      description: 'Description of Product 12',
      image: 'https://picsum.photos/200/150',
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center align-items-center">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
