import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {

  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(()=>{
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'products');

    if(id){
    const queryFilter = query(queryCollection, where('categoryID', '==', id));
    getDocs(queryFilter).then((res)=> setItem(res.docs.map((p)=>({id: p.id, ...p.data()})))
    );
    }else{
      getDocs(queryCollection).then((res)=> setItem(res.docs.map((p)=>({id: p.id, ...p.data()})))
    );
    }
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