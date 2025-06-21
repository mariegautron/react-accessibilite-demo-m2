import './DecorativeBar.css';

const DecorativeBar = () => {
  const grainsTypes = [
    { name: 'Arabica', icon: '☕' },
    { name: 'Robusta', icon: '☕' },
    { name: 'Bourbon', icon: '☕' },
    { name: 'Moka', icon: '☕' },
    { name: 'Typica', icon: '☕' }
  ];

  return (
    <div 
      className="decorative-bar" 
      role="presentation" 
      aria-hidden="true"
    >
      <div className="coffee-icons">
        {grainsTypes.map((grain, index) => (
          <div key={index} className="coffee-item">
            <span className="coffee-icon">{grain.icon}</span>
            <span className="coffee-name">{grain.name}</span>
          </div>
        ))}
        {/* Duplication pour l'effet de défilement infini */}
        {grainsTypes.map((grain, index) => (
          <div key={`duplicate-${index}`} className="coffee-item">
            <span className="coffee-icon">{grain.icon}</span>
            <span className="coffee-name">{grain.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DecorativeBar;
