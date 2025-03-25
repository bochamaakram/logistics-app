import about from '../assets/about.jpg';
const AboutUsSection = () => {
    return (
      <section className="about">
        <div>
            <div id='about' className='text'>
                <span className='titre'>Présentation</span>
                  <h2>CamiAlu</h2>
                  <p> Camialu est une entreprise dynamique et innovante spécialisée dans la fourniture d'aluminium, <br />
                     créée en 2022 sous l'égide de Camiverre. Basée en France, Camialu propose des produits et solutions  <br />
                     en aluminium de haute qualité à divers secteurs industriels, notamment la construction, l'automobile,  <br />
                     l'aérospatiale et la fabrication. Avec un engagement fort envers la durabilité et l'excellence, Camialu  <br />
                     s'est rapidement imposée comme un partenaire de confiance dans la chaîne d'approvisionnement en aluminium. <br />
                </p>
                <div>
                  <a href="#info">Plus d’information →</a>
                </div>
            </div>
          <div>
            <img src={about} alt="" />
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUsSection;