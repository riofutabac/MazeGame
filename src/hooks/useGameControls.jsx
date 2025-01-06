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

    switch (direction) {
      case 'up':
        newPos.y--;
        break;
      case 'down':
        newPos.y++;
        break;
      case 'left':
        newPos.x--;
        break;
      case 'right':
        newPos.x++;
        break;
      default:
        return;
    }

    if (
      newPos.y >= 0 &&
      newPos.y < maze.length &&
      newPos.x >= 0 &&
      newPos.x < maze[0].length
    ) {
      const nextCell = maze[newPos.y][newPos.x];

      if (nextCell === 0 || nextCell === 2) {
        setPlayerPos(newPos);
      } else if (nextCell === 3) {
        setCurrentQuestion(null);
        fetchNextQuestion(level);
      } else if (nextCell === 4) {
        setScore((prev) => prev + 100);
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