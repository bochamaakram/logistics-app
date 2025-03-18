import Loader from './Loader';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Test() {
  const [data, setData] = useState({
    livraisonsParChauffeur: [],
    livraisonsParCamion: [],
    camionsLesPlusUtilises: [],
    chauffeursLesPlusUtilises: [],
    clientsLesPlusFrequents: [],
    produitsLesPlusLivres: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/deliveries');
        console.log("API Response:", response.data);

        const transformedData = {
          livraisonsParChauffeur: Object.entries(response.data.livraisonsPerChauffeur || {}).map(([Chauffeur, Total_Livraisons]) => ({
            Chauffeur,
            Total_Livraisons,
          })),
          livraisonsParCamion: Object.entries(response.data.livraisonsPerCamion || {}).map(([Matricule, Total_Livraisons]) => ({
            Matricule,
            Total_Livraisons,
          })),
          camionsLesPlusUtilises: response.data.mostRepeatedCamion
            ? [{ Matricule: response.data.mostRepeatedCamion.matricule, Total_Livraisons: response.data.mostRepeatedCamion.total_livraisons }]
            : [],
          chauffeursLesPlusUtilises: response.data.mostRepeatedChauffeur
            ? [{ Chauffeur: response.data.mostRepeatedChauffeur.chauffeur, Total_Livraisons: response.data.mostRepeatedChauffeur.total_livraisons }]
            : [],
          clientsLesPlusFrequents: response.data.mostRepeatedClient
            ? [{ nom_client: response.data.mostRepeatedClient.client, Total_Livraisons: response.data.mostRepeatedClient.total_livraisons }]
            : [],
          produitsLesPlusLivres: Object.entries(response.data.livraisonsPerProduits || {}).map(([Produits, Total_Livraisons]) => ({
            Produits,
            Total_Livraisons,
          })),
        };

        setData(transformedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div><Loader /></div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Rapport des Livraisons</h2>
      <div className="row">
        {[
          { title: "Livraisons par Chauffeur", key: "livraisonsParChauffeur", headers: ["Chauffeur", "Total des Livraisons"] },
          { title: "Livraisons par Camion", key: "livraisonsParCamion", headers: ["Camion (Matricule)", "Total des Livraisons"] },
          { title: "Produits les Plus Livrés", key: "produitsLesPlusLivres", headers: ["Produit", "Total des Livraisons"] },
          { title: "Camions les Plus Utilisés", key: "camionsLesPlusUtilises", headers: ["Camion (Matricule)", "Total des Livraisons"] },
          { title: "Chauffeurs les Plus Utilisés", key: "chauffeursLesPlusUtilises", headers: ["Chauffeur", "Total des Livraisons"] },
          { title: "Clients les Plus Fréquents", key: "clientsLesPlusFrequents", headers: ["Client", "Total des Livraisons"] },
        ].map(({ title, key, headers }) => (
          <div className="col-4" key={key}>
            <p>{title} (Ce Mois)</p>
            {data[key].length > 0 ? (
              <table className="table w-50">
                <thead>
                  <tr>
                    {headers.map((header, index) => <th key={index}>{header}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {data[key].map((item, index) => (
                    <tr key={index}>
                      {Object.values(item).map((val, i) => <td key={i}>{val}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No data available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
