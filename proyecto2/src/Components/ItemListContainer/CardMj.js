import React, { useEffect, useState } from 'react';
import '../Home.css';
import arrayProductos from '../Json/arrayProductos.json';
import Item from '../Item/Item';

function CardMj() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        
        const data = await new Promise((resolve) => {
          setTimeout(() => {
           
            const cartItemIds = [1, 3, 5];
            const cartItemsFromJson = arrayProductos.filter((item) => cartItemIds.includes(item.id));
            resolve(cartItemsFromJson);
          }, 1300);
        });

        setCartItems(data);
      } catch (error) {
        console.log('Error obteniendo productos del carrito:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-4">Carrito</h1>
      {cartItems && cartItems.length > 0 ? (
        <div>
          <p className="text-center">Estos son todos tus productos en el carrito:</p>
          <div className="row">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <Item item={item} />
                <p className="text-center">Cantidad en el carrito: {item.articulos_en_carrito}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center">No hay productos en el carrito.</p>
      )}
    </div>
  );
}

export default CardMj;
