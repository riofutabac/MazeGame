import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fondoTitulo from '../../assets/images/fondo-titulo.webp';
import buttonSettings from '../../assets/images/boton-config.webp';
import butttonInstructions from '../../assets/images/boton-instrucciones.webp';
import volumenUp from '../../assets/images/volumenup.webp';
import ConfigModal from '../../components/modals/ConfigModal';
import SoundModal from '../../components/modals/SoundModal';
import { announceToScreenReader } from '../../utils/accessibility';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isSoundOpen, setIsSoundOpen] = useState(false);

  // Anunciar el título cuando se carga la página
  useEffect(() => {
    announceToScreenReader('Persecución en el Laberinto');
  }, []);

  const handleExit = () => {
    if (window.confirm('¿Estás seguro que deseas salir del juego?')) {
      window.close();
    }
  };

  return (
    <div className="home-container">
      {/* Fondo e imagen con texto */}
      <div className="home-header">
        <img 
          src={fondoTitulo}
          alt="Fondo del Laberinto" 
          className="header-image" 
          aria-hidden="true"
        />
        <h1 
          className="header-text"
          tabIndex={0}
          aria-label="Persecución en el Laberinto"
        >
          Persecución en el Laberinto
        </h1>
      </div>

      {/* Botones centrados */}
      <div className="menu-buttons">
        <button 
          className="home-menu-button" 
          onClick={() => navigate('/level-select')}
        >
          Iniciar Juego
        </button>
        <button 
          className="home-menu-button" 
          onClick={() => navigate('/instructions')}
        >
          Instrucciones
        </button>
        <button 
          className="home-menu-button" 
          onClick={handleExit}
        >
          Abandonar
        </button>
      </div>

      {/* Botones en esquinas inferiores */}
      <button 
        className="corner-button left" 
        onClick={() => setIsConfigOpen(true)}
      >
        <img src={buttonSettings} alt="Configuración" />
      </button>
      <button 
        className="corner-button right" 
        onClick={() => setIsSoundOpen(true)}
      >
        <img src={volumenUp} alt="Sonido" />
      </button>

      {/* Modales */}
      {isConfigOpen && (
        <div 
          className="modal-container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="config-title"
        >
          <ConfigModal 
            onClose={() => setIsConfigOpen(false)}
            isOpen={isConfigOpen}
          />
        </div>
      )}
      {isSoundOpen && (
        <div 
          className="modal-container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sound-title"
        >
          <SoundModal 
            onClose={() => setIsSoundOpen(false)}
            isOpen={isSoundOpen}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
