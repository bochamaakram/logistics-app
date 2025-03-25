import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LivraisonsCharts = () => {
  const [matriculeData, setMatriculeData] = useState([]);
  const [produitsData, setProduitsData] = useState([]);
  const [clientsData, setClientsData] = useState([]);
  const [chauffeurData, setChauffeurData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.189:8000/api/livraisons')
      .then(response => response.json())
      .then(data => {
        // Count occurrences for each category
        const matriculeCounts = countOccurrences(data, 'Matricule');
        const produitsCounts = countOccurrences(data, 'Produits');
        const clientsCounts = countOccurrences(data, 'nom_client');
        const chauffeurCounts = countOccurrences(data, 'Chauffeur');

        // Format data for charts
        setMatriculeData(formatChartData(matriculeCounts));
        setProduitsData(formatChartData(produitsCounts));
        setClientsData(formatChartData(clientsCounts));
        setChauffeurData(formatChartData(chauffeurCounts));
      });
  }, []);

  // Helper function to count occurrences of a specific field
  const countOccurrences = (data, field) => {
    const counts = {};
    data.forEach(item => {
      const key = item[field];
      counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  };

  // Helper function to format data for Recharts
  const formatChartData = (counts) => {
    return Object.keys(counts).map(key => ({
      name: key,
      value: counts[key]
    }));
  };

  // Colors for pie charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919'];

  return (
    <div>
      <h1>Livraisons Data Analysis</h1>

      {/* Pie Charts Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '120px', justifyContent: 'center' }}>
        {/* Matricule Pie Chart */}
        <div>
          <h3>camion le plus fréquent</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={matriculeData}
              cx={200}
              cy={201}
innerRadius={50}
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {matriculeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Produits Pie Chart */}
        <div>
          <h3>Produits le plus fréquent</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={produitsData}
              cx={200}
              cy={201}
innerRadius={50}
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {produitsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Clients Pie Chart */}
        <div>
          <h3>Clients le plus fréquent</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={clientsData}
              cx={200}
              cy={201}
innerRadius={50}
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {clientsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Chauffeur Pie Chart */}
        <div>
          <h3>Chauffeur le plus fréquent</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={chauffeurData}
              cx={200}
              cy={201}
innerRadius={50}
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {chauffeurData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

      {/* Bar Charts Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '120px', justifyContent: 'center' }}>
        {/* Matricule Bar Chart */}
        <div>
          <h3>livraisons par camion</h3>
          <BarChart
            width={400}
            height={300}
            data={matriculeData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#0088FE" />
          </BarChart>
        </div>

        {/* Produits Bar Chart */}
        <div>
          <h3>livraisons pour Produits</h3>
          <BarChart
            width={400}
            height={300}
            data={produitsData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#00C49F" />
          </BarChart>
        </div>

        {/* Clients Bar Chart */}
        <div>
          <h3>livraisons pour Client</h3>
          <BarChart
            width={400}
            height={300}
            data={clientsData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#FFBB28" />
          </BarChart>
        </div>

        {/* Chauffeur Bar Chart */}
        <div>
          <h3>livraisons par Chauffeur</h3>
          <BarChart
            width={400}
            height={300}
            data={chauffeurData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#FF8042" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default LivraisonsCharts;