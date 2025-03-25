import trust from '../assets/trust.jpg';
const TrustedByManySection = () => {
    return (
      <section className="trust">
        <div>
            <div className='text'>
            <h2 >Un matériau aux propriétés extraordinaires</h2>
            <p>
              L’aluminium est le troisième élément le plus abondant sur Terre <br/>
               et le métal le plus répandu dans la croûte terrestre. Léger  <br/>
               (2,7 g/cm³, soit un tiers du poids du fer), il est résistant grâce  <br/>
               à une couche d’oxyde naturelle qui le protège de la corrosion. Ductile, <br/> 
               résistant au feu et 100 % recyclable sans perte de qualité, il a  <br/>
               une durée de vie illimitée et convient à de multiples applications  <br/>
               industrielles et quotidiennes.
            </p>
            <div>
              <a href="#testimonial">Plus d’information →</a>
            </div>
        </div>
        <div>
          <img src={trust} alt="" />
        </div>
        </div>
      </section>
    );
  };
  
  export default TrustedByManySection;