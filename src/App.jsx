import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Game from './pages/Game/Game';
// import Instructions from './pages/Instructions';
// import Settings from './pages/Settings';
import LevelSelect from './pages/LevelSelect/LevelSelect';
import { GameProvider } from './contexts/GameContext';
import Instructions from './pages/Instructions/Instructions';

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          {/* <Route path="/instructions" element={<Instructions />} /> */}
          {/* <Route path="/settings" element={<Settings />} /> */}
          <Route path="/level-select" element={<LevelSelect />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;