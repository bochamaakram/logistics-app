import React, { useState, useEffect } from 'react';
const teamMembers = [
  {
    name: 'Jamal HARKANI',
    role: 'Directeur Commercial',
  },
  {
    name: 'Fatah KHEREDDINE',
    role: 'Directeur Technique',
  },
  {
    name: 'Kamal BARAKA',
    role: 'Directeur Administratif',
  }
];

const TeamSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

    return (
        <div className='team'>
          <div className='intro'>
            <h2>Équipe</h2>
            <h3>Découvrez les Membres de Notre Équipe</h3>
          </div>
      <div>
      <div className="team-members">
        {teamMembers.map((teamMembers, index) => (
        <div className="card"  key={index} >
        <div className="border"></div>
        <div className="content">
          <div className="logo">
            <div className="logo1">
              <h2>{teamMembers.name}</h2>
            </div>
            <span className="trail"></span>
          </div>
        </div>
        <span className="bottom-text">{teamMembers.role}</span>
        </div>
        ))}
      </div>
      </div>
      </div>
  );
};

export default TeamSection;