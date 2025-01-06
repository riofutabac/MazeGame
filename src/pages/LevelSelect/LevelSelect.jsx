// LevelSelect.jsx
import React, { useState } from 'react';
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

  const handleLevelSelect = (level) => {
    try {
      setLevel(level);
      navigate('/game');
    } catch (error) {
      console.error('Error al seleccionar nivel:', error);
    }
  };

  return (
    <LevelSelectContainer>
      <HeaderContainer>
        <IconButton onClick={() => navigate('/')}>
          <img src={iconoAtras} alt="Volver" />
        </IconButton>
        <Title>Selecciona un nivel para comenzar</Title>
        <NavigationButtons>
          <IconButton onClick={() => setIsSoundOpen(true)}>
            <img src={iconoSonido} alt="Sonido" />
          </IconButton>
          <IconButton onClick={() => setIsConfigOpen(true)}>
            <img src={iconoConfig} alt="Configuración" />
          </IconButton>
        </NavigationButtons>
      </HeaderContainer>

      <LevelSelectMenuContainer>
        <LevelCard bgColor="#34C759">
          <h1>Fácil</h1>
          <img src={imagenLaberintoMuestra} alt="Fácil" />
          <p>
            En este nivel, las preguntas son fáciles y divertidas. ¡Son perfectas para empezar y
            poner a prueba lo que ya sabes!
          </p>
          <button onClick={() => handleLevelSelect('easy')}>Jugar</button>
        </LevelCard>

        <LevelCard bgColor="#FFD43A">
          <h1>Medio</h1>
          <img src={imagenLaberintoMuestra} alt="Medio" />
          <p>
            Aquí las preguntas son un poquito más difíciles. ¡Tendrás que pensar un poco más! Pero
            no te preocupes, ¡estás listo para el reto!
          </p>
          <button onClick={() => handleLevelSelect('medium')}>Jugar</button>
        </LevelCard>

        <LevelCard bgColor="#FF5252">
          <h1>Difícil</h1>
          <img src={imagenLaberintoMuestra} alt="Difícil" />
          <p>
            Este es el nivel para los verdaderos expertos. Las preguntas son complicadas, pero con
            tu conocimiento y habilidad, seguro que puedes con ellas. ¡A darlo todo!
          </p>
          <button onClick={() => handleLevelSelect('hard')}>Jugar</button>
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