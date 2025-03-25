import React, { useState, useEffect  } from 'react';
import { BrowserRouter as  Router, Routes, Route, Link  } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css';
import Loading from './components/Loading';
import Blog from './pages/Blog';
import Accueil from './pages/Accueil';
import Products from './pages/Products';
import Contact from './pages/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData('Your data has been loaded!');
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Router>
      <SpeedInsights/>
      <div className={`app ${darkMode ? 'light-mode' : 'dark-mode'}`}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <div className='Copyright'><p>&copy; Copyright, Camivere {new Date().getFullYear()}</p></div>
      </div>
    </Router>
  );
}