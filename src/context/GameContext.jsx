import React, { createContext, useState } from 'react'

export const GameContext = createContext()

export function GameProvider({ children }) {
  const [gameState, setGameState] = useState({})

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  )
}