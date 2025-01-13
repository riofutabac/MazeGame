import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useGame } from '../../contexts/GameContext';

const LevelSelectMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 2rem;
`;

const LevelButton = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: var(--primary-color-dark);
  }
`;

function LevelSelectMenu() {
  const navigate = useNavigate();
  const { setLevel, setScore, setIsGameOver } = useGame();

  const handleLevelSelect = (level) => {
    setLevel(level);
    setScore(0);
    setIsGameOver(false);
    navigate('/game');
  };

  return (
    <LevelSelectMenuContainer>
      <h2>Selecciona un nivel</h2>
      <LevelButton onClick={() => handleLevelSelect(1)}>Nivel 1</LevelButton>
      <LevelButton onClick={() => handleLevelSelect(2)}>Nivel 2</LevelButton>
      <LevelButton onClick={() => handleLevelSelect(3)}>Nivel 3</LevelButton>
    </LevelSelectMenuContainer>
  );
}

export default LevelSelectMenu;