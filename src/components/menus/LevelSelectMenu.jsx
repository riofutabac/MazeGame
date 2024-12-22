import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useGame } from '../../contexts/GameContext';

const LevelSelectMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const LevelButton = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

function LevelSelectMenu() {
  const navigate = useNavigate();
  const { setLevel } = useGame();

  const handleLevelSelect = (level) => {
    setLevel(level);
    navigate('/game');
  };

  return (
    <LevelSelectMenuContainer>
      <LevelButton onClick={() => handleLevelSelect('easy')}>Fácil</LevelButton>
      <LevelButton onClick={() => handleLevelSelect('medium')}>Medio</LevelButton>
      <LevelButton onClick={() => handleLevelSelect('hard')}>Difícil</LevelButton>
    </LevelSelectMenuContainer>
  );
}

export default LevelSelectMenu;