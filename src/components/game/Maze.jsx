// src/components/game/Maze.jsx
import styled from 'styled-components';
import { useRef, useEffect, useCallback, useState } from 'react';

const MazeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.size}, 30px);
  gap: 1px;
  background-color: #333;
  padding: 10px;
  border-radius: 8px;
`;

const Cell = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) =>
    props.$isWall
      ? '#666'
      : props.$isAnswer
      ? '#e74c3c'
      : props.$isFinish
      ? '#2ecc71'
      : '#fff'};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: white;
`;

const Player = styled.div`
  width: 20px;
  height: 20px;
  background-color: #4a90e2;
  border-radius: 50%;
`;

export default function Maze({ maze, playerPos }) {
  return (
    <div className="maze">
      {maze.map((row, y) => (
        <div key={y} className="row">
          {row.map((cell, x) => (
            <div 
              key={`${y}-${x}`} 
              className={`cell ${
                cell === 1 ? 'wall' : 
                cell === 2 ? 'player' :
                cell === 3 ? 'question' :
                cell === 4 ? 'goal' : 'path'
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}