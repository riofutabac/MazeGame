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
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const GameControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: auto;

  .left-controls, .right-controls {
    display: flex;
    gap: 10px;
  }

  .left-controls {
    margin-left: -10px;
  }

  .right-controls {
    margin-right: -10px;
  }

  .left-controls img {
    width: 30px;
    height: 30px;
  }

  .right-controls img {
    width: 30px;
    height: 30px;
  }

  button {
    border: none;
    border-radius: 8px;
    padding: 5px;
    color: black;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
  }

  button:hover {
    transform: scale(1.05);
  }

  svg {
    font-size: 20px;
  }
`;