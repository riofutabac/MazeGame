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
  border-radius: 8px;

  img {
    width: 80px;      
    height: 80px;   
  }

  &:hover {
    transform: scale(1.05); 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(45, 54, 72, 0.4);
  }
`;

export const Title = styled.h1`
  font-size: 65px;
  color: var(--text-color);
  text-align: center;
  flex-grow: 1;
  font-weight: 400;
  
  &:focus {
    outline: none;
    text-decoration: underline;
  }
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
  transition: transform 0.2s;

  &:focus {
    outline: none;
    transform: scale(1.02);
    box-shadow: 0 0 0 3px rgba(45, 54, 72, 0.4);
  }

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

    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }

  img {
    width: 150px;
    height: 150px;
    margin: 60px 0 20px;
    border-radius: 8px;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(45, 54, 72, 0.4);
    }
  }

  p {
    margin: 20px 0;
    font-size: 1.1rem;
    line-height: 1.5;
    padding: 0 20px;

    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }

  button {
    background: #2D3648;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 8px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background 0.2s;
    margin-top: auto;
    width: 80%;

    &:hover {
      background: #3d4861;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(45, 54, 72, 0.4);
    }
  }
`;
