import React from 'react';
import CardWidget from './CardWidget';
import './Home'
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavBar()
 {
<CardWidget fontSizeClass="someClass" circleContent="4" />


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Smart Life
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="dropdown" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Otros
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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



