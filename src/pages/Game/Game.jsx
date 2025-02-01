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
  const [time, setTime] = useState('00:00');
  const [lives, setLives] = useState(3);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [gameStats, setGameStats] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isSoundOpen, setIsSoundOpen] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const canvasRef = useRef(null);
  const [cellSize, setCellSize] = useState(20);

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

  const handleResize = () => {
    if (!canvasRef.current) return;

    const minSide = Math.min(window.innerWidth, window.innerHeight) - 100;
    canvasRef.current.width = minSide;
    canvasRef.current.height = minSide;

    setCellSize(Math.floor(minSide / 10)); // Ajusta según la dificultad
  };

  const handleGameComplete = (finalMoves) => {
    setMoves(finalMoves);
    setIsGameFinished(true);
    setGameStats({
      moves: finalMoves,
      time: time,
      question: currentQuestion,
      level: level
    });
  };

  const generateMaze = () => {
    setShowModal(false);
    setMoves(0);

    const newMaze = new MazeGenerator(10, 10);
    const ctx = canvasRef.current.getContext('2d');
    const newDrawer = new DrawMaze(newMaze, ctx, Math.floor(canvasRef.current.width / 10));
    const newPlayer = new Player(
      newMaze,
      ctx,
      Math.floor(canvasRef.current.width / 10),
      handleGameComplete
    );

    setMaze(newMaze);
    setDrawer(newDrawer);
    setPlayer(newPlayer);
  };

  const handleKeyDown = (e) => {
    if (!player) return;
    switch (e.key) {
      case 'ArrowUp':
        player.move('up');
        break;
      case 'ArrowDown':
        player.move('down');
        break;
      case 'ArrowLeft':
        player.move('left');
        break;
      case 'ArrowRight':
        player.move('right');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <StyledGame>
      <GameHeader role="banner">
        <GameControls>
          <button 
            onClick={() => setIsPaused(true)} 
            aria-label="Pausar juego"
            tabIndex={1}
          >
            <FaPause />
          </button>
          <button 
            onClick={() => setIsConfigOpen(true)} 
            aria-label="Abrir configuración"
            tabIndex={2}
          >
            <FaCog />
          </button>
          <button 
            onClick={() => {
              // Implementar función para activar pantalla completa
            }} 
            aria-label="Pantalla completa"
            tabIndex={3}
          >
            <FaExpand />
          </button>
        </GameControls>

        <TimerContainer role="timer" aria-label="Tiempo de juego">
          <FaClock aria-hidden="true" />
          <Timer>{time}</Timer>
        </TimerContainer>

        <Lives role="status" aria-label={`${lives} vidas restantes`}>
          {Array.from({ length: lives }).map((_, index) => (
            <AiFillHeart key={index} aria-hidden="true" />
          ))}
        </Lives>
      </GameHeader>

      {currentQuestion && (
        <QuestionSection role="region" aria-label="Pregunta actual">
          <h2 tabIndex={4}>{currentQuestion.question}</h2>
        </QuestionSection>
      )}

      <GameBoard>
        <MazeContainer 
          role="application" 
          aria-label="Laberinto del juego"
        >
          <MazeCanvas 
            ref={canvasRef} 
            tabIndex={5}
            aria-label="Canvas del laberinto. Use las flechas del teclado para mover al jugador"
            onKeyDown={handleKeyDown}
          />
        </MazeContainer>
      </GameBoard>

      {showModal && (
        <MessageModal 
          message={currentQuestion?.feedback || ''} 
          onClose={() => setShowModal(false)}
          tabIndex={6}
          role="dialog"
          aria-modal="true"
        />
      )}

      {isPaused && (
        <PauseModal 
          onClose={() => setIsPaused(false)}
          onResume={() => setIsPaused(false)}
          tabIndex={7}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de pausa"
        />
      )}

      {isConfigOpen && (
        <ConfigModal 
          onClose={() => setIsConfigOpen(false)}
          onSoundSettings={() => {
            setIsConfigOpen(false);
            setIsSoundOpen(true);
          }}
          tabIndex={8}
          role="dialog"
          aria-modal="true"
          aria-label="Configuración del juego"
        />
      )}

      {isSoundOpen && (
        <SoundModal 
          onClose={() => setIsSoundOpen(false)}
          tabIndex={9}
          role="dialog"
          aria-modal="true"
          aria-label="Configuración de sonido"
        />
      )}

      {isGameFinished && (
        <FinishedGame 
          stats={gameStats}
          tabIndex={10}
          role="dialog"
          aria-modal="true"
          aria-label="Juego terminado"
        />
      )}
    </StyledGame>
  );
}
