// FinishedGame.styles.js
import styled from 'styled-components';

export const LevelSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  position: relative;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
`;

export const NavigationButtons = styled.div`
  display: flex;
  gap: 15px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  img {
     width: 80px;     
    height: 80px;   
  }

  &:hover {
    transform: scale(1.05); 
  }
`;

export const Title = styled.h1`
  font-size: 65px;
  color: var(--text-color);
  text-align: center;
  flex-grow: 1;
  font-weight: 400;
  margin: 10px 0;
`;

export const LevelSelectMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 80px; 
  margin: 2rem auto;  
  width: 90%;  
  max-width: 1200px;  
`;

export const LevelCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  min-height: 450px;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  border: 2px solid #000;

  h1 {
    position: absolute;
    top: 20px;
    left: 20px;
    margin: 0;
    font-size: 1.8rem;
    color: white;
    text-shadow: 
      -1px -1px 0 #000, 
      1px -1px 0 #000, 
      -1px 1px 0 #000, 
      1px 1px 0 #000;
  }

  img {
    width: 150px;
    height: 150px;
    margin: 60px 0 20px;
  }

  p {
    margin: 20px 0;
    font-size: 1.1rem;
    line-height: 1.5;
    color: #2D3648;
  }

  button {
    margin-top: auto;
    padding: 12px 30px;
    background-color: #2D3648;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: #404A5F;
    }
  }
`;

export const GameStats = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 10px;

  img {
    width: 40px;
    height: 40px;
  }

  span {
    font-size: 2rem;
    color: #2D3648;
  }
`;

export const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 6px;
  color: white;

  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: white;

  }
`;

export const AnswersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 1rem auto;
  width: 95%;
  max-width: 1400px;
  flex-wrap: wrap;
  flex: 1;
  
  @media (max-width: 1200px) {
    width: 98%;
    gap: 20px;
    max-width: 1200px;
  }
`;

export const AnswerCard = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 450px;
  background: white;
  border-radius: 10px;
  padding: 18px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    color: ${props => {
      if (props.correct) return '#34C759';  
      if (props.incorrect) return '#FF3B30';  
      return '#2D3648';  
    }};
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: bold;
  }

  .answer-image {
    width: 110px;
    height: 110px;
    margin: 0.7rem 0;
    object-fit: cover;
    border-radius: 8px;
  }

  .description {
    color: #666;
    line-height: 1.5;
    font-size: 0.95rem;
    margin-top: 0.7rem;
    padding: 0 8px;
  }

  border: 2px solid ${props => {
    if (props.correct) return '#34C759';
    if (props.incorrect) return '#FF3B30';
    return 'transparent';
  }};

  @media (max-width: 1200px) {
    min-width: 280px;
    padding: 15px;
    
    h2 {
      font-size: 1.3rem;
    }
    
    .answer-image {
      width: 100px;
      height: 100px;
    }
    
    .description {
      font-size: 0.9rem;
    }
  }
`;

export const StatsDescription = styled.p`
  text-align: center;
  color: #2D3648;
  max-width: 800px;
  margin: 2rem auto;
  line-height: 1.6;
  font-size: 1.1rem;
`;

export const PlayAgainButton = styled.button`
  display: block;
  margin: 1rem auto;
  padding: 15px 40px;
  font-size: 1.2rem;
  background-color: #2D3648;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #404A5F;
  }
`;