import moonImg from '../assets/images/moon.webp';
import sunImg from '../assets/images/sun.webp';
import earthkImg from '../assets/images/respuestaPrueba.webp';

export default function DrawMaze(maze, ctx, cellSize) {
  this.map = maze.mazeMap;
  this.width = maze.width;
  this.height = maze.height;
  this.endCoord = maze.endCoord;
  this.level = maze.level;

  // Precargar las imágenes
  const images = {
    1: new Image(),
    2: new Image(),
    3: new Image()
  };

  images[1].src = earthkImg;
  images[2].src = moonImg;
  images[3].src = sunImg;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (let row = 0; row < this.height; row++) {
    for (let col = 0; col < this.width; col++) {
      const cell = this.map[row][col];
      const x = col * cellSize;
      const y = row * cellSize;

      ctx.lineWidth = 2;
      ctx.strokeStyle = '#000';

      if (!cell.n) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + cellSize, y);
        ctx.stroke();
      }
      if (!cell.s) {
        ctx.beginPath();
        ctx.moveTo(x, y + cellSize);
        ctx.lineTo(x + cellSize, y + cellSize);
        ctx.stroke();
      }
      if (!cell.w) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + cellSize);
        ctx.stroke();
      }
      if (!cell.e) {
        ctx.beginPath();
        ctx.moveTo(x + cellSize, y);
        ctx.lineTo(x + cellSize, y + cellSize);
        ctx.stroke();
      }
    }
  }

  if (this.endCoord) {
    const endX = this.endCoord.y * cellSize;
    const endY = this.endCoord.x * cellSize;
    const padding = cellSize * 0.1; // 10% de padding
    const imageSize = cellSize - (padding * 2);
    
    const image = images[this.level];
    if (image) {
      image.onload = () => {
        ctx.drawImage(image, endX + padding, endY + padding, imageSize, imageSize);
      };
      // También intentamos dibujar inmediatamente en caso de que la imagen ya esté cargada
      try {
        ctx.drawImage(image, endX + padding, endY + padding, imageSize, imageSize);
      } catch (e) {
        // Si la imagen no está cargada, dibujamos un placeholder
        ctx.fillStyle = '#0f0';
        ctx.fillRect(endX + padding, endY + padding, imageSize, imageSize);
      }
    }
  }
}