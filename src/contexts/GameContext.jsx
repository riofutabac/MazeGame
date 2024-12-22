import { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export function GameProvider({ children }) {
  const [level, setLevel] = useState('easy');
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const value = {
    level,
    setLevel,
    score,
    setScore,
    isGameOver,
    setIsGameOver,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  return useContext(GameContext);
}