import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Modal from '../common/Modal';

const PauseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const PauseButton = styled.button`
  width: 80%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.primary ? '#34C759' : '#f5f5f5'};
  color: ${props => props.primary ? 'white' : '#2D3648'};
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
    background-color: ${props => props.primary ? '#2FB350' : '#e5e5e5'};
  }
`;

export default function PauseModal({ isOpen, onClose, onResume }) {
  const navigate = useNavigate();

  const handleRestart = () => {
    // Aquí puedes agregar lógica para reiniciar el nivel actual
    onClose();
    // Recargar el componente Game o reiniciar estados
  };

  const handleExit = () => {
    navigate('/level-select');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Pausa">
      <PauseContainer>
        <PauseButton primary onClick={onResume}>
          Continuar
        </PauseButton>
        <PauseButton onClick={handleRestart}>
          Reiniciar nivel
        </PauseButton>
        <PauseButton onClick={handleExit}>
          Salir al menú
        </PauseButton>
      </PauseContainer>
    </Modal>
  );
} 