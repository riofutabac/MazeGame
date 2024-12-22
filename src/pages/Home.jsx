// src/pages/Home.jsx

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--text-color);
  margin-bottom: 2rem;
`;

const MenuButton = styled.button`
  width: 200px;
  padding: 15px;
  margin: 10px;
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

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Title>Laberinto Educativo</Title>
      <MenuButton onClick={() => navigate('/level-select')}>Jugar</MenuButton>
      <MenuButton onClick={() => navigate('/instructions')}>
        Instrucciones
      </MenuButton>
      <MenuButton onClick={() => navigate('/settings')}>Configuración</MenuButton>
    </HomeContainer>
  );
}

export default Home;