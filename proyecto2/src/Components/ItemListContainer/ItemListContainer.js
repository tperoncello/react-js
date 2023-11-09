import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../Json/arrayProductos.json';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'; // Importa el archivo CSS

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(id ? arrayProductos.filter((item) => item.categoria === id) : arrayProductos);
          }, 1300);
        });
        setItem(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchData();
  }, [id]);

  const getCategoryGreeting = (category) => {
    switch (category) {
      case 'Celulares':
        return '¡Descubre nuestra selección de celulares!';
      case 'notebooks':
        return '¡Explora nuestras increíbles notebooks!';
      case 'Auriculares':
        return '¡Sumérgete en el mundo del sonido con nuestros auriculares!';
      case 'Televisores':
        return '¡Transforma tu experiencia visual con nuestros televisores!';
      case 'Cámaras':
        return '¡Captura momentos inolvidables con nuestras cámaras!';
      case 'Consolas':
        return '¡Disfruta de la última generación de consolas de videojuegos!';
      default:
        return '¡Descubre nuestra amplia variedad de productos!';
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <h2>{getCategoryGreeting(id)}</h2>
        <ItemList item={item} />
      </div>
    </div>
  );
};

export default ItemListContainer;