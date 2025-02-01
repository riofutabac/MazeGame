// FinishedGame.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../contexts/GameContext';
import timerImg from '../../assets/images/timer.webp';
import iconoAtras from '../../assets/images/arrow.webp';
import iconoSonido from '../../assets/images/sound.webp';
import iconoConfig from '../../assets/images/settings.webp';
import imagenRespuesta from '../../assets/images/respuestaPrueba.webp';
import moon from '../../assets/images/moon.webp';
import sun from '../../assets/images/sun.webp';

import {
  LevelSelectContainer,
  HeaderContainer,
  NavigationButtons,
  IconButton,
  Title,
  GameStats,
  TimerContainer,
  AnswersContainer,
  AnswerCard,
  PlayAgainButton,
  StatsDescription,
  Timer
} from './FinishedGame.styles';

import ConfigModal from '../../components/modals/ConfigModal';
import SoundModal from '../../components/modals/SoundModal';

const getLevelContent = (currentLevel) => {
  console.log('Current level:', currentLevel);
  
  if (currentLevel === 1) {
    return {
      title: "La Tierra",
      description: "¡La Tierra es nuestro hogar! Es el único planeta donde podemos vivir porque tiene agua, aire y la temperatura perfecta para nosotros. Es como una pelota gigante azul y verde que gira en el espacio.",
      image: imagenRespuesta
    };
  } else if (currentLevel === 2) {
    return {
      title: "La Luna",
      description: "La Luna es el mejor amigo de la Tierra. Es como una lámpara gigante en el cielo que brilla de noche. ¡Y cambia de forma! A veces parece una galleta completa y otras veces solo un pedacito.",
      image: moon
    };
  } else if (currentLevel === 3) {
    return {
      title: "El Sol",
      description: "El Sol es una estrella enorme y brillante que nos da luz y calor. Es como una gran pelota de fuego que hace que las plantas crezcan y que podamos ver durante el día. ¡Sin el Sol, todo estaría muy frío y oscuro!",
      image: sun
    };
  }
  
  // Si por alguna razón no hay nivel, mostrar el nivel 1
  return {
    title: "La Tierra",
    description: "¡La Tierra es nuestro hogar! Es el único planeta donde podemos vivir porque tiene agua, aire y la temperatura perfecta para nosotros. Es como una pelota gigante azul y verde que gira en el espacio.",
    image: imagenRespuesta
  };
};

function FinishedGame({ stats }) {
  const navigate = useNavigate();
  const { level } = useGame();
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isSoundOpen, setIsSoundOpen] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(level);
  
  useEffect(() => {
    console.log('Stats recibidos en FinishedGame:', stats);
    console.log('Tiempo recibido:', stats?.time);
    const gameLevel = stats?.level || level;
    setCurrentLevel(gameLevel);
  }, [level, stats]);

  const levelContent = getLevelContent(currentLevel);

  // Asegurarnos de que tenemos el tiempo antes de renderizar
  console.log('Tiempo que se va a mostrar:', stats?.time || "00:00");

  return (
    <LevelSelectContainer>
      <HeaderContainer>
        <IconButton 
          onClick={() => navigate('/')}
          tabIndex={1}
        >
          <img src={iconoAtras} alt="Volver al menú principal" />
        </IconButton>
        <Title tabIndex={2}>¡Fin del Juego!</Title>
        <NavigationButtons>
          <IconButton 
            onClick={() => setIsSoundOpen(true)}
            tabIndex={3}
          >
            <img src={iconoSonido} alt="Sonido" />
          </IconButton>
          <IconButton 
            onClick={() => setIsConfigOpen(true)}
            tabIndex={4}
          >
            <img src={iconoConfig} alt="Configuración" />
          </IconButton>
        </NavigationButtons>
      </HeaderContainer>

      <GameStats>
        <TimerContainer>
          <img src={timerImg} alt="Tiempo" />
          <Timer>
            <span 
              tabIndex={5}
              aria-label={(() => {
                const [minutes, seconds] = (stats?.time || "00:00").split(":");
                const minutesText = minutes === "01" ? "minuto" : "minutos";
                const secondsText = seconds === "01" ? "segundo" : "segundos";
                return `Tiempo completado: ${parseInt(minutes)} ${minutesText}, ${parseInt(seconds)} ${secondsText}`;
              })()}
            >
              {stats?.time || "00:00"}
            </span>
          </Timer>
        </TimerContainer>
      </GameStats>

      <AnswersContainer>
        <AnswerCard correct>
          <h2 tabIndex={6}>{levelContent.title}</h2>
          <img 
            src={levelContent.image}
            alt={`Imagen de ${levelContent.title}`}
            className="answer-image"
            tabIndex={7}
          />
          <p className="description" tabIndex={8}>
            {levelContent.description}
          </p>
        </AnswerCard>
      </AnswersContainer>

      <PlayAgainButton 
        onClick={() => navigate('/level-select')}
        tabIndex={9}
      >
        Jugar de nuevo
      </PlayAgainButton>

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

export default FinishedGame;