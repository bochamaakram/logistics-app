import React from 'react';
import logo from '../assets/logo.png';
import logo0 from '../assets/logo0.png';
import './Footer.css'
import Social from './social';
const Footer = () => {
    return (
      <footer>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Contact us</h3>
            <p className="text-gray-300">+212 (0) 13.24.55.68.20</p>
            <p className="text-gray-300 underline">contact@camiverre.com</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Socials</h3>
            <Social/>
          </div>
          <div className=" logos"> 
            <a href="#"><img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} /></a>
            <a href="https://camiverre.com/"><img src={logo0} alt="Logo" style={{ width: '100px', height: 'auto' }} /></a>
          </div>
      </footer>
    );
  };

  

export default Footer;