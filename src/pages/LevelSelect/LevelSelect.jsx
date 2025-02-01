// LevelSelect.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../contexts/GameContext';
import imagenLaberintoMuestra from '../../assets/images/laberinto-muestra.webp';
import iconoAtras from '../../assets/images/arrow.webp';
import volumenUp from '../../assets/images/volumenup.webp';
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

  const handleLevelSelect = (level) => {
    try {
      setLevel(level);
      navigate('/game');
    } catch (error) {
      console.error('Error al seleccionar nivel:', error);
    }
  };

  return (
    <LevelSelectContainer role="main">
      <HeaderContainer>
        <IconButton 
          onClick={() => navigate('/')}
          tabIndex={0}
          aria-label="Volver al menú principal"
        >
          <img src={iconoAtras} alt="Volver" />
        </IconButton>
        
        <Title tabIndex={0}>Selecciona un nivel para comenzar</Title>
        
        <NavigationButtons>
          <IconButton 
            onClick={() => setIsSoundOpen(true)}
            tabIndex={0}
            aria-label="Configuración de sonido"
          >
            <img src={volumenUp} alt="Sonido" />
          </IconButton>
          <IconButton 
            onClick={() => setIsConfigOpen(true)}
            tabIndex={0}
            aria-label="Configuración del juego"
          >
            <img src={iconoConfig} alt="Configuración" />
          </IconButton>
        </NavigationButtons>
      </HeaderContainer>

      <LevelSelectMenuContainer role="list">
        <LevelCard 
          bgColor="#34C759"
          role="listitem"
          tabIndex={0}
          aria-label="Nivel Fácil"
        >
          <h1 tabIndex={0}>Fácil</h1>
          <img src={imagenLaberintoMuestra} alt="Laberinto de nivel fácil" tabIndex={0} />
          <p tabIndex={0}>
            En este nivel, las preguntas son fáciles y divertidas. ¡Son perfectas para empezar y
            poner a prueba lo que ya sabes!
          </p>
          <button 
            onClick={() => handleLevelSelect('easy')}
            tabIndex={0}
            aria-label="Jugar nivel fácil"
          >
            Jugar
          </button>
        </LevelCard>

        <LevelCard 
          bgColor="#FFD43A"
          role="listitem"
          tabIndex={0}
          aria-label="Nivel Medio"
        >
          <h1 tabIndex={0}>Medio</h1>
          <img src={imagenLaberintoMuestra} alt="Laberinto de nivel medio" tabIndex={0} />
          <p tabIndex={0}>
            Aquí las preguntas son un poquito más difíciles. ¡Tendrás que pensar un poco más! Pero
            no te preocupes, ¡estás listo para el reto!
          </p>
          <button 
            onClick={() => handleLevelSelect('medium')}
            tabIndex={0}
            aria-label="Jugar nivel medio"
          >
            Jugar
          </button>
        </LevelCard>

        <LevelCard 
          bgColor="#FF5252"
          role="listitem"
          tabIndex={0}
          aria-label="Nivel Difícil"
        >
          <h1 tabIndex={0}>Difícil</h1>
          <img src={imagenLaberintoMuestra} alt="Laberinto de nivel difícil" tabIndex={0} />
          <p tabIndex={0}>
            Este es el nivel para los verdaderos expertos. Las preguntas son complicadas, pero con
            tu conocimiento y habilidad, seguro que puedes con ellas. ¡A darlo todo!
          </p>
          <button 
            onClick={() => handleLevelSelect('hard')}
            tabIndex={0}
            aria-label="Jugar nivel difícil"
          >
            Jugar
          </button>
        </LevelCard>
      </LevelSelectMenuContainer>

      <ConfigModal 
        isOpen={isConfigOpen} 
        onClose={() => setIsConfigOpen(false)} 
      />
      <SoundModal 
        isOpen={isSoundOpen} 
        onClose={() => setIsSoundOpen(false)} 
      />
    </LevelSelectContainer>
  );
}

export default LevelSelect;