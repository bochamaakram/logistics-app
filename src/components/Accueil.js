import React from 'react';
import Vidange from "./Vidange";
import './Accueil.css';
import LivraisonsCharts from "./LivraisonsCharts";
import { Link } from 'react-router-dom';
export default function Accueil() {
  return (
    <><div className="Accueil">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: '350px', minHeight: '100vh' }}>
        <h4><Link className="nav-link" to="/Dashboard">Tableau de bord</Link></h4>
        <ul className="list-unstyled">
          <li><Link className="nav-link" to="/Dashboard#Chauffeurs">Chauffeurs</Link></li>
          <li><Link className="nav-link" to="/Dashboard#Camions">Camions</Link></li>
          <li><Link className="nav-link" to="/Dashboard#Clients">Clients</Link></li>
          <li><Link className="nav-link" to="/Dashboard#Produits">Produits</Link></li>
          <li><Link className="nav-link" to="/">Accueil</Link></li>
          <li><Link className="nav-link" to="/ListeDesLivraison">List Des Livraison</Link></li>
          <li><Link className="nav-link" to="/ProgrammeDeLivraison">Programme De Livraison</Link></li>
        </ul>
      </div>
      <div>
        <LivraisonsCharts/>
        <h1>surveiller la vidange</h1>
        <Vidange />
        </div>
    </div>
    <div className='No'>
      <p>⚠️ Cette page a été conçue pour être utilisée sur PC et non sur les téléphones portables</p>
    </div>
    </>
  );
}