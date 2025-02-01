import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const InstructionsContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

const InstructionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #4CAF50;
    }
  }
`;

const BackButton = styled.button`
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export default function Instructions() {
  const navigate = useNavigate();

  return (
    <InstructionsContainer role="main">
      <Title tabIndex={0}>Instrucciones del Juego</Title>
      <InstructionsList role="list">
        <p tabIndex={0} role="listitem">Selecciona la dificultad de las preguntas.</p>
        <p tabIndex={0} role="listitem">Lee la pregunta que aparecerá en la pantalla.</p>
        <p tabIndex={0} role="listitem">Corre hacia la zona de la respuesta correcta evitando los enemigos.</p>
        <p tabIndex={0} role="listitem">¡Gana puntos y avanza!</p>
      </InstructionsList>
      <BackButton 
        onClick={() => navigate(-1)}
        tabIndex={0}
        aria-label="Volver al menú anterior"
      >
        Volver
      </BackButton>
    </InstructionsContainer>
  );
}