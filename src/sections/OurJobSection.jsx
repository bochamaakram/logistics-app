import job from '../assets/job.jpg';
const OurJobSection = () => {
    return (
      <section className="job">
        <div>
        <div>
          <img src={job} alt="" />
        </div>
            <div className='text'>
            <span className='titre'>Mission </span>
                  <p>Fournir des produits et services en aluminium de qualité supérieure qui répondent <br />
                    aux besoins évolutifs de nos clients tout en promouvant des pratiques durables et <br />
                    en favorisant des partenariats à long terme.</p>
                </div>
        </div>
      </section>
    );
  };
  
  export default OurJobSection;