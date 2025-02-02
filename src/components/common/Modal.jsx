import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import iconoCerrar from '../../assets/images/close.webp';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  position: relative;

  h2 {
    color: #2D3648;
    margin-bottom: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 56px;
    height: 56px;
  }
`;

export default function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement;
      
      const outsideElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      outsideElements.forEach(element => {
        if (!modalRef.current?.contains(element)) {
          element.setAttribute('data-previous-tabindex', element.getAttribute('tabindex') || '0');
          element.setAttribute('tabindex', '-1');
          element.setAttribute('aria-hidden', 'true');
        }
      });

      const handleTabKey = (e) => {
        if (e.key === 'Tab') {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      return () => {
        document.removeEventListener('keydown', handleTabKey);
        outsideElements.forEach(element => {
          const previousTabIndex = element.getAttribute('data-previous-tabindex');
          if (previousTabIndex) {
            element.setAttribute('tabindex', previousTabIndex);
            element.removeAttribute('data-previous-tabindex');
            element.removeAttribute('aria-hidden');
          }
        });
        if (previousFocus.current) {
          previousFocus.current.focus();
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalOverlay 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <ModalContent 
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        role="document"
      >
        <h2 id="modal-title" tabIndex={0}>{title}</h2>
        <CloseButton 
          onClick={onClose}
          aria-label="Cerrar modal"
          tabIndex={0}
        >
          <img src={iconoCerrar} alt="" />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
}
