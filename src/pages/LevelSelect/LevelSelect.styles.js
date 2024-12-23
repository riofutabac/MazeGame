// LevelSelect.styles.js
import styled from 'styled-components';

export const LevelSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  position: relative;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

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
