import React, { useState, useEffect } from "react";
import Loader from './Loader';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Dashboard = () => {
  const [produits, setProduits] = useState([]);
  const [camions, setCamions] = useState([]);
  const [chauffeurs, setChauffeurs] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [produitFilters, setProduitFilters] = useState({
    largeur: "",
    hauteur: "",
    poids: "",
    épaisseur: "",
  });

  const [camionFilters, setCamionFilters] = useState({
    largeur_max: "",
    hauteur_max: "",
    poids_max: "",
  });

  const [chauffeurFilters, setChauffeurFilters] = useState({
    ville: "",
  });

  const [clientFilters, setClientFilters] = useState({
    ville: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [produitsResponse, camionsResponse, chauffeursResponse, clientsResponse] =
          await Promise.all([
            axios.get("http://127.0.0.1:8000/api/produits"),
            axios.get("http://127.0.0.1:8000/api/camions"),
            axios.get("http://127.0.0.1:8000/api/chauffeurs"),
            axios.get("http://127.0.0.1:8000/api/clients"),
          ]);

        setProduits(produitsResponse.data);
        setCamions(camionsResponse.data);
        setChauffeurs(chauffeursResponse.data);
        setClients(clientsResponse.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterProduits = (produit) => {
    return Object.keys(produitFilters).every((key) => {
      if (!produitFilters[key]) return true;
      return String(produit[key])
        .toLowerCase()
        .includes(produitFilters[key].toLowerCase());
    });
  };

  const filterClients = (client) => {
    return Object.keys(clientFilters).every((key) => {
      if (!clientFilters[key]) return true;
      return String(client[key])
        .toLowerCase()
        .includes(clientFilters[key].toLowerCase());
    });
  };

  const filterCamions = (camion) => {
    return Object.keys(camionFilters).every((key) => {
      if (!camionFilters[key]) return true;
      return String(camion[key])
        .toLowerCase()
        .includes(camionFilters[key].toLowerCase());
    });
  };

  const filterChauffeurs = (chauffeur) => {
    return Object.keys(chauffeurFilters).every((key) => {
      if (!chauffeurFilters[key]) return true;
      return String(chauffeur[key])
        .toLowerCase()
        .includes(chauffeurFilters[key].toLowerCase());
    });
  };

  if (loading) return <div className="text-center mt-5"><Loader /></div>;
  if (error) return <div className="text-center mt-5">Error: {error}</div>;

  return (
    <div className="container-fluid mt-5">
      <h1 className="text-center mb-4">Tableau de bord</h1>

      {/* Produits Section */}
      <div className="mb-5" id="Produits">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Produits</h2>
          <div className="dropdown">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="produitFilterDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter Produits
            </button>
            <ul className="dropdown-menu" aria-labelledby="produitFilterDropdown">
              {Object.keys(produitFilters).map((key) => (
                <li key={key} className="dropdown-item">
                  <label className="form-label">{`Filter by ${key.replace(/_/g, " ")}`}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Filter by ${key.replace(/_/g, " ")}`}
                    value={produitFilters[key]}
                    onChange={(e) =>
                      setProduitFilters({ ...produitFilters, [key]: e.target.value })
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
              <th>Nome</th>
              <th>Largeur</th>
              <th>Hauteur</th>
              <th>Poids</th>
              <th>Épaisseur</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {produits.filter(filterProduits).map((produit) => (
              <tr key={produit.id}>
                <td>{produit.nome}</td>
                <td>{produit.largeur}</td>
                <td>{produit.hauteur}</td>
                <td>{produit.poids}</td>
                <td>{produit.épaisseur}</td>
                <td>
                  <div className="btn-group" role="group">
                    <a
                      href={`http://127.0.0.1:8000/produits/${produit.id}/modifier`}
                      className="btn btn-outline-success"
                    >
                      Modifier
                    </a>
                    <a
                      href={`http://127.0.0.1:8000/produits/${produit.id}/supprimer`}
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
      </div>

      {/* Camions Section */}
      <div className="mb-5" id="Camions">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Camions</h2>
          <div className="dropdown">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="camionFilterDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter Camions
            </button>
            <ul className="dropdown-menu" aria-labelledby="camionFilterDropdown">
              {Object.keys(camionFilters).map((key) => (
                <li key={key} className="dropdown-item">
                  <label className="form-label">{`Filter by ${key.replace(/_/g, " ")}`}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Filter by ${key.replace(/_/g, " ")}`}
                    value={camionFilters[key]}
                    onChange={(e) =>
                      setCamionFilters({ ...camionFilters, [key]: e.target.value })
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
              <th>Largeur Max</th>
              <th>Hauteur Max</th>
              <th>Poids Max</th>
              <th>Kilométrage</th>
              <th>Matricule</th>
              <th>Num Jawaz</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {camions.filter(filterCamions).map((camion) => (
              <tr key={camion.id}>
                <td>{camion.largeur_max}</td>
                <td>{camion.hauteur_max}</td>
                <td>{camion.poids_max}</td>
                <td>{camion.kilométrage}</td>
                <td>{camion.matrecul}</td>
                <td>{camion.num_jawas}</td>
                <td>
                  <div className="btn-group" role="group">
                    <a
                      href={`http://127.0.0.1:8000/camions/${camion.id}/modifier`}
                      className="btn btn-outline-success"
                    >
                      Modifier
                    </a>
                    <a
                      href={`http://127.0.0.1:8000/camions/${camion.id}/supprimer`}
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
      </div>

      {/* Chauffeurs Section */}
      <div className="mb-5" id="Chauffeurs">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Chauffeurs</h2>
          <div className="dropdown">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="chauffeurFilterDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter Chauffeurs
            </button>
            <ul className="dropdown-menu" aria-labelledby="chauffeurFilterDropdown">
              {Object.keys(chauffeurFilters).map((key) => (
                <li key={key} className="dropdown-item">
                  <label className="form-label">{`Filter by ${key.replace(/_/g, " ")}`}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Filter by ${key.replace(/_/g, " ")}`}
                    value={chauffeurFilters[key]}
                    onChange={(e) =>
                      setChauffeurFilters({ ...chauffeurFilters, [key]: e.target.value })
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
              <th>Ville de Résidence</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {chauffeurs.filter(filterChauffeurs).map((chauffeur) => (
              <tr key={chauffeur.id}>
                <td>{chauffeur.ville}</td>
                <td>{chauffeur.prenom}</td>
                <td>{chauffeur.nom}</td>
                <td>
                  <div className="btn-group" role="group">
                    <a
                      href={`http://127.0.0.1:8000/chauffeurs/${chauffeur.id}/modifier`}
                      className="btn btn-outline-success"
                    >
                      Modifier
                    </a>
                    <a
                      href={`http://127.0.0.1:8000/chauffeurs/${chauffeur.id}/supprimer`}
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
      </div>

      {/* Clients Section */}
      <div className="mb-5" id="Clients">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Clients</h2>
          <div className="dropdown">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="clientFilterDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter Clients
            </button>
            <ul className="dropdown-menu" aria-labelledby="clientFilterDropdown">
              {Object.keys(clientFilters).map((key) => (
                <li key={key} className="dropdown-item">
                  <label className="form-label">{`Filter by ${key.replace(/_/g, " ")}`}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Filter by ${key.replace(/_/g, " ")}`}
                    value={clientFilters[key]}
                    onChange={(e) =>
                      setClientFilters({ ...clientFilters, [key]: e.target.value })
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
              <th>Ville</th>
              <th>nom client</th>
              <th>tel client</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.filter(filterClients).map((client) => (
              <tr key={client.id}>
                <td>{client.ville}</td>
                <td>{client.nom_client}</td>
                <td>{client.tel_client}</td>
                <td>
                  <div className="btn-group" role="group">
                    <a
                      href={`http://127.0.0.1:8000/clients/${client.id}/modifier`}
                      className="btn btn-outline-success"
                    >
                      Modifier
                    </a>
                    <a
                      href={`http://127.0.0.1:8000/clients/${client.id}/supprimer`}
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
      </div>
    </div>
  );
};

export default Dashboard;