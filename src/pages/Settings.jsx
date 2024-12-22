import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SettingsContainer = styled.div`
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

const SettingsText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

function Settings() {
  const navigate = useNavigate();

  return (
    <SettingsContainer>
      <Title>Configuración</Title>
      <SettingsText>
        Aquí podrás configurar el juego. Por ahora, solo tenemos niveles.
      </SettingsText>
      <BackButton onClick={() => navigate('/')}>Volver al Menú</BackButton>
    </SettingsContainer>
  );
}

export default Settings;