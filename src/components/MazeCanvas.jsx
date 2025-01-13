import React from 'react';

export default function MazeCanvas({ canvasRef }) {
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
      />
    </div>
  );
} 