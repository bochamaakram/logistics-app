import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import logo from '../assets/logo.png';
import logo0 from '../assets/logo0.png';
import Social from './social';
import { ReactComponent as LightModeIcon } from '../assets/light-mode.svg';
import { ReactComponent as DarkModeIcon } from '../assets/dark-mode.svg';

function Navbar({ darkMode, toggleDarkMode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="toggle-button" onClick={toggleSidebar}>
            <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
            </button>
          </li>
          <li className="nav-item nav-links">
            <Link to="/">Accueil</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Products">produits</Link>
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="nav-item">
            <button onClick={toggleDarkMode} className="mode-toggle">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
        <a href="https://camiverre.com/"><img src={logo0} alt="Logo" style={{ width: '100px', height: 'auto' }} /></a>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/Products">produits</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul> 
      <Social/>
      </div>
    </header>
  );
}

export default Navbar;