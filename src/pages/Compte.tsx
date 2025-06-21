import { useState } from 'react';
import './PageStyles.css';

const Compte = () => {
  const [activeTab, setActiveTab] = useState('connexion');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Compte</h1>
        <p>Gérez votre compte et vos commandes</p>
      </div>

      <div className="page-content">
        <div className="account-tabs">
          <button
            className={`tab-button ${activeTab === 'connexion' ? 'active' : ''}`}
            onClick={() => setActiveTab('connexion')}
          >
            Connexion
          </button>
          <button
            className={`tab-button ${activeTab === 'inscription' ? 'active' : ''}`}
            onClick={() => setActiveTab('inscription')}
          >
            Inscription
          </button>
        </div>

        <div className="account-content">
          {activeTab === 'connexion' ? (
            <div className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Votre adresse email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" placeholder="Votre mot de passe" />
              </div>
              <div className="form-actions">
                <button className="form-button primary">Se connecter</button>
                <a href="#" className="forgot-password">Mot de passe oublié ?</a>
              </div>
            </div>
          ) : (
            <div className="register-form">
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input type="text" id="name" placeholder="Votre nom complet" />
              </div>
              <div className="form-group">
                <label htmlFor="register-email">Email</label>
                <input type="email" id="register-email" placeholder="Votre adresse email" />
              </div>
              <div className="form-group">
                <label htmlFor="register-password">Mot de passe</label>
                <input type="password" id="register-password" placeholder="Choisissez un mot de passe" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirmer le mot de passe</label>
                <input type="password" id="confirm-password" placeholder="Confirmez votre mot de passe" />
              </div>
              <div className="form-actions">
                <button className="form-button primary">Créer un compte</button>
              </div>
            </div>
          )}
        </div>

        <div className="account-info">
          <h2>Avantages du compte</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3>Suivi de commandes</h3>
              <p>Suivez facilement l'état de vos commandes en cours et passées.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Commande rapide</h3>
              <p>Enregistrez vos informations pour une commande plus rapide.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎁</div>
              <h3>Offres exclusives</h3>
              <p>Recevez des offres spéciales réservées aux membres.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ajouter de l'espace pour que le contenu ne soit pas masqué par la navbar */}
      <div className="navbar-spacer"></div>
    </div>
  );
};

export default Compte;
