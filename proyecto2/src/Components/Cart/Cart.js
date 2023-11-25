import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import app from '../Firebase/Config';
import CheckOut from '../CheckOut/CheckOut';

function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartCollection = collection(app.firestore(), 'products');
        const cartSnapshot = await getDocs(cartCollection);
        const cartData = cartSnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((product) => product.__collections__.articulos_en_carrito > 0);

        setCart(cartData);

        // Calcular el precio total
        const total = cartData.reduce((acc, product) => {
          return acc + product.price * parseInt(product.__collections__.articulos_en_carrito);
        }, 0);

        setTotalPrice(total);
      } catch (error) {
        console.error('Error obteniendo productos del carrito:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-4">Carrito de Compras</h1>
      <div className="row">
        {cart.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.Img} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Precio: ${product.price}</p>
                <p className="card-text">Cantidad: {product.__collections__.articulos_en_carrito}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <h4>Total a Pagar: ${totalPrice}</h4>
        <CheckOut />
      </div>
    </div>
  );
}

export default Cart;
