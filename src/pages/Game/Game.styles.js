import styled from 'styled-components';

export const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 20px;
  position: relative;

  .game-over {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.9);
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    color: white;

    button {
      margin-top: 15px;
      padding: 10px 20px;
      background: #472B7A;
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;

      &:hover {
        background: #5a3798;
      }
    }
  }
`;

export const GameBoard = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  min-height: 600px;
`;

export const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  padding: 8px 15px;
`;

export const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background: white;
  border: 2px solid #000;
  border-radius: 6px;
  color: black;

  span {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const Lives = styled.div`
  display: flex;
  gap: 5px;

  svg {
    font-size: 24px;
  }
`;

export const QuestionSection = styled.div`
  text-align: center;
  margin: 5px 0;
  padding: 15px;
  border-radius: 12px;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: black;
  }
`;

export const MazeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
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

  canvas {
    border: 2px solid #2D3648;
    border-radius: 8px;
  }

  div[role="application"] {
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(45, 54, 72, 0.3);
      border-radius: 8px;
    }
  }
`;

export const GameControls = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;

  .left-controls, .right-controls {
    display: flex;
    gap: 1rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(45, 54, 72, 0.2);
    }

    img {
      width: 56px;
      height: 56px;
    }
  }
`;