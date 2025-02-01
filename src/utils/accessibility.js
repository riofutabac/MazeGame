// Constantes para teclas de acceso rápido
export const KEY_CODES = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
};

// Función para manejar el foco del teclado en elementos modales
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);
  firstFocusableElement.focus();

  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

// Función para anunciar mensajes al lector de pantalla
export const announceToScreenReader = (message) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'alert');
  announcement.setAttribute('aria-live', 'polite');
  announcement.style.position = 'absolute';
  announcement.style.width = '1px';
  announcement.style.height = '1px';
  announcement.style.padding = '0';
  announcement.style.margin = '-1px';
  announcement.style.overflow = 'hidden';
  announcement.style.clip = 'rect(0, 0, 0, 0)';
  announcement.style.whiteSpace = 'nowrap';
  announcement.style.border = '0';
  
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Función para manejar el movimiento del jugador con el teclado
export const handleKeyboardMovement = (e, movePlayer) => {
  switch (e.key) {
    case KEY_CODES.ARROW_UP:
      movePlayer('up');
      announceToScreenReader('Movimiento hacia arriba');
      break;
    case KEY_CODES.ARROW_DOWN:
      movePlayer('down');
      announceToScreenReader('Movimiento hacia abajo');
      break;
    case KEY_CODES.ARROW_LEFT:
      movePlayer('left');
      announceToScreenReader('Movimiento hacia la izquierda');
      break;
    case KEY_CODES.ARROW_RIGHT:
      movePlayer('right');
      announceToScreenReader('Movimiento hacia la derecha');
      break;
    default:
      break;
  }
};

// Función para describir la posición actual en el laberinto
export const describeMazePosition = (player, maze) => {
  const { x, y } = player.position;
  const walls = maze.getWalls(x, y);
  
  let description = `Posición actual: fila ${y + 1}, columna ${x + 1}. `;
  description += 'Paredes: ';
  
  if (walls.north) description += 'norte, ';
  if (walls.south) description += 'sur, ';
  if (walls.east) description += 'este, ';
  if (walls.west) description += 'oeste, ';
  
  description = description.slice(0, -2) + '.';
  
  if (x === maze.end.x && y === maze.end.y) {
    description += ' ¡Has llegado a la meta!';
  }
  
  return description;
};
