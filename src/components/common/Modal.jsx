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

const ModalContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  
  img {
    width: 24px;
    height: 24px;
  }
`;

const ModalTitle = styled.h2`
  color: #2D3648;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <img src={iconoCerrar} alt="Cerrar" />
        </CloseButton>
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
}
