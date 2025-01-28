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
  const [time, setTime] = useState(0);
  const [lives, setLives] = useState(3);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [gameStats, setGameStats] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isSoundOpen, setIsSoundOpen] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const canvasRef = useRef(null);
  const timerRef = useRef(null);
  const [cellSize, setCellSize] = useState(20);

  const [maze, setMaze] = useState(null);
  const [drawer, setDrawer] = useState(null);
  const [player, setPlayer] = useState(null);

  // Función para obtener los parámetros del juego según el nivel
  const getGameParameters = (level) => {
    switch (level) {
      case 'easy':
        return {
          mazeWidth: 5,  // Más pequeño y simple
          mazeHeight: 5,
          lives: 5,
          timeLimit: 360 // 6 minutos - mucho tiempo para explorar
        };
      case 'medium':
        return {
          mazeWidth: 7,  // Reducido de 10x10 a 7x7
          mazeHeight: 7,
          lives: 4,      // Más vidas
          timeLimit: 300 // 5 minutos
        };
      case 'hard':
        return {
          mazeWidth: 10,  // Reducido de 15x15 a 10x10
          mazeHeight: 10,
          lives: 3,       // Una vida más
          timeLimit: 240  // 4 minutos
        };
      default:
        return {
          mazeWidth: 7,
          mazeHeight: 7,
          lives: 4,
          timeLimit: 300
        };
    }
  };

  // Iniciar el cronómetro cuando el juego comienza
  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  // Pausar/reanudar el cronómetro cuando el estado de pausa cambia
  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current);
    } else {
      startTimer();
    }
  }, [isPaused]);

  // Función para iniciar el cronómetro
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  // Función para formatear el tiempo
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (level) {
      const params = getGameParameters(level);
      setLives(params.lives);
      setTime(params.timeLimit);
      generateMaze();
    }
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

    setCellSize(Math.floor(minSide / 10));
  };

  const handleGameComplete = (finalMoves) => {
    clearInterval(timerRef.current);
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
    
    const params = getGameParameters(level);
    const newMaze = new MazeGenerator(params.mazeWidth, params.mazeHeight);
    
    const ctx = canvasRef.current.getContext('2d');
    const cellSize = Math.floor(Math.min(
      canvasRef.current.width / params.mazeWidth,
      canvasRef.current.height / params.mazeHeight
    ));
    
    const newDrawer = new DrawMaze(newMaze, ctx, cellSize);
    const newPlayer = new Player(newMaze, ctx, cellSize, handleGameComplete);

    setMaze(newMaze);
    setDrawer(newDrawer);
    setPlayer(newPlayer);
    setCellSize(cellSize);
  };

  useEffect(() => {
    if (isPaused || isGameFinished) {
      clearInterval(timerRef.current);
      return;
    }

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTime(prevTime => {
        const newTime = prevTime - 1;
        if (newTime <= 0) {
          clearInterval(timerRef.current);
          setIsGameFinished(true);
          setGameStats({
            completed: false,
            reason: 'timeout',
            moves: moves,
            timeSpent: getGameParameters(level).timeLimit - newTime,
          });
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isPaused, isGameFinished]);

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
      {!isGameFinished ? (
        <GameBoard>
          <GameHeader>
            <TimerContainer>
              <img src={timerImg} alt="Tiempo" />
              <Timer>
                <span>{formatTime(time)}</span>
              </Timer>
            </TimerContainer>
            <Lives>
              {[...Array(lives)].map((_, index) => (
                <AiFillHeart key={index} color="red" />
              ))}
            </Lives>
          </GameHeader>

          <QuestionSection>
            <h4>Nivel: {level}</h4>
            <h3>{currentQuestion?.question}</h3>
          </QuestionSection>

          <MazeContainer>
            <MazeCanvas canvasRef={canvasRef} />
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
