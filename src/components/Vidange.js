import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Vidange = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://localhost:8000/api/camions')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '120px', justifyContent: 'center' }}>
    <table className="table w-50">
      <thead>
        <tr>
          <th>Matricule</th>
          <th>Numéro Jawa</th>
          <th>Kilométrage</th>
          <th>dernier Vidange</th>
          <th>prochaine vidange</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.matrecul}</td>
              <td>{item.num_jawas}</td>
              <td>{item.kilométrage} km</td>
              <td>{item.vidange} km</td>
              <td>{item.vidange + 1500} km</td>  
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

export default Vidange;