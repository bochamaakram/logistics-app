import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><button><img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} /></button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Dashboard">Tableau de bord</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ListeDesLivraison">List Des Livraison</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ProgrammeDeLivraison">Programme De Livraison</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;