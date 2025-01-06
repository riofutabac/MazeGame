// FinishedGame.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import timerImg from '../../assets/images/timer.webp';
import iconoAtras from '../../assets/images/arrow.webp';
import iconoSonido from '../../assets/images/sound.webp';
import iconoConfig from '../../assets/images/settings.webp';
import imagenRespuesta from '../../assets/images/respuestaPrueba.webp';

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

function FinishedGame({ stats }) {
  const navigate = useNavigate();
  const question = stats?.question;

  return (
    <LevelSelectContainer>
      <HeaderContainer>
        <IconButton onClick={() => navigate('/')}>
          <img src={iconoAtras} alt="Volver al menú principal" />
        </IconButton>
        <Title>¡Fin del Juego!</Title>
        <NavigationButtons>
          <IconButton>
            <img src={iconoSonido} alt="Sonido" />
          </IconButton>
          <IconButton>
            <img src={iconoConfig} alt="Configuración" />
          </IconButton>
        </NavigationButtons>
      </HeaderContainer>

      <GameStats>
      <TimerContainer>
            <img src={timerImg} alt="Botón para abrir la configuración" />
            <Timer>
              <span>{stats?.time || "00:00"}</span>
            </Timer>
          </TimerContainer>
      </GameStats>

      <AnswersContainer>
        <AnswerCard correct>
          <h2>{question?.answers.find(answer => answer.correct)?.text}</h2>
          <img 
            src={imagenRespuesta} 
            alt="Respuesta correcta" 
            className="answer-image"
          />
          <p className="description">
            {question?.answers.find(answer => answer.correct)?.description}
          </p>
        </AnswerCard>

        {question?.answers.filter(answer => !answer.correct).map((wrongAnswer, index) => (
          <AnswerCard key={index} incorrect>
            <h2>{wrongAnswer.text}</h2>
            <img 
              src={imagenRespuesta} 
              alt={`Opción ${index + 1}`} 
              className="answer-image"
            />
            <p className="description">
              {wrongAnswer.description}
            </p>
          </AnswerCard>
        ))}
      </AnswersContainer>

      {/* <StatsDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </StatsDescription> */}

      <PlayAgainButton onClick={() => navigate('/level-select')}>
        Jugar de nuevo
      </PlayAgainButton>
    </LevelSelectContainer>
  );
}

export default FinishedGame;