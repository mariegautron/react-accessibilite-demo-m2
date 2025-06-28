import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const TITLES: Record<string, string> = {
  "/": "Accueil – Grains de Café d'Exception",
  "/grains": "Nos Grains – Grains de Café d'Exception",
  "/boutique": "Boutique – Grains de Café d'Exception",
  "/a-propos": "À propos – Grains de Café d'Exception",
  "/mon-compte": "Mon Compte – Grains de Café d'Exception",
};

const RouteAnnouncer = () => {
  const location = useLocation();
  const liveRegionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const pathname = location.pathname;
    const title = TITLES[pathname] ?? "Grains de Café d'Exception";

    document.title = title;

    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = title;
      liveRegionRef.current.focus();
    }

    window.scrollTo(0, 0);
  }, [location]);

  return (
    <p
      id="virtual-title"
      ref={liveRegionRef}
      tabIndex={-1}
      aria-live="polite"
      className="visually-hidden"
    >
      {/* contenu mis à jour dynamiquement */}
    </p>
  );
};

export default RouteAnnouncer;
