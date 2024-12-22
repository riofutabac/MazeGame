// src/components/game/Maze.jsx
import styled from 'styled-components';

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
  if (!maze.length) return <div>Cargando...</div>;

  return (
    <MazeContainer size={maze[0].length}>
      {maze.map((row, y) =>
        row.map((cell, x) => (
          <Cell
            key={`${x}-${y}`}
            $isWall={cell === 1}
            $isAnswer={cell === 3}
            $isFinish={cell === 4}
          >
            {playerPos.x === x && playerPos.y === y && <Player />}
          </Cell>
        ))
      )}
    </MazeContainer>
  );
}