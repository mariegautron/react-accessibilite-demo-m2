import './PageStyles.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">À propos</h1>
        <p>Découvrez notre histoire et notre passion pour le café</p>
      </div>

      <div className="page-content">
        <div className="about-section">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=1000&auto=format&fit=crop" alt="Notre café" />
          </div>
          <div className="about-text">
            <h2>Notre Histoire</h2>
            <p>
              Fondé en 2010, notre café est né d'une passion profonde pour l'art du café.
              Nous avons commencé comme un petit kiosque dans le marché local, et grâce à
              notre engagement envers la qualité et le service, nous avons grandi pour devenir
              l'une des destinations de café les plus appréciées de la région.
            </p>
            <p>
              Notre philosophie est simple : proposer le meilleur café possible, préparé avec
              soin et servi avec le sourire. Nous sélectionnons personnellement chaque grain
              de café, travaillant directement avec des producteurs qui partagent notre vision
              de qualité et de durabilité.
            </p>
          </div>
        </div>

        <div className="team-section">
          <h2>Notre Équipe</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1000&auto=format&fit=crop" alt="Thomas Dubois" />
              <h3>Thomas Dubois</h3>
              <p>Fondateur & Maître Torréfacteur</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop" alt="Julie Martin" />
              <h3>Julie Martin</h3>
              <p>Chef Barista</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Alexandre Petit" />
              <h3>Alexandre Petit</h3>
              <p>Responsable Qualité</p>
            </div>
          </div>
        </div>

        <div className="vision-section">
          <h2>Notre Vision</h2>
          <p>
            Nous croyons que le café est bien plus qu'une simple boisson - c'est une expérience qui
            rassemble les gens, stimule la créativité et apporte du confort dans notre vie quotidienne.
            Notre vision est de créer un espace où chacun peut profiter d'un moment de détente autour
            d'une tasse de café exceptionnelle.
          </p>
          <p>
            Nous nous engageons également dans des pratiques commerciales éthiques et durables,
            en soutenant les communautés agricoles et en minimisant notre impact environnemental.
          </p>
        </div>
      </div>

      {/* Ajouter de l'espace pour que le contenu ne soit pas masqué par la navbar */}
      <div className="navbar-spacer"></div>
    </div>
  );
};

export default About;
