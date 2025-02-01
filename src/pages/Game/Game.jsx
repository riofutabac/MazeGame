import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { FaPause, FaCog, FaExpand, FaClock } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { useGame } from '../../contexts/GameContext';
import MazeGenerator from '../../logic/MazeGenerator';
import DrawMaze from '../../logic/DrawMaze';
import Player from '../../logic/Player';
import MazeCanvas from '../../components/MazeCanvas';
import MessageModal from '../../components/MessageModal';
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
  const { level, currentQuestion } = useGame();
  const [time, setTime] = useState('05:00');
  const [lives, setLives] = useState(3);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [gameStats, setGameStats] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isSoundOpen, setIsSoundOpen] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(300); // 5 minutos en segundos
  const [isFullscreen, setIsFullscreen] = useState(false);

  const canvasRef = useRef(null);
  const [cellSize, setCellSize] = useState(20);
  const timerRef = useRef(null);

  const [maze, setMaze] = useState(null);
  const [drawer, setDrawer] = useState(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    generateMaze();
  }, [level]);

  useEffect(() => {
    if (currentQuestion) {
      console.log('Nivel actual:', level);
      console.log('Pregunta actual:', currentQuestion);
    }
  }, [level, currentQuestion]);

  useEffect(() => {
    if (!isPaused && !isGameFinished && player) {
      announcePosition(
        "Bienvenido al laberinto. Usa las flechas del teclado para moverte." +
        "Presiona la barra espaciadora para recibir una pista de la siguiente dirección. IMPORTANTE: Debes continuar en la misma dirección hasta recibir una nueva pista diferente. " +
        "El objetivo es llegar al final del laberinto."
      );
    }
  }, [player]);

  // Temporizador
  useEffect(() => {
    if (!isPaused && !isGameFinished && secondsLeft > 0) {
      timerRef.current = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsGameFinished(true);
            return 0;
          }
          const newSeconds = prev - 1;
          const minutes = Math.floor(newSeconds / 60);
          const seconds = newSeconds % 60;
          setTime(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
          return newSeconds;
        });
      }, 1000);

      return () => clearInterval(timerRef.current);
    }
  }, [isPaused, isGameFinished, secondsLeft]);

  const handleResize = () => {
    if (!canvasRef.current) return;

    const minSide = Math.min(window.innerWidth, window.innerHeight) - 100;
    canvasRef.current.width = minSide;
    canvasRef.current.height = minSide;

    setCellSize(Math.floor(minSide / 10));
  };

  const handleMazeComplete = (moves) => {
    setIsGameFinished(true);
    announcePosition("¡Felicitaciones! Has solucionado el laberinto.");
    const stats = {
      time: time,
      moves: moves,
      level: level
    };
    console.log('Completing maze with level:', level);
    setGameStats(stats);
  };

  const generateMaze = () => {
    setShowModal(false);
    setMoves(0);
    setSecondsLeft(300); // Reiniciar temporizador a 5 minutos
    setTime('05:00');

    const newMaze = new MazeGenerator(10, 10);
    const ctx = canvasRef.current.getContext('2d');
    const newDrawer = new DrawMaze(newMaze, ctx, Math.floor(canvasRef.current.width / 10));
    const newPlayer = new Player(
      newMaze,
      ctx,
      Math.floor(canvasRef.current.width / 10),
      handleMazeComplete
    );

    setMaze(newMaze);
    setDrawer(newDrawer);
    setPlayer(newPlayer);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error(`Error al intentar pantalla completa: ${err.message}`);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => {
        console.error(`Error al salir de pantalla completa: ${err.message}`);
      });
    }
  };

  const handleMazeKeyDown = (e) => {
    if (!player || isPaused || isGameFinished) return;
    
    let direction = null;
    switch (e.key) {
      case 'ArrowUp':
        direction = 'up';
        break;
      case 'ArrowDown':
        direction = 'down';
        break;
      case 'ArrowLeft':
        direction = 'left';
        break;
      case 'ArrowRight':
        direction = 'right';
        break;
      case ' ': // Tecla espaciadora
      case 'Enter':
        // Obtener y anunciar el siguiente movimiento
        const currentPos = player.getCurrentPosition();
        const nextMove = maze.getNextMove(currentPos);
        if (nextMove) {
          announcePosition(nextMove);
        } else {
          announcePosition("Has llegado al final del laberinto");
        }
        return;
      default:
        return;
    }

    if (direction) {
      e.preventDefault(); // Prevenir el scroll
      player.move(direction);
    }
  };

  const announcePosition = (message) => {
    const announcement = document.getElementById('maze-announcement');
    if (announcement) {
      announcement.textContent = message;
    }
  };

  return (
    <StyledGame>
      {!isGameFinished ? (
        <GameBoard>
          <GameHeader>
            <TimerContainer tabIndex={1} aria-label={`Tiempo restante: ${time}`}>
              <img src={timerImg} alt="Tiempo" />
              <Timer>
                <span>{time}</span>
              </Timer>
            </TimerContainer>
            <Lives tabIndex={2} aria-label={`${lives} vidas restantes`}>
              {[...Array(lives)].map((_, index) => (
                <AiFillHeart key={index} color="red" />
              ))}
            </Lives>
          </GameHeader>

          <QuestionSection tabIndex={3}>
            <h4>Nivel: {level}</h4>
            <h3>{currentQuestion?.question}</h3>
          </QuestionSection>

          <MazeContainer>
            {/* Elemento para anuncios de lectores de pantalla */}
            <div 
              id="maze-announcement" 
              className="sr-only" 
              role="status" 
              aria-live="polite"
            ></div>
            
            <div 
              role="application"
              tabIndex={4}
              onKeyDown={handleMazeKeyDown}
              aria-label="Bienvenido al laberinto. Usa las flechas del teclado para moverte. Presiona la barra espaciadora para recibir una pista de la siguiente dirección. IMPORTANTE: Debes continuar en la misma dirección hasta recibir una nueva pista diferente. "
            >
              <MazeCanvas canvasRef={canvasRef} />
            </div>
          </MazeContainer>
          
          <GameControls>
            <div className="left-controls">
              <button 
                className="pause-btn" 
                onClick={() => setIsPaused(true)}
                tabIndex={5}
                aria-label="Pausar juego"
              >
                <img src={pauseImg} alt="Botón para pausar el juego" />
              </button>
              <button 
                className="settings-btn" 
                onClick={() => setIsConfigOpen(true)}
                tabIndex={6}
                aria-label="Abrir configuración"
              >
                <img src={settingsImg} alt="Botón para abrir la configuración" />
              </button>
            </div>
            <div className="right-controls">
            </div>
          </GameControls>
        </GameBoard>
      ) : (
        <FinishedGame stats={gameStats} onBackToMenu={() => navigate('/')} />
      )}

      <PauseModal
        isOpen={isPaused}
        onClose={() => setIsPaused(false)}
        onResume={() => setIsPaused(false)}
      />
      <ConfigModal isOpen={isConfigOpen} onClose={() => setIsConfigOpen(false)} />
      <SoundModal isOpen={isSoundOpen} onClose={() => setIsSoundOpen(false)} />
    </StyledGame>
  );
}