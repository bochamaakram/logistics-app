import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ProgrammeDeLivraison = () => {
  const [livraisons, setLivraisons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [livraisonsResponse] = await Promise.all([
          axios.get("http://localhost:3000/api/livraisons"),
        ]);

        setLivraisons(livraisonsResponse.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5">Error: {error}</div>;

  // Check if there are no deliveries
  if (livraisons.length === 0) {
    return <div className="text-center mt-5">Aucune livraison</div>;
  }

  // Group livraisons by Matricule, Date_de_Livraison, and Ville_de_Livraison
  const groupedLivraisons = livraisons.reduce((acc, livraison) => {
    const key = `${livraison.Matricule}-${livraison.Date_de_Livraison}-${livraison.Ville_de_Livraison}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(livraison);
    return acc;
  }, {});

  return (
    <div className="container-fluid mt-5">
      {Object.keys(groupedLivraisons).map((key) => (
        <div key={key} className="mb-5">
          <p className="mb-3">
            Matricule: {groupedLivraisons[key][0].Matricule} 
            <br/>Date de Livraison:{" "}
            {formatDate(groupedLivraisons[key][0].Date_de_Livraison)}
            <br/>Ville de Livraison:{" "}
            {groupedLivraisons[key][0].Ville_de_Livraison}
          </p>
          <table className="table table-bordered">
            <thead className="thead-primary">
              <tr>
                <th>Numéro de Commande Client</th>
                <th>Numéro de Commande Camiverre</th>
                <th>Client</th>
                <th>N°Télé Client</th>
                <th>Composition</th>
                <th>Adresse de Livraison</th>
                <th>Quantité</th>
                <th>épaisseur</th>
                <th>hauteur</th>
                <th>largeur</th>
                <th>poids</th>
                <th>Commercial</th>
                <th>Kilométrage</th>
                <th>Gasoil</th>
                <th>Chauffeur</th>
                <th>Remarque</th>
              </tr>
            </thead>
            <tbody>
              {groupedLivraisons[key].map((livraison) => (
                <tr key={livraison.id}>
                  <td>{livraison.num_command_client}</td>
                  <td>{livraison.num_commande_cami}</td>
                  <td>{livraison.nom_client}</td>
                  <td>{livraison.tel_client}</td>
                  <td>{livraison.Produits}</td>
                  <td>{livraison.adresse_de_Livraison}</td>
                  <td>{livraison.quantité}</td>
                  <td>{livraison.épaisseur_total}mm</td>
                  <td>{livraison.hauteur}m</td>
                  <td>{livraison.largeur}m</td>
                  <td>{livraison.poids_total}kg</td>
                  <td>{livraison.commertial}</td>
                  <td>{livraison.kilométrage}km</td>
                  <td>{livraison.prix_Plein}dh</td>
                  <td>{livraison.Chauffeur}</td>
                  <td>{livraison.remarque}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ProgrammeDeLivraison;