import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../Cartwidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Home.css';

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(0);

  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const toggleDropdown = (menuId) => {
    if (menuId === selectedDropdown) {
      setIsDropdownOpen(!isDropdownOpen);
      setSelectedDropdown(null);
    } else {
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

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setSelectedDropdown(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Smart Life
        </Link>
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
              <Link className="nav-link" to="/" onClick={closeDropdown}>
                Todos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category/Celulares"} onClick={closeDropdown}>
                Celulares
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category/Televisores"} onClick={closeDropdown}>
                Televisores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category/Consolas"} onClick={closeDropdown}>
                Consolas
              </Link>
            </li>
            <li className="nav-item dropdown" ref={dropdownRef}>
              <Link
                className={`nav-link dropdown-toggle ${selectedDropdown === 'otros' ? 'active' : ''}`}
                role="button"
                onClick={() => toggleDropdown('otros')}
              >
                Otros
              </Link>
              <ul className={`dropdown-menu ${isDropdownOpen && selectedDropdown === 'otros' ? 'show' : ''}`} aria-labelledby="otros">
                <li>
                  <Link className="dropdown-item" to={"/category/notebooks"} onClick={closeDropdown}>
                    Computación
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/category/Cámaras"} onClick={closeDropdown}>
                    Cámaras
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/category/Auriculares"} onClick={closeDropdown}>
                    Auriculares
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
