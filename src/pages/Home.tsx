import './PageStyles.css';

const Home = () => {
  return (
    <div className="page-container">
      <header className="hero">
        <div className="hero-content">
          <h1>Découvrez l'Excellence des Grains de Café</h1>
          <p>Explorez notre sélection unique de grains de café soigneusement sélectionnés aux quatre coins du monde.</p>
          <button className="cta-button" aria-label="Explorer notre sélection de grains de café">Découvrir</button>
        </div>
      </header>

      <div className="coffee-types" role="tablist" aria-label="Types de grains de café">
        <button className="coffee-type" role="tab" aria-selected="true" tabIndex={0}>Arabica</button>
        <button className="coffee-type" role="tab" aria-selected="false" tabIndex={-1}>Robusta</button>
        <button className="coffee-type" role="tab" aria-selected="false" tabIndex={-1}>Bourbon</button>
        <button className="coffee-type" role="tab" aria-selected="false" tabIndex={-1}>Moka</button>
        <button className="coffee-type" role="tab" aria-selected="false" tabIndex={-1}>Typica</button>
      </div>

      <section className="section">
        <div className="section-header">
          <h2>Nos Grains</h2>
          <h3>Sélectionnés avec passion</h3>
        </div>

        <div className="coffee-grid">
          {[
            {
              nom: "Arabica d'Éthiopie",
              prix: "24,90€",
              description: "Notes délicates de fruits rouges et de jasmin",
              image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop"
            },
            {
              nom: "Bourbon de la Réunion",
              prix: "26,90€",
              description: "Arômes intenses de chocolat et de caramel",
              image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop"
            },
            {
              nom: "Moka du Yémen",
              prix: "28,90€",
              description: "Notes complexes d'épices et de cacao",
              image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop"
            }
          ].map((grain) => (
            <div key={grain.nom} className="coffee-card">
              <div className="coffee-card-tag" aria-label="Nouvelle récolte">NOUVELLE RÉCOLTE</div>
              <img src={grain.image} alt={`Grains de café ${grain.nom}`} className="coffee-card-image" />
              <div className="coffee-card-content">
                <h3>{grain.nom}</h3>
                <p>{grain.prix}</p>
                <p>{grain.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <h2>La perfection se cache dans chaque grain de café soigneusement sélectionné.</h2>
        <form className="subscribe" aria-labelledby="newsletter-heading">
          <div id="newsletter-heading" className="visually-hidden">S'abonner à notre newsletter</div>
          <label htmlFor="email-input" className="visually-hidden">Votre adresse email</label>
          <input 
            type="email" 
            id="email-input" 
            placeholder="Votre email" 
            aria-label="Votre adresse email"
            className="subscribe-input"
          />
          <button type="submit" className="subscribe-button" aria-label="S'abonner à la newsletter">
            S'abonner
          </button>
        </form>
      </section>

      <footer className="footer">
        <div className="hours">
          <div className="icon">🕒</div>
          <div>
            <h3>Our Opening Time</h3>
            <p>Sunday - Friday: 08:00 - 22:00</p>
          </div>
        </div>

        <div className="social">
          <a href="#" className="social-icon" aria-label="Facebook">f</a>
          <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
          <a href="#" className="social-icon" aria-label="Instagram">ig</a>
          <a href="#" className="social-icon" aria-label="Twitter">tw</a>
        </div>

        <div className="location">
          <div className="icon">📍</div>
          <div>
            <h3>Have a question?</h3>
            <p>Find us at the address below</p>
          </div>
        </div>
      </footer>

      <div className="navbar-spacer"></div>
    </div>
  );
};

export default Home;
