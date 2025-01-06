import React from 'react';
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
  font-size: 1.5rem;
  cursor: pointer;
  color: #2D3648;
  
  &:hover {
    color: #3d4861;
  }
`;

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img src={iconoCerrar} alt="Cerrar" />
        </CloseButton>
        <h2>{title}</h2>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
}
