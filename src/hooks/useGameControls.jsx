// src/hooks/useMazeGame.js
import { useState, useEffect } from 'react';
import { mazes } from '../utils/mazes';
import { questions } from '../utils/questions';

export default function useMazeGame(level) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [maze, setMaze] = useState([]);
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const initializeGame = () => {
      const levelMazes = mazes[level];
      const randomMaze = levelMazes[Math.floor(Math.random() * levelMazes.length)];
      setMaze(randomMaze);

      fetchNextQuestion(level);

      for (let y = 0; y < randomMaze.length; y++) {
        for (let x = 0; x < randomMaze[y].length; x++) {
          if (randomMaze[y][x] === 2) {
            setPlayerPos({ x, y });
            return;
          }
        }
      }
    };

    initializeGame();
  }, [level]);

  const fetchNextQuestion = (level) => {
    const levelQuestions = questions[level];
    const randomQuestion = levelQuestions[
      Math.floor(Math.random() * levelQuestions.length)
    ];
    setCurrentQuestion(randomQuestion);
  };

  const movePlayer = (direction) => {
    const newPos = { ...playerPos };
    let canMove = false;

    // Primero verificamos si hay una pared (1) en la dirección del movimiento
    const checkWall = (y, x) => {
      return maze[y] && maze[y][x] !== 1; // Retorna true si NO hay pared
    };

    switch (direction) {
      case 'up':
        if (playerPos.y > 0 && checkWall(playerPos.y - 1, playerPos.x)) {
          newPos.y = playerPos.y - 1;
          canMove = true;
        }
        break;
      case 'down':
        if (playerPos.y < maze.length - 1 && checkWall(playerPos.y + 1, playerPos.x)) {
          newPos.y = playerPos.y + 1;
          canMove = true;
        }
        break;
      case 'left':
        if (playerPos.x > 0 && checkWall(playerPos.y, playerPos.x - 1)) {
          newPos.x = playerPos.x - 1;
          canMove = true;
        }
        break;
      case 'right':
        if (playerPos.x < maze[0].length - 1 && checkWall(playerPos.y, playerPos.x + 1)) {
          newPos.x = playerPos.x + 1;
          canMove = true;
        }
        break;
      default:
        return;
    }

    if (canMove) {
      const nextCell = maze[newPos.y][newPos.x];
      
      // Actualizamos el laberinto
      const updatedMaze = maze.map((row, y) =>
        row.map((cell, x) => {
          if (y === playerPos.y && x === playerPos.x) {
            return 0; // Dejamos un camino donde estaba el jugador
          }
          if (y === newPos.y && x === newPos.x) {
            return 2; // Nueva posición del jugador
          }
          return cell; // Mantenemos las demás celdas igual
        })
      );
      
      setMaze(updatedMaze);
      setPlayerPos(newPos);

      // Manejamos eventos especiales
      if (nextCell === 3) { // Celda de pregunta
        setCurrentQuestion(null);
        fetchNextQuestion(level);
      } else if (nextCell === 4) { // Meta
        setScore(prev => prev + 100);
        setGameOver(true);
      }
    }
  };

  return {
    maze,
    playerPos,
    score,
    gameOver,
    currentQuestion,
    movePlayer,
    fetchNextQuestion,
  };
}