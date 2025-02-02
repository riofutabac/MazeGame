import { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';

const ConfigMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
    font-weight: bold;
  }

  select {
    padding: 0.8rem;
    border-radius: 8px;
    border: 2px solid #2D3648;
    font-size: 1rem;
    cursor: pointer;
    color: #2D3648;
    background: white;
    width: 100%;
    
    &:focus {
      outline: none;
      border-color: #3d4861;
      box-shadow: 0 0 0 2px rgba(45, 54, 72, 0.2);
    }
  }
`;

const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #2D3648;
  margin-top: 0.5rem;

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
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    &:checked:before {
      left: 26px;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(45, 54, 72, 0.2);
    }
  }

  span {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Button = styled.button`
  background: #2D3648;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  transition: background 0.3s;

  &:hover {
    background: #3d4861;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(45, 54, 72, 0.2);
  }
`;

export default function ConfigModal({ isOpen, onClose }) {
  const [language, setLanguage] = useState('es');
  const [timerEnabled, setTimerEnabled] = useState(true);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleTimerToggle = (e) => {
    setTimerEnabled(e.target.checked);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Configuración">
      <ConfigMenuContainer role="dialog" aria-label="Menú de configuración">      
        <ConfigOption>
          <label htmlFor="timer-toggle" tabIndex={0}>Temporizador</label>
          <ToggleSwitch>
            <input 
              id="timer-toggle"
              type="checkbox" 
              checked={timerEnabled}
              onChange={handleTimerToggle}
              tabIndex={0}
              aria-label={`Temporizador ${timerEnabled ? 'activado' : 'desactivado'}`}
            />
            <span role="status" aria-live="polite" tabIndex={0}>
              {timerEnabled ? 'Activado' : 'Desactivado'}
            </span>
          </ToggleSwitch>
        </ConfigOption>

        <Button 
          onClick={onClose}
          tabIndex={0}
          aria-label="Guardar configuración y cerrar menú"
        >
          Guardar y Cerrar
        </Button>
      </ConfigMenuContainer>
    </Modal>
  );
}