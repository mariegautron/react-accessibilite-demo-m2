import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import DecorativeBar from './components/DecorativeBar';
import Home from './pages/Home';
import Grains from './pages/Grains';
import Boutique from './pages/Boutique';
import APropos from './pages/APropos';
import MonCompte from './pages/MonCompte';
import './App.css';
import './styles/accessibility.css';
import { useState, useEffect } from 'react';

function App() {
  const location = useLocation();
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-mode');
        setIsKeyboardUser(true);
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-mode');
      setIsKeyboardUser(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div className="app">
      <DecorativeBar />
      <a href="#main-content" className="skip-to-content" tabIndex={0}>
        Aller au contenu principal
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/grains" element={<Grains />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/mon-compte" element={<MonCompte />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
