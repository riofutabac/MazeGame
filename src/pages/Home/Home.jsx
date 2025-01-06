import { useNavigate } from 'react-router-dom';
import fondoTitulo from '../../assets/images/fondo-titulo.webp';
import buttonSettings from '../../assets/images/boton-config.webp';
import butttonInstructions from '../../assets/images/boton-instrucciones.webp';
import './Home.css';

function Home() {
  const navigate = useNavigate();

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
          onClick={() => navigate('/exit')}
        >
          Abandonar
        </button>
      </div>

      {/* Botones en esquinas inferiores */}
      <button 
        className="corner-button left" 
        onClick={() => console.log('Botón inferior izquierdo')}
      >
      <img src={buttonSettings} alt="Izquierda" />
      </button>
      <button 
        className="corner-button right" 
        onClick={() => console.log('Botón inferior derecho')}
      >
        <img src={butttonInstructions} alt="Derecha" />
      </button>
    </div>
  );
}

export default Home;
