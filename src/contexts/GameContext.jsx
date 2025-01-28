import { createContext, useState, useContext, useEffect } from 'react';
import { questions as questionsData } from '../utils/questions';

const GameContext = createContext();

export function GameProvider({ children }) {
  const [level, setLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    let difficulty;
    switch(level) {
      case 1:
        difficulty = 'easy';
        break;
      case 2:
        difficulty = 'medium';
        break;
      case 3:
        difficulty = 'hard';
        break;
      default:
        difficulty = 'easy';
    }

    const levelQuestions = questionsData[difficulty];
    
    if (levelQuestions && levelQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * levelQuestions.length);
      setCurrentQuestion(levelQuestions[randomIndex]);
    }
  }, [level]);



  const getNewQuestion = () => {
    let difficulty = level === 1 ? 'easy' : level === 2 ? 'medium' : 'hard';
    const levelQuestions = questionsData[difficulty];
    const randomIndex = Math.floor(Math.random() * levelQuestions.length);
    setCurrentQuestion(levelQuestions[randomIndex]);
  };

  const value = {
    level,
    setLevel,
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
    isGameOver,
    setIsGameOver,
    getNewQuestion
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
export function useGame() {
  return useContext(GameContext);
}
