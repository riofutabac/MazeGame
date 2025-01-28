import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'es');
  const [timerEnabled, setTimerEnabled] = useState(true);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem('userLanguage', newLang);
  };

  const handleTimerToggle = (e) => {
    setTimerEnabled(e.target.checked);
    // Aquí puedes implementar la lógica para activar/desactivar el temporizador
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ConfigMenuContainer>
        <h2>{t('config.title')}</h2>
        
        <ConfigOption>
          <label>{t('config.language')}</label>
          <select value={language} onChange={handleLanguageChange}>
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </ConfigOption>

        <ConfigOption>
          <label>{t('config.timer')}</label>
          <ToggleSwitch>
            <input 
              type="checkbox" 
              checked={timerEnabled}
              onChange={handleTimerToggle}
            />
            <span>{timerEnabled ? t('config.enabled') : t('config.disabled')}</span>
          </ToggleSwitch>
        </ConfigOption>
      </ConfigMenuContainer>
    </Modal>
  );
}