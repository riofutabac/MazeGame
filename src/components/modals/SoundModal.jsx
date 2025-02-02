import { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import volumenDown from '../../assets/images/volumendown.webp';
import volumenUp from '../../assets/images/volumenup.webp';

const SoundMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  color: #2D3648;
`;

const VolumeControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  label {
    font-size: 1.1rem;
    color: #2D3648;
    font-weight: bold;
  }

  .volume-slider {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      background: none;
      border: none;
      color: #2D3648;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;

      img {
        width: 56px;
        height: 56px;
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(45, 54, 72, 0.2);
      }
    }

    input[type="range"] {
      flex: 1;
      height: 8px;
      border-radius: 4px;
      -webkit-appearance: none;
      background: #ddd;
      border: 2px solid #2D3648;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        background: #2D3648;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(45, 54, 72, 0.2);
      }
    }
  }
`;

const SoundOption = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  label {
    font-size: 1rem;
    color: #2D3648;
    cursor: pointer;
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

export default function SoundModal({ isOpen, onClose }) {
  const [musicVolume, setMusicVolume] = useState(50);
  const [effectsVolume, setEffectsVolume] = useState(50);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [effectsEnabled, setEffectsEnabled] = useState(true);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Configuración de Audio">
      <SoundMenuContainer role="dialog" aria-label="Menú de configuración de audio">       
        <VolumeControl>
          <label htmlFor="music-volume" tabIndex={0}>Música</label>
          <div className="volume-slider" role="group" aria-label="Control de volumen de música">
            <button 
              onClick={() => setMusicVolume(0)}
              aria-label="Silenciar música"
              tabIndex={0}
            >
              <img src={volumenDown} alt="" />
            </button>
            <input 
              type="range" 
              id="music-volume"
              min="0" 
              max="100" 
              value={musicVolume}
              onChange={(e) => setMusicVolume(e.target.value)}
              tabIndex={0}
              aria-label={`Volumen de música: ${musicVolume}%`}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={musicVolume}
            />
            <button 
              onClick={() => setMusicVolume(100)}
              aria-label="Volumen máximo de música"
              tabIndex={0}
            >
              <img src={volumenUp} alt="" />
            </button>
          </div>
        </VolumeControl>

        <VolumeControl>
          <label htmlFor="effects-volume" tabIndex={0}>Efectos de Sonido</label>
          <div className="volume-slider" role="group" aria-label="Control de volumen de efectos">
            <button 
              onClick={() => setEffectsVolume(0)}
              aria-label="Silenciar efectos"
              tabIndex={0}
            >
              <img src={volumenDown} alt="" />
            </button>
            <input 
              type="range" 
              id="effects-volume"
              min="0" 
              max="100" 
              value={effectsVolume}
              onChange={(e) => setEffectsVolume(e.target.value)}
              tabIndex={0}
              aria-label={`Volumen de efectos: ${effectsVolume}%`}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={effectsVolume}
            />
            <button 
              onClick={() => setEffectsVolume(100)}
              aria-label="Volumen máximo de efectos"
              tabIndex={0}
            >
              <img src={volumenUp} alt="" />
            </button>
          </div>
        </VolumeControl>

        <div role="group" aria-label="Opciones de sonido">
          <SoundOption>
            <input 
              type="checkbox"
              id="music-enabled"
              checked={musicEnabled}
              onChange={(e) => setMusicEnabled(e.target.checked)}
              tabIndex={0}
              aria-label={`Música de fondo ${musicEnabled ? 'activada' : 'desactivada'}`}
            />
            <label htmlFor="music-enabled" tabIndex={0}>Música de Fondo</label>
          </SoundOption>

          <SoundOption>
            <input 
              type="checkbox"
              id="effects-enabled"
              checked={effectsEnabled}
              onChange={(e) => setEffectsEnabled(e.target.checked)}
              tabIndex={0}
              aria-label={`Efectos de sonido ${effectsEnabled ? 'activados' : 'desactivados'}`}
            />
            <label htmlFor="effects-enabled" tabIndex={0}>Efectos de Sonido</label>
          </SoundOption>
        </div>

        <Button 
          onClick={onClose}
          tabIndex={0}
          aria-label="Guardar configuración de audio y cerrar menú"
        >
          Guardar y Cerrar
        </Button>
      </SoundMenuContainer>
    </Modal>
  );
}