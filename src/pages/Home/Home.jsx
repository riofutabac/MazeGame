import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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

  const handleExit = () => {
    // Aquí puedes agregar una confirmación antes de salir
    if (window.confirm('¿Estás seguro que deseas salir del juego?')) {
      window.close(); // Esto puede no funcionar en todos los navegadores
      // Alternativa: navigate('/exit') si tienes una página de salida
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
        />
        <h1 className="header-text">Persecución en el Laberinto</h1>
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
        <img src={butttonInstructions} alt="Sonido" />
      </button>

      {/* Modales */}
      <ConfigModal 
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
      />
      <SoundModal 
        isOpen={isSoundOpen}
        onClose={() => setIsSoundOpen(false)}
      />
    </div>
  );
}

export default Home;
