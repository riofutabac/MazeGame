import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';

const ConfigContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ConfigOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: #34C759;
  }

  input:checked + span:before {
    transform: translateX(26px);
  }
`;

export default function ConfigModal({ isOpen, onClose }) {
  const [config, setConfig] = useState({
    difficulty: 'medium',
    language: 'es',
    showTimer: true,
    showHints: true,
  });

  const handleChange = (key, value) => {
    setConfig(prev => ({
      ...prev,
      [key]: value
    }));
    // Aquí podrías guardar los cambios en localStorage o en tu estado global
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Configuración">
      <ConfigContainer>
        <ConfigOption>
          <span>Dificultad</span>
          <Select 
            value={config.difficulty}
            onChange={(e) => handleChange('difficulty', e.target.value)}
          >
            <option value="easy">Fácil</option>
            <option value="medium">Medio</option>
            <option value="hard">Difícil</option>
          </Select>
        </ConfigOption>

        <ConfigOption>
          <span>Idioma</span>
          <Select 
            value={config.language}
            onChange={(e) => handleChange('language', e.target.value)}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </Select>
        </ConfigOption>

        <ConfigOption>
          <span>Mostrar temporizador</span>
          <Toggle>
            <input 
              type="checkbox"
              checked={config.showTimer}
              onChange={(e) => handleChange('showTimer', e.target.checked)}
            />
            <span></span>
          </Toggle>
        </ConfigOption>

        <ConfigOption>
          <span>Mostrar pistas</span>
          <Toggle>
            <input 
              type="checkbox"
              checked={config.showHints}
              onChange={(e) => handleChange('showHints', e.target.checked)}
            />
            <span></span>
          </Toggle>
        </ConfigOption>
      </ConfigContainer>
    </Modal>
  );
} 