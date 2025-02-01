import React, { useEffect, useRef } from 'react';
import { handleKeyboardMovement, describeMazePosition, announceToScreenReader } from '../utils/accessibility';

const MazeCanvas = React.forwardRef(({ onMove }, ref) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (ref) {
      ref.current = canvasRef.current;
    }
  }, [ref]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Hacer que el canvas sea focuseable
    canvas.setAttribute('tabindex', '0');
    canvas.setAttribute('role', 'application');
    canvas.setAttribute('aria-label', 'Laberinto del juego. Use las flechas del teclado para moverse.');

    // Agregar instrucciones de uso cuando el canvas recibe el foco
    canvas.addEventListener('focus', () => {
      announceToScreenReader(
        'Has entrado al laberinto. Usa las flechas del teclado para moverte. ' +
        'Presiona la tecla H para escuchar tu posición actual.'
      );
    });

    // Manejar eventos de teclado
    const handleKeyDown = (e) => {
      if (e.key === 'h' || e.key === 'H') {
        // Describir la posición actual cuando se presiona H
        const description = describeMazePosition(player, maze);
        announceToScreenReader(description);
        return;
      }

      handleKeyboardMovement(e, onMove);
    };

    canvas.addEventListener('keydown', handleKeyDown);

    return () => {
      canvas.removeEventListener('keydown', handleKeyDown);
    };
  }, [onMove]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <canvas
        ref={canvasRef}
        style={{
          border: '5px solid #000',
          backgroundColor: '#ccc',
          maxWidth: '50%',
          height: 'auto',
        }}
        aria-live="polite"
      />
    </div>
  );
});

MazeCanvas.displayName = 'MazeCanvas';

export default MazeCanvas;