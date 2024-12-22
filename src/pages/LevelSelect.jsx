import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LevelSelectMenu from '../components/menus/LevelSelectMenu';

const LevelSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--text-color);
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

function LevelSelect() {
  const navigate = useNavigate();

  return (
    <LevelSelectContainer>
      <Title>Selecciona un Nivel</Title>
      <LevelSelectMenu />
      <BackButton onClick={() => navigate('/')}>Volver al Menú</BackButton>
    </LevelSelectContainer>
  );
}

export default LevelSelect;