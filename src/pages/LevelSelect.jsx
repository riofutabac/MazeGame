import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useGame } from '../contexts/GameContext'; // Faltaba importar el contexto

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
  margin-top: 20px; // Añadido margen superior
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

const LevelButton = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;
  width: 200px; // Añadido ancho fijo para consistencia

  &:hover {
    transform: scale(1.05);
  }
`;

const LevelSelectMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

function LevelSelect() {
  const navigate = useNavigate();
  const { setLevel } = useGame(); // Asumiendo que tienes un contexto GameContext

  const handleLevelSelect = (level) => {
    try {
      setLevel(level);
      navigate('/game');
    } catch (error) {
      console.error('Error al seleccionar nivel:', error);
    }
  };

  return (
    <LevelSelectContainer>
      <Title>Selecciona un Nivel</Title>
      <LevelSelectMenuContainer>
        <LevelButton onClick={() => handleLevelSelect('easy')}>Fácil</LevelButton>
        <LevelButton onClick={() => handleLevelSelect('medium')}>Medio</LevelButton>
        <LevelButton onClick={() => handleLevelSelect('hard')}>Difícil</LevelButton>
      </LevelSelectMenuContainer>
      <BackButton onClick={() => navigate('/')}>Volver al Menú</BackButton>
    </LevelSelectContainer>
  );
}

export default LevelSelect;