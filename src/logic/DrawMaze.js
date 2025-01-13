export default function DrawMaze(maze, ctx, cellSize) {
  this.map = maze.mazeMap;
  this.width = maze.width;
  this.height = maze.height;
  this.endCoord = maze.endCoord;

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
    ctx.fillStyle = '#0f0';
    ctx.fillRect(endX + 4, endY + 4, cellSize - 8, cellSize - 8);
  }
} 