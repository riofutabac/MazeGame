import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fondoTitulo from '../../assets/images/fondo-titulo.webp';
import buttonSettings from '../../assets/images/boton-config.webp';
import butttonInstructions from '../../assets/images/boton-instrucciones.webp';
import ConfigModal from '../../components/modals/ConfigModal';
import SoundModal from '../../components/modals/SoundModal';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isSoundOpen, setIsSoundOpen] = useState(false);

  useEffect(() => {
    // Set page title for screen readers
    document.title = 'Persecución en el Laberinto - Inicio';
  }, []);

  const handleExit = () => {
    if (window.confirm('¿Estás seguro que deseas salir del juego?')) {
      window.close();
    }
  };

  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <main className="home-container" role="main">
      <div className="home-header" role="banner">
        <img 
          src={fondoTitulo}
          alt="Fondo decorativo del juego Persecución en el Laberinto" 
          className="header-image"
          role="img" 
        />
        <h1 className="header-text" tabIndex="0">Persecución en el Laberinto</h1>
      </div>

      <nav className="menu-buttons" role="navigation" aria-label="Menú principal">
        <button 
          className="home-menu-button" 
          onClick={() => navigate('/level-select')}
          onKeyPress={(e) => handleKeyPress(e, () => navigate('/level-select'))}
          aria-label="Iniciar Juego"
        >
          Iniciar Juego
        </button>
        <button 
          className="home-menu-button" 
          onClick={() => navigate('/instructions')}
          onKeyPress={(e) => handleKeyPress(e, () => navigate('/instructions'))}
          aria-label="Ver instrucciones del juego"
        >
          Instrucciones
        </button>
        <button 
          className="home-menu-button" 
          onClick={handleExit}
          onKeyPress={(e) => handleKeyPress(e, handleExit)}
          aria-label="Salir del juego"
        >
          Abandonar
        </button>
      </nav>

      <div className="corner-controls" role="group" aria-label="Controles adicionales">
        <button 
          className="corner-button left" 
          onClick={() => setIsConfigOpen(true)}
          onKeyPress={(e) => handleKeyPress(e, () => setIsConfigOpen(true))}
          aria-label="Abrir configuración"
        >
          <img src={buttonSettings} alt="" aria-hidden="true" />
          <span className="sr-only">Configuración</span>
        </button>
        <button 
          className="corner-button right" 
          onClick={() => setIsSoundOpen(true)}
          onKeyPress={(e) => handleKeyPress(e, () => setIsSoundOpen(true))}
          aria-label="Abrir configuración de sonido"
        >
          <img src={butttonInstructions} alt="" aria-hidden="true" />
          <span className="sr-only">Sonido</span>
        </button>
      </div>

      <ConfigModal 
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        aria-label="Modal de configuración"
      />
      <SoundModal 
        isOpen={isSoundOpen}
        onClose={() => setIsSoundOpen(false)}
        aria-label="Modal de configuración de sonido"
      />
    </main>
  );
}

export default Home;
