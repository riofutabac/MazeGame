// LevelSelect.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../contexts/GameContext';
import imagenLaberintoMuestra from '../../assets/images/laberinto-muestra.webp';
import iconoAtras from '../../assets/images/arrow.webp'
import iconoSonido from '../../assets/images/sound.webp';
import iconoConfig from '../../assets/images/settings.webp';
import ConfigModal from '../../components/modals/ConfigModal';
import SoundModal from '../../components/modals/SoundModal';

import {
  LevelSelectContainer,
  HeaderContainer,
  NavigationButtons,
  IconButton,
  Title,
  LevelSelectMenuContainer,
  LevelCard,
} from './LevelSelect.styles';

function LevelSelect() {
  const navigate = useNavigate();
  const { setLevel } = useGame();
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isSoundOpen, setIsSoundOpen] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    document.title = 'Selección de Nivel - Persecución en el Laberinto';
  }, []);

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const handleLevelSelect = (level, levelName) => {
    try {
      setLevel(level);
      setAnnouncement(`Has seleccionado el nivel ${levelName}`);
      setTimeout(() => navigate('/game'), 500);
    } catch (error) {
      console.error('Error al seleccionar nivel:', error);
      setAnnouncement('Error al seleccionar el nivel');
    }
  };

  return (
    <LevelSelectContainer role="main" aria-label="Selección de nivel">
      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>

      <HeaderContainer role="banner">
        <IconButton 
          onClick={() => navigate('/')}
          onKeyPress={(e) => handleKeyPress(e, () => navigate('/'))}
          aria-label="Volver al menú principal"
          tabIndex="0"
        >
          <img src={iconoAtras} alt="" aria-hidden="true" />
        </IconButton>

        <Title tabIndex="0">Selecciona un nivel para comenzar</Title>

        <NavigationButtons role="navigation" aria-label="Controles adicionales">
          <IconButton 
            onClick={() => setIsSoundOpen(true)}
            onKeyPress={(e) => handleKeyPress(e, () => setIsSoundOpen(true))}
            aria-label="Configuración de sonido"
            tabIndex="0"
          >
            <img src={iconoSonido} alt="" aria-hidden="true" />
          </IconButton>
          <IconButton 
            onClick={() => setIsConfigOpen(true)}
            onKeyPress={(e) => handleKeyPress(e, () => setIsConfigOpen(true))}
            aria-label="Configuración del juego"
            tabIndex="0"
          >
            <img src={iconoConfig} alt="" aria-hidden="true" />
          </IconButton>
        </NavigationButtons>
      </HeaderContainer>

      <LevelSelectMenuContainer role="list" aria-label="Lista de niveles disponibles">
        <LevelCard 
          bgColor="#34C759" 
          role="listitem" 
          tabIndex="0"
          aria-label="Nivel Fácil"
        >
          <h1 tabIndex="0">Fácil</h1>
          <img src={imagenLaberintoMuestra} alt="" aria-hidden="true" />
          <p tabIndex="0">
            En este nivel, las preguntas son fáciles y divertidas. ¡Son perfectas para empezar y
            poner a prueba lo que ya sabes!
          </p>
          <button 
            onClick={() => handleLevelSelect('easy', 'fácil')}
            onKeyPress={(e) => handleKeyPress(e, () => handleLevelSelect('easy', 'fácil'))}
            aria-label="Comenzar nivel fácil"
          >
            Jugar
          </button>
        </LevelCard>

        <LevelCard 
          bgColor="#FFD43A" 
          role="listitem" 
          tabIndex="0"
          aria-label="Nivel Medio"
        >
          <h1 tabIndex="0">Medio</h1>
          <img src={imagenLaberintoMuestra} alt="" aria-hidden="true" />
          <p tabIndex="0">
            Aquí las preguntas son un poquito más difíciles. ¡Tendrás que pensar un poco más! Pero
            no te preocupes, ¡estás listo para el reto!
          </p>
          <button 
            onClick={() => handleLevelSelect('medium', 'medio')}
            onKeyPress={(e) => handleKeyPress(e, () => handleLevelSelect('medium', 'medio'))}
            aria-label="Comenzar nivel medio"
          >
            Jugar
          </button>
        </LevelCard>

        <LevelCard 
          bgColor="#FF5252" 
          role="listitem" 
          tabIndex="0"
          aria-label="Nivel Difícil"
        >
          <h1 tabIndex="0">Difícil</h1>
          <img src={imagenLaberintoMuestra} alt="" aria-hidden="true" />
          <p tabIndex="0">
            Este es el nivel para los verdaderos expertos. Las preguntas son complicadas, pero con
            tu conocimiento y habilidad, seguro que puedes con ellas. ¡A darlo todo!
          </p>
          <button 
            onClick={() => handleLevelSelect('hard', 'difícil')}
            onKeyPress={(e) => handleKeyPress(e, () => handleLevelSelect('hard', 'difícil'))}
            aria-label="Comenzar nivel difícil"
          >
            Jugar
          </button>
        </LevelCard>
      </LevelSelectMenuContainer>

      <ConfigModal 
        isOpen={isConfigOpen} 
        onClose={() => setIsConfigOpen(false)} 
        aria-label="Modal de configuración"
      />
      <SoundModal 
        isOpen={isSoundOpen} 
        onClose={() => setIsSoundOpen(false)} 
        aria-label="Modal de configuración de sonido"
      />
    </LevelSelectContainer>
  );
}

export default LevelSelect;