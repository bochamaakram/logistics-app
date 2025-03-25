import React, { useState, useEffect  } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Section from "../components/Section";

export default function Accueil() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
      <div className={`app ${darkMode ? 'light-mode' : 'dark-mode'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <Content />
        <Footer />
      </div>
  );
}