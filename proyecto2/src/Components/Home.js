import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';

function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Bootstrap 5 no necesita el atributo 'data-toggle'
    // Se activa automáticamente por Bootstrap JS

    // Asegúrate de que el archivo JavaScript de Bootstrap se haya importado correctamente.

    // Agregar un controlador de eventos de clic al documento para cerrar el menú en clics fuera del menú.
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

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const cantidadEnCarrito = 100; // Cambia esto según la cantidad real
  const circleContent = cantidadEnCarrito >= 100 ? "99+" : cantidadEnCarrito;
  const fontSizeClass = cantidadEnCarrito >= 100 ? "large" : "";

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Smart Life</a>
          <div className="navbar-nav ml-auto button-container">
            <button className="btn btn-light btn-filter">Televisores</button>
            <button className="btn btn-light btn-filter">Cámaras</button>
            <button className="btn btn-light btn-filter">Celulares</button>
            <button className="btn btn-light btn-filter">Auriculares</button>
            <div className="btn-group" ref={dropdownRef}>
              <button
                type="button"
                className="btn btn-light btn-filter"
                onClick={toggleDropdown}
              >
                Otros
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu show">
                  <a className="dropdown-item" href="#" onClick={closeDropdown}>
                    Opción 1
                  </a>
                  <a className="dropdown-item" href="#" onClick={closeDropdown}>
                    Opción 2
                  </a>
                  <a className="dropdown-item" href="#" onClick={closeDropdown}>
                    Opción 3
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="cart ml-3">
            <button className="btn btn-primary btn-cart">
              <i className="bi bi-cart"></i>
            </button>
            <span className={`cart-count ${fontSizeClass}`}>{circleContent}</span>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <h1 className="text-center">Bienvenido a la Página de Inicio</h1>
      </div>
    </div>
  );
}

export default Home;

