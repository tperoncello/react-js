import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';


function Home() {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      // Eliminar el controlador de eventos al desmontar el componente.
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDocumentClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };



  return (
    <div className="container mt-4">

        <h1 className="text-center">Bienvenido a la Página de Inicio</h1>
      </div>
  );

  
}


export default Home;