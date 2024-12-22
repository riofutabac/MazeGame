import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <div className="main-menu">
      <Link to="/game">
        <button>Jugar</button>
      </Link>
      <button>Instrucciones</button>
      <button>Configuración</button>
    </div>
  );
}

export default MainMenu;