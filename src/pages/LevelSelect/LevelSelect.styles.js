// LevelSelect.styles.js
import styled from 'styled-components';

export const LevelSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  position: relative;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
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

  &:focus-visible {
    outline: 3px solid #4A90E2;
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
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
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover, &:focus {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:focus-visible {
    outline: 3px solid #4A90E2;
    outline-offset: 2px;
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
  }

  p {
    margin: 20px 0;
    font-size: 1.1rem;
    line-height: 1.5;
    color: rgb(45, 54, 72);

    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }

  button {
    padding: 12px 40px;
    font-size: 1.2rem;
    background: rgb(45, 54, 72);
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.2s;
    margin-top: 20px;

    &:hover {
      transform: scale(1.05);
      background: rgb(64, 74, 95);
    }

    &:focus-visible {
      outline: 3px solid #4A90E2;
      outline-offset: 2px;
      box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
    }
  }
`;
