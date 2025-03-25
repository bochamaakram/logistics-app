import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from "../components/Section";
import Testimg from '../assets/logo-mini.svg';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'C600',
    image: Testimg,
    url: 'https://drive.google.com/file/d/1a6nwshLBmtrT7BP9TVDt0U9t6IjnlBDM/view?usp=drive_link'
  },
  {
    id: 2,
    name: 'C700',
    image: Testimg,
    url: 'https://drive.google.com/file/d/1eTu5hezeh-_QpyS92IS-_-dQPf4QTsJq/view?usp=drive_link'
  },
  {
    id: 3,
    name: 'C800RPT',
    image: Testimg,
    url: 'https://drive.google.com/file/d/1OINB-3ffTtIBdWaeSOBIdbrBExNsnPEM/view?usp=drive_link'
  },
  {
    id: 4,
    name: 'C900',
    image: Testimg,
    url: 'https://drive.google.com/file/d/1EZzkTGmBbRMiAudx4cBmQbZOVV31sPNo/view?usp=drive_link'
  },
  {
    id: 5,
    name: 'C1200R',
    image: Testimg,
    url: 'https://drive.google.com/file/d/1o4vid-AqsOZcjf1t50oXq2XR1nkSYSSp/view?usp=drive_link'
  },
  {
    id: 6,
    name: 'F40C',
    image: Testimg,
    url: 'https://drive.google.com/file/d/1NehCWUwLOvzsGx9LQjq88ytj8W15wESH/view?usp=drive_link'
  },
  {
    id: 7,
    name: 'F40R',
    image: Testimg,
    url: 'https://drive.google.com/file/d/1O5Wuzuusp527NvKCkfHPo0-UDIK7J7xw/view?usp=drive_link'
  },
  {
    id: 8,
    name: 'F50_PL',
    image: Testimg,
    url: 'https://drive.google.com/file/d/1aT4Vc0pEYRnkrHTPQveu-2uxqsH3elNg/view?usp=drive_link'
  },
  {
    id: 9,
    name: 'F50_RPT',
    image: Testimg,
    url: 'https://drive.google.com/file/d/1s3b2KbMM0JxwsC4wW09Jm7GPPEkKCnUs/view?usp=drive_link'
  },
  {
    id: 8,
    name: 'ECW-50',
    image: Testimg,
    url: 'https://drive.google.com/file/d/1D11mV4207ovO7ROTkZWjUDgbnzLF2RuE/view?usp=drive_link'
  },
];

const Products = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'light-mode' : 'dark-mode'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className='holder'></div>
      <div className="Content">
        <div className="grid">
          {products.map((product) => (
            <Section delay={0} key={product.id}>
              <div className="cardP" onClick={() => window.location.href = product.url}>
                <img src={product.image} alt={product.name} className="image" />
                <h3 className="name">{product.name}</h3>
              </div>
            </Section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;