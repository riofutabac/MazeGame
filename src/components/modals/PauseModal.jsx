import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Modal from '../common/Modal';

const PauseMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  
  button {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 8px;
    background-color: #2D3648;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #3d4861;
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2D3648;
`;

export default function PauseModal({ isOpen, onClose, onResume }) {
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PauseMenuContainer>
        <Title>Pausa</Title>
        <button onClick={onResume}>Continuar</button>
        <button onClick={() => navigate('/level-select')}>Elegir Nivel</button>
        <button onClick={() => navigate('/instructions')}>Instrucciones</button>
        <button onClick={() => navigate('/')}>Regresar al Inicio</button>
      </PauseMenuContainer>
    </Modal>
  );
} 