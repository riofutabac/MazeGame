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
  const [secondsLeft, setSecondsLeft] = useState(300);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [startTime] = useState(Date.now());

  const canvasRef = useRef(null);
  const [cellSize, setCellSize] = useState(20);
  const timerRef = useRef(null);

  const maze = useRef(null);
  const drawer = useRef(null);
  const player = useRef(null);

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
    if (!isPaused && !isGameFinished && player.current) {
      announcePosition(
        "Bienvenido al laberinto. Usa las flechas del teclado para moverte." +
        "Presiona la barra espaciadora para recibir una pista de la siguiente dirección. IMPORTANTE: Debes continuar en la misma dirección hasta recibir una nueva pista diferente. " +
        "El objetivo es llegar al final del laberinto."
      );
    }
  }, [player]);

  useEffect(() => {
    if (!isPaused && !isGameFinished) {
      timerRef.current = setInterval(() => {
        const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
        const remaining = Math.max(300 - elapsedSeconds, 0);
        
        setSecondsLeft(remaining);
        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;
        setTime(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);

        if (remaining <= 0) {
          clearInterval(timerRef.current);
          setIsGameFinished(true);
        }
      }, 1000);

      return () => clearInterval(timerRef.current);
    }
  }, [isPaused, isGameFinished, startTime]);

  const handleMazeComplete = (moves) => {
    clearInterval(timerRef.current);
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    const timeSpent = Math.min(elapsedSeconds, 300);
    
    console.log('Tiempo transcurrido en segundos:', timeSpent);
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const stats = {
      time: formattedTime,
      moves: moves,
      level: level
    };
    console.log('Stats completos:', stats);
    setGameStats(stats);
    setIsGameFinished(true);
    announcePosition("¡Felicitaciones! Has solucionado el laberinto.");
  };

  const handleResize = () => {
    if (!canvasRef.current) return;

    const minSide = Math.min(window.innerWidth, window.innerHeight) - 100;
    canvasRef.current.width = minSide;
    canvasRef.current.height = minSide;

    const dimension = getMazeDimensions(level);
    setCellSize(Math.floor(minSide / dimension));

    // Si el laberinto ya existe, redibujarlo con el nuevo tamaño
    if (maze.current && drawer.current && player.current) {
      const ctx = canvasRef.current.getContext('2d');
      const newCellSize = Math.floor(minSide / dimension);
      drawer.current = new DrawMaze(maze.current, ctx, newCellSize);
      player.current = new Player(maze.current, ctx, newCellSize, handleMazeComplete);
    }
  };

  const getMazeDimensions = (level) => {
    switch(level) {
      case 1: return 5;  // Fácil: 5x5
      case 2: return 7;  // Medio: 7x7
      case 3: return 10; // Difícil: 10x10
      default: return 5;
    }
  };

  const generateMaze = () => {
    setShowModal(false);
    setMoves(0);
    setSecondsLeft(300); 
    setTime('05:00');

    const dimension = getMazeDimensions(level);
    const newMaze = new MazeGenerator(dimension, dimension, level);
    const ctx = canvasRef.current.getContext('2d');
    const cellSize = Math.floor(canvasRef.current.width / dimension);
    const newDrawer = new DrawMaze(newMaze, ctx, cellSize);
    const newPlayer = new Player(
      newMaze,
      ctx,
      cellSize,
      handleMazeComplete
    );

    maze.current = newMaze;
    drawer.current = newDrawer;
    player.current = newPlayer;
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
    if (!player.current || isPaused || isGameFinished) return;
    
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
      case ' ': 
      case 'Enter':
        e.preventDefault();
        const currentPos = player.current.getCurrentPosition();
        const nextMove = maze.current.getNextMove(currentPos);
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
      e.preventDefault(); 
      player.current.move(direction);
    }
  };

  const announcePosition = (message) => {
    const announcement = document.getElementById('maze-announcement');
    if (announcement) {
      // Limpiar el contenido anterior
      announcement.textContent = '';
      // Forzar un reflow para asegurar que el screen reader lo lea
      void announcement.offsetWidth;
      // Establecer el nuevo mensaje
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
            <div 
              id="maze-announcement" 
              className="sr-only" 
              aria-live="assertive"
              aria-atomic="true"
            ></div>
            
            <div 
              tabIndex={4}
              onKeyDown={handleMazeKeyDown}
              aria-label="Laberinto. Usa las flechas del teclado para moverte. Presiona la barra espaciadora para recibir una pista de la siguiente dirección."
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