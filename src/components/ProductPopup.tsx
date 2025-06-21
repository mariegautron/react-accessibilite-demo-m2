import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';
import '../styles/ProductPopup.css';

interface ProductPopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const popupVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 20,
    transition: {
      duration: 0.3
    }
  }
};

const ProductPopup = ({ isOpen, onClose, children, title }: ProductPopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
        e.preventDefault();
      }
    };

    const handleTabKey = (e: KeyboardEvent) => {
      if (!isOpen || !popupRef.current) return;
      
      if (e.key === 'Tab') {
        const focusableElements = popupRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (e.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    if (isOpen && closeButtonRef.current) {
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleTabKey);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen, onClose]);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="popup-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />
          <motion.div
            className="popup-container"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            ref={popupRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            <div className="popup-header">
              <h2 id="popup-title">{title}</h2>
              <button 
                className="popup-close" 
                onClick={onClose} 
                ref={closeButtonRef}
                aria-label="Fermer"
              >
                ×
              </button>
            </div>
            <div className="popup-content">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductPopup;
