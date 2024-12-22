// src/pages/Game.jsx
import { useNavigate } from 'react-router-dom'; // Añade esta importación
import { useEffect } from 'react';
import styled from 'styled-components';
import { useGame } from '../contexts/GameContext';
import useMazeGame from '../hooks/useGameControls';
import Maze from '../components/game/Maze';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Game() {
  const navigate = useNavigate();
  const { level } = useGame();
  const { 
    maze, 
    playerPos, 
    score, 
    gameOver, 
    currentQuestion,
    movePlayer 
  } = useMazeGame(level);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch(e.key) {
        case 'ArrowUp': movePlayer('up'); break;
        case 'ArrowDown': movePlayer('down'); break;
        case 'ArrowLeft': movePlayer('left'); break;
        case 'ArrowRight': movePlayer('right'); break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [movePlayer]);

  return (
    <GameContainer>
      <GameHeader>
        <BackButton onClick={() => navigate('/')}>Volver al Menú</BackButton>
        <div>Nivel: {level}</div>
        <div>Puntuación: {score}</div>
      </GameHeader>
      <Maze 
        maze={maze} 
        playerPos={playerPos}
        currentQuestion={currentQuestion}
        //imprimir 
      />
      {gameOver && (
        <div>
          <h2>¡Juego terminado!</h2>
          <button onClick={() => navigate('/')}>Volver al menú</button>
        </div>
      )}
    </GameContainer>
  );
}