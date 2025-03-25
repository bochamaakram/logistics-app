import React, { useState, useEffect  } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section from "../components/Section";
import VisitUsSection from '../sections/VisitUsSection';
import '../App.css';
const Blog = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
    return (
      <div className={`app ${darkMode ? 'light-mode' : 'dark-mode'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className='holder'></div>
        <div className='Content'>
        <Section delay={0}><h2>Qui sommes-nous</h2></Section>
        <Section delay={0}><p className='blog-text'>Camialu, une entreprise dynamique fondée en 2022 sous l’égide de Camiverre, est un acteur clé dans le secteur de la fourniture d’aluminium. Basée en France, Camialu se spécialise dans la production et la distribution de produits en aluminium de haute qualité, destinés à des industries variées telles que la construction, l’automobile, l’aérospatiale et la fabrication. Depuis ses débuts, Camialu s’est imposée comme un partenaire de confiance, reconnue pour son engagement envers l’innovation, la qualité et la durabilité.

Notre mission est de fournir des solutions en aluminium qui répondent aux besoins évolutifs de nos clients tout en promouvant des pratiques respectueuses de l’environnement. Nous croyons fermement que l’aluminium, matériau léger, durable et recyclable à l’infini, joue un rôle essentiel dans la transition vers une économie plus verte. C’est pourquoi nous nous efforçons de minimiser notre empreinte écologique à travers des initiatives telles que le recyclage et l’optimisation de nos processus de production.

Camialu propose une gamme complète de produits, incluant des tôles, des bobines, des profilés sur mesure et des alliages d’aluminium adaptés à des applications spécifiques. Nous accompagnons également nos clients avec un support technique expert pour les aider à choisir les solutions les mieux adaptées à leurs projets.

En seulement deux ans, Camialu a réalisé des avancées significatives, notamment en établissant un réseau solide de chaîne d’approvisionnement à travers l’Europe et en développant une réputation d’excellence et de fiabilité. Notre vision est de devenir un leader européen dans la fourniture d’aluminium, tout en continuant à innover et à soutenir des pratiques industrielles durables.

Rejoignez-nous dans notre mission pour un avenir plus durable et découvrez comment Camialu transforme l’industrie de l’aluminium, un projet à la fois. Pour en savoir plus, contactez-nous à</p></Section>
        
      <Section delay={0}><VisitUsSection /></Section>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Blog;