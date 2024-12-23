import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Game from './pages/Game';
import Instructions from './pages/Instructions';
import Settings from './pages/Settings';
import LevelSelect from './pages/LevelSelect';
import { GameProvider } from './contexts/GameContext';

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/level-select" element={<LevelSelect />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;