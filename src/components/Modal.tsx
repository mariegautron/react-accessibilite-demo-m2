import { useEffect, useRef } from "react";
import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const previouslyFocused = useRef<Element | null>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      previouslyFocused.current = document.activeElement;

      const focusableEls = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const first = focusableEls[0];
      const last = focusableEls[focusableEls.length - 1];

      function trap(e: KeyboardEvent) {
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        } else if (e.key === "Escape") {
          onClose();
        }
      }

      modalRef.current.addEventListener("keydown", trap);

      headingRef.current?.focus();

      return () => {
        modalRef.current?.removeEventListener("keydown", trap);
        (previouslyFocused.current as HTMLElement | null)?.focus?.();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="backdrop">
      <div ref={modalRef} className="modal-content">
        <h1 id="dialog-title" tabIndex={-1} ref={headingRef}>
          Confirmation
        </h1>
        <p>Voulez-vous vraiment supprimer ce fichier ?</p>
        <button onClick={onClose}>Annuler</button>
        <button onClick={onClose}>Supprimer</button>
      </div>
    </div>
  );
}
