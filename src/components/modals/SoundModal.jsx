import React from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';

const SoundMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  color: #2D3648;
`;

const VolumeControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1rem;
    color: #2D3648;
  }

  input[type="range"] {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    -webkit-appearance: none;
    background: #ddd;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      background: #2D3648;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

export default function SoundModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <SoundMenuContainer>
        <h2>Configuración de Audio</h2>
        <VolumeControl>
          <label>Música</label>
          <input type="range" min="0" max="100" defaultValue="50" />
        </VolumeControl>
        <VolumeControl>
          <label>Efectos de Sonido</label>
          <input type="range" min="0" max="100" defaultValue="50" />
        </VolumeControl>
      </SoundMenuContainer>
    </Modal>
  );
} 