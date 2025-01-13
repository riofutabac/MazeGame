import React from 'react';

export default function MessageModal({ moves, onClose, onRestart }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h1 style={{ margin: '0 0 10px' }}>¡Felicidades!</h1>
        <p>Terminaste el laberinto.</p>
        <p>Movimientos totales: {moves}</p>
        <div style={{ marginTop: '15px' }}>
          <button style={styles.button} onClick={onClose}>
            Cerrar
          </button>
          <button style={styles.button} onClick={onRestart}>
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    zIndex: 9999,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    background: 'rgba(0,0,0,0.9)',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    color: '#0f0',
    width: '90%',
    maxWidth: '400px',
    boxSizing: 'border-box',
  },
  button: {
    margin: '0 10px',
    padding: '6px 12px',
    cursor: 'pointer',
    background: '#444',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
}; 