import './PageStyles.css';

const Menu = () => {
  const coffeeItems = Array(12).fill(null).map((_, index) => ({
    id: index + 1,
    name: 'Cappuccino',
    price: '23k',
    description: 'Boost your productivity and build your mood with a shot.',
    isNew: index % 3 === 0,
    image: index % 3 === 0
      ? 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1000&auto=format&fit=crop'
      : index % 3 === 1
        ? 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1000&auto=format&fit=crop'
        : 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1000&auto=format&fit=crop'
  }));

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Menu</h1>
        <p>Découvrez notre sélection de cafés de qualité</p>
      </div>

      <div className="coffee-types">
        <button className="coffee-type">Cappuccino</button>
        <button className="coffee-type">Espresso</button>
        <button className="coffee-type">Moca</button>
        <button className="coffee-type">Latte</button>
        <button className="coffee-type">Americano</button>
      </div>

      <div className="page-content">
        <div className="coffee-grid">
          {coffeeItems.map((item) => (
            <div key={item.id} className="coffee-card">
              {item.isNew && <div className="coffee-card-tag">NEW</div>}
              <img src={item.image} alt="Coffee" className="coffee-card-image" />
              <div className="coffee-card-content">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ajouter de l'espace pour que le contenu ne soit pas masqué par la navbar */}
      <div className="navbar-spacer"></div>
    </div>
  );
};

export default Menu;
