import React, { useEffect, useState, useRef } from 'react';
import CardWidget from './CardWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Agregar Bootstrap JavaScript

function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedDropdown, setSelectedDropdown] = useState(null); // Agregar estado para el menú seleccionado
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      document.addEventListener('click', handleDocumentClick);
  
      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, []);
  
    const toggleDropdown = (menuId) => {
      if (menuId === selectedDropdown) {
        // Si se hace clic en el mismo menú, ciérralo
        setIsDropdownOpen(!isDropdownOpen);
        setSelectedDropdown(null);
      } else {
        // Si se hace clic en un menú diferente, cierra el anterior y abre el nuevo
        setIsDropdownOpen(true);
        setSelectedDropdown(menuId);
      }
    };
  
    const handleDocumentClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
        setSelectedDropdown(null);
      }
    };
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Smart Life
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ml-auto button-container">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Televisores
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cámaras
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Celulares
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Auriculares
                </a>
              </li>
              <li className="nav-item dropdown" ref={dropdownRef}>
                <a
                  className={`nav-link dropdown-toggle ${selectedDropdown === 'otros' ? 'active' : ''}`}
                  href="#"
                  id="otros"
                  role="button"
                  onClick={() => toggleDropdown('otros')}
                >
                  Otros
                </a>
                <ul className={`dropdown-menu ${isDropdownOpen && selectedDropdown === 'otros' ? 'show' : ''}`} aria-labelledby="otros">
                  <li>
                    <a className="dropdown-item" href="#">
                      Opción 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Opción 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Opción 3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <CardWidget fontSizeClass="tuClaseDeFuente" circleContent={4} />
        </div>
      </nav>
    );
  }
  
  export default NavBar;