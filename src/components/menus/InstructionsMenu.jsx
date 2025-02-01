import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const InstructionsMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
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

const InstructionsText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

function InstructionsMenu() {
  const navigate = useNavigate();

  return (
    <InstructionsMenuContainer role="main">
      <Title tabIndex={0}>Instrucciones</Title>
      <InstructionsText tabIndex={0}>
        Usa las flechas del teclado para moverte por el laberinto. 
        Encuentra la salida para completar el nivel. 
        Responde correctamente a las preguntas para ganar puntos.
      </InstructionsText>
      <BackButton 
        onClick={() => navigate('/')}
        tabIndex={0}
        aria-label="Volver al menú principal"
      >
        Volver al Menú
      </BackButton>
    </InstructionsMenuContainer>
  );
}

export default InstructionsMenu;