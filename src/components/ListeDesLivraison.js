import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from './Loader';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ListeDesLivraison = () => {
  const [livraisons, setLivraisons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [livraisonFilters, setLivraisonFilters] = useState({
    Ville_de_Livraison: "",
    poids_total: "",
    Matricule: "",
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [livraisonsResponse] = await Promise.all([
          axios.get("http://localhost:8000/api/livraisons"),
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

  const filterLivraisons = (livraison) => {
    return Object.keys(livraisonFilters).every((key) => {
      if (!livraisonFilters[key]) return true;
      return String(livraison[key])
        .toLowerCase()
        .includes(livraisonFilters[key].toLowerCase());
    });
  };

  // Pagination logic
  const filteredLivraisons = livraisons.filter(filterLivraisons);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredLivraisons.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div className="text-center mt-5"><Loader /></div>;
  if (error) return <div className="text-center mt-5">Error: {error}</div>;

  return (
    <div className="container-fluid mt-5">
      {/* Livraisons Section */}
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Livraisons</h2>
          <div className="dropdown">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="livraisonFilterDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter Livraisons
            </button>
            <ul className="dropdown-menu" aria-labelledby="livraisonFilterDropdown">
              {Object.keys(livraisonFilters).map((key) => (
                <li key={key} className="dropdown-item">
                  <label className="form-label">{`Filter by ${key.replace(/_/g, " ")}`}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Filter by ${key.replace(/_/g, " ")}`}
                    value={livraisonFilters[key]}
                    onChange={(e) =>
                      setLivraisonFilters({ ...livraisonFilters, [key]: e.target.value })
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <table className="table">
          <thead className="thead-primary">
            <tr>
              <th>Ville de Livraison</th>
              <th>Numéro de Commande Client</th>
              <th>Téléphone Client</th>
              <th>Nom Client</th>
              <th>Produits</th>
              <th>Adresse de Livraison</th>
              <th>Quantité</th>
              <th>Commercial</th>
              <th>Matricule</th>
              <th>Kilométrage</th>
              <th>Prix Plein</th>
              <th>Chauffeur</th>
              <th>Poids Total</th>
              <th>Remarque</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((livraison) => (
              <tr key={livraison.id}>
                <td>{livraison.Ville_de_Livraison}</td>
                <td>{livraison.num_command_client}</td>
                <td>{livraison.tel_client}</td>
                <td>{livraison.nom_client}</td>
                <td>{livraison.Produits}</td>
                <td>{livraison.adresse_de_Livraison}</td>
                <td>{livraison.quantité}</td>
                <td>{livraison.commertial}</td>
                <td>{livraison.Matricule}</td>
                <td>{livraison.kilométrage}</td>
                <td>{livraison.prix_Plein}</td>
                <td>{livraison.Chauffeur}</td>
                <td>{livraison.poids_total}</td>
                <td>{livraison.remarque}</td>
                <td>
                  <div className="btn-group" role="group">
                    <a
                      href={`http://127.0.0.1:8000/livraisons/${livraison.id}/modifier`}
                      className="btn btn-outline-success"
                    >
                      Modifier
                    </a>
                    <a
                      href={`http://127.0.0.1:8000/livraisons/${livraison.id}/supprimer`}
                      className="btn btn-outline-danger"
                    >
                      Supprimer
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <nav>
          <ul className="pagination justify-content-center">
            {Array.from({ length: Math.ceil(filteredLivraisons.length / itemsPerPage) }, (_, i) => (
              <li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                <button onClick={() => paginate(i + 1)} className="page-link">
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ListeDesLivraison;