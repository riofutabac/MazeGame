import React from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';

const SoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const VolumeControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Slider = styled.input`
  width: 100%;
`;

export default function SoundModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sonido">
      <SoundContainer>
        <VolumeControl>
          <span>Música</span>
          <Slider type="range" min="0" max="100" />
        </VolumeControl>
        <VolumeControl>
          <span>Efectos</span>
          <Slider type="range" min="0" max="100" />
        </VolumeControl>
      </SoundContainer>
    </Modal>
  );
} 