import { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';

const ConfigMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  color: #2D3648;
`;

const ConfigOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 1.1rem;
    color: #2D3648;
    font-weight: 500;
  }

  select {
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid #2D3648;
    font-size: 1rem;
    cursor: pointer;
    color: #2D3648;
    
    &:focus {
      outline: none;
      border-color: #2D3648;
    }
  }
`;

const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #2D3648;

  input[type="checkbox"] {
    width: 50px;
    height: 26px;
    appearance: none;
    background: #ddd;
    border-radius: 13px;
    position: relative;
    cursor: pointer;
    transition: background 0.3s;

    &:checked {
      background: #2D3648;
    }

    &:before {
      content: '';
      width: 22px;
      height: 22px;
      background: white;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
      transition: left 0.3s;
    }

    &:checked:before {
      left: 26px;
    }
  }
`;

export default function ConfigModal({ isOpen, onClose }) {
  const [language, setLanguage] = useState('es');
  const [timerEnabled, setTimerEnabled] = useState(true);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Aquí puedes implementar la lógica para cambiar el idioma
  };

  const handleTimerToggle = (e) => {
    setTimerEnabled(e.target.checked);
    // Aquí puedes implementar la lógica para activar/desactivar el temporizador
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ConfigMenuContainer>
        <h2>Configuración</h2>
        
        <ConfigOption>
          <label>Idioma</label>
          <select value={language} onChange={handleLanguageChange}>
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </ConfigOption>

        <ConfigOption>
          <label>Temporizador</label>
          <ToggleSwitch>
            <input 
              type="checkbox" 
              checked={timerEnabled}
              onChange={handleTimerToggle}
            />
            <span>{timerEnabled ? 'Activado' : 'Desactivado'}</span>
          </ToggleSwitch>
        </ConfigOption>
      </ConfigMenuContainer>
    </Modal>
  );
} 