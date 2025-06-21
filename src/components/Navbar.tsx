import { Link, useLocation } from 'react-router-dom';
import { FaCoffee, FaHome, FaInfo, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';
import { useEffect, useRef } from 'react';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!navRef.current) return;
      
      const links = Array.from(navRef.current.querySelectorAll('a[role="menuitem"]'));
      const currentIndex = links.findIndex(link => document.activeElement === link);
      
      if (currentIndex === -1 && !['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) {
        return;
      }
      
      let nextIndex = currentIndex;
      
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          nextIndex = currentIndex === links.length - 1 ? 0 : currentIndex + 1;
          e.preventDefault();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          nextIndex = currentIndex === 0 ? links.length - 1 : currentIndex - 1;
          e.preventDefault();
          break;
        case 'Home':
          nextIndex = 0;
          e.preventDefault();
          break;
        case 'End':
          nextIndex = links.length - 1;
          e.preventDefault();
          break;
      }
      
      if (nextIndex !== currentIndex) {
        (links[nextIndex] as HTMLElement).focus();
      }
    };
    
    const nav = navRef.current;
    if (nav) {
      nav.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      if (nav) {
        nav.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  return (
    <nav 
      className="navbar" 
      ref={navRef} 
      role="menubar" 
      aria-label="Navigation principale"
    >
      <Link 
        to="/" 
        className={`nav-item ${path === '/' ? 'active' : ''}`}
        aria-current={path === '/' ? 'page' : undefined}
        role="menuitem"
        aria-label="Accueil"
      >
        <FaHome className="nav-icon" aria-hidden="true" />
        <span className={`nav-text ${path === '/' ? 'active' : ''}`}>
          Accueil
        </span>
      </Link>
      <Link 
        to="/grains" 
        className={`nav-item ${path === '/grains' ? 'active' : ''}`}
        aria-current={path === '/grains' ? 'page' : undefined}
        role="menuitem"
        aria-label="Nos Grains"
      >
        <FaCoffee className="nav-icon" aria-hidden="true" />
        <span className={`nav-text ${path === '/grains' ? 'active' : ''}`}>
          Nos Grains
        </span>
      </Link>
      <Link 
        to="/boutique" 
        className={`nav-item ${path === '/boutique' ? 'active' : ''}`}
        aria-current={path === '/boutique' ? 'page' : undefined}
        role="menuitem"
        aria-label="Boutique"
      >
        <FaShoppingCart className="nav-icon" aria-hidden="true" />
        <span className={`nav-text ${path === '/boutique' ? 'active' : ''}`}>
          Boutique
        </span>
      </Link>
      <Link 
        to="/a-propos" 
        className={`nav-item ${path === '/a-propos' ? 'active' : ''}`}
        aria-current={path === '/a-propos' ? 'page' : undefined}
        role="menuitem"
        aria-label="À propos"
      >
        <FaInfo className="nav-icon" aria-hidden="true" />
        <span className={`nav-text ${path === '/a-propos' ? 'active' : ''}`}>
          À propos
        </span>
      </Link>
      <Link 
        to="/mon-compte" 
        className={`nav-item ${path === '/mon-compte' ? 'active' : ''}`}
        aria-current={path === '/mon-compte' ? 'page' : undefined}
        role="menuitem"
        aria-label="Mon Compte"
      >
        <FaUser className="nav-icon" aria-hidden="true" />
        <span className={`nav-text ${path === '/mon-compte' ? 'active' : ''}`}>
          Mon Compte
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
