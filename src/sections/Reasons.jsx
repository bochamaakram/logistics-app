import React, { useState } from 'react';

const reasonsData = [
  {
    title: "Polyvalence",
    description: "Les avantages inégalés de l’aluminium en font un matériau idéal pour de nombreuses industries, où il fournit d’excellents résultats grâce à ses propriétés universelles, lui permettant d’être utilisé dans n’importe quel secteur, répondant ainsi à ses exigences en termes de possibilités de fabrication et d’apparence."
  },
  {
    title: "Qualité à long terme",
    description: "Ce métal est synonyme de qualité à long terme, endurant le passage du temps sans pratiquement aucune usure, déformation ou changement sous l’influence de facteurs externes. Il nécessite un minimum d’entretien, sa durée de vie est donc garantie."
  },
  {
    title: "Respect de l’environnement",
    description: "C’est également un matériau respectueux de l’environnement, car la production de barres d’aluminium à partir d’aluminium recyclé ne nécessite que 5 % de l’énergie nécessaire à la production d’aluminium en tant que matière première et a une faible empreinte carbone. L’engagement d’Exlabesa pour le développement durable et le respect de l’environnement naturel a conduit à des investissements dans des usines de recyclage, où sont produits des lingots d’aluminium recyclé, qui sont ensuite utilisés pour extruder de nouveaux profilés, ce qui leur permet d’être utilisés pratiquement indéfiniment."
  },
  {
    title: "Rapport qualité prix",
    description: "Le rapport qualité-prix de ce métal est également excellent, d’excellentes propriétés peuvent être obtenues à un prix abordable. En même temps, la longue durée de vie des produits en aluminium en fait un investissement sûr et se traduit par d’importantes économies."
  }
];

const Reasons = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="reasons">
      <ul className="menu">
        {reasonsData.map((reason, index) => (
          <li key={index} className="dropdown">
            <button
              className="dropbtn"
              onClick={() => handleClick(index)}
            >
              {reason.title}
            </button>
            <div
              className={`dropdown-content ${activeIndex === index ? 'active' : ''}`}
            >
              <p>{reason.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reasons;