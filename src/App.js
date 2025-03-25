import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './components/Accueil';
import Dashboard from "./components/Dashboard";
import ProgrammeDeLivraison from "./components/ProgrammeDeLivraison";
import ListeDesLivraison from "./components/ListeDesLivraison";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
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
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ProgrammeDeLivraison" element={<ProgrammeDeLivraison />} />
          <Route path="/ListeDesLivraison" element={<ListeDesLivraison />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;