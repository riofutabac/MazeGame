import { createContext, useState, useContext, useEffect } from 'react';
import { questions as questionsData } from '../utils/questions';

const GameContext = createContext();

const getDifficultyByLevel = (level) => {
  switch(level) {
    case 1:
      return 'easy';
    case 2:
      return 'medium';
    case 3:
      return 'hard';
    default:
      return 'easy';
  }
};

export function GameProvider({ children }) {
  const [level, setLevel] = useState(() => {
    const savedLevel = localStorage.getItem('gameLevel');
    return savedLevel ? parseInt(savedLevel) : 1;
  });
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    console.log('Level changed in context:', level);
    localStorage.setItem('gameLevel', level.toString());
    
    const difficulty = getDifficultyByLevel(level);
    const levelQuestions = questionsData[difficulty];
    
    if (levelQuestions && levelQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * levelQuestions.length);
      setCurrentQuestion(levelQuestions[randomIndex]);
    }
  }, [level]);

  const value = {
    level,
    setLevel,
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
    isGameOver,
    setIsGameOver
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}