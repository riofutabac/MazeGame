import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaPause, FaCog, FaExpand, FaClock } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { useGame } from '../../contexts/GameContext';
import useMazeGame from '../../hooks/useGameControls';
import Maze from '../../components/game/Maze';
import pauseImg from '../../assets/images/pause.webp';
import settingsImg from '../../assets/images/settings.webp';
import fullScreenImg from '../../assets/images/expandir.webp';
import timerImg from '../../assets/images/timer.webp';
import FinishedGame from './FinishedGame.jsx';
import PauseModal from '../../components/modals/PauseModal';
import ConfigModal from '../../components/modals/ConfigModal';
import SoundModal from '../../components/modals/SoundModal';

import {
  StyledGame,
  GameHeader,
  QuestionSection,
  GameControls,
  Timer,
  Lives,
  GameBoard,
  MazeContainer,
  TimerContainer,
} from './Game.styles';

export default function Game() {
  const navigate = useNavigate();
  const { level } = useGame();
  const [time, setTime] = useState('00:00');
  const [lives, setLives] = useState(3);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [gameStats, setGameStats] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isSoundOpen, setIsSoundOpen] = useState(false);

  const {
    maze,
    playerPos,
    score,
    gameOver,
    currentQuestion,
    movePlayer,
    fetchNextQuestion,
  } = useMazeGame(level);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setIsPaused(prev => !prev);
      }
      if (e.key.toLowerCase() === 'q') { //esto es temporal
        // Finalizar el juego cuando se presiona 'q'
        const stats = {
          time: time,
          livesLost: 3 - lives, // Calcula vidas perdidas
          totalScore: score,
          question: currentQuestion,
        };
        setGameStats(stats);
        setIsGameFinished(true);
      }
      switch (e.key) {
        case 'ArrowUp': movePlayer('up'); break;
        case 'ArrowDown': movePlayer('down'); break;
        case 'ArrowLeft': movePlayer('left'); break;
        case 'ArrowRight': movePlayer('right'); break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [movePlayer, time, lives, score, currentQuestion]);

  return (
    <StyledGame>
      {!isGameFinished  ? (
      <GameBoard>
        <GameHeader>
          <TimerContainer>
            <img src={timerImg} alt="Tiempo" />
            <Timer>
              <span>{time}</span>
            </Timer>
          </TimerContainer>
          <Lives>
            {[...Array(lives)].map((_, index) => (
              <AiFillHeart key={index} color="red" />
            ))}
          </Lives>
        </GameHeader>

        <QuestionSection>
          <h3>{currentQuestion?.question}</h3>
        </QuestionSection>

        <MazeContainer>
          <Maze
            maze={maze}
            playerPos={playerPos}
          />
        </MazeContainer>
        <GameControls>
          <div className="left-controls">
            <button className="pause-btn" onClick={() => setIsPaused(true)}>
              <img src={pauseImg} alt="Botón para pausar el juego" />
            </button>
            <button className="settings-btn" onClick={() => setIsConfigOpen(true)}>
              <img src={settingsImg} alt="Botón para abrir la configuración" />
            </button>
          </div>
          <div className="right-controls">
            <button className="fullscreen-btn">
              <img src={fullScreenImg} alt="Botón para activar pantalla completa" />
            </button>
          </div>
        </GameControls>
      </GameBoard>

      ) : (
        <FinishedGame
          stats={gameStats}
          onBackToMenu={() => navigate('/')}
        />
      )}

      <PauseModal 
        isOpen={isPaused}
        onClose={() => setIsPaused(false)}
        onResume={() => setIsPaused(false)}
      />
      <ConfigModal 
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
      />
      <SoundModal 
        isOpen={isSoundOpen}
        onClose={() => setIsSoundOpen(false)}
      />
    </StyledGame>
  );
}
