import { Coordinate } from './utils';

export default function Player(maze, ctx, cellSize, onComplete) {
  this.map = maze.mazeMap;
  this.width = maze.width;
  this.height = maze.height;
  this.startCoord = maze.startCoord;
  this.endCoord = maze.endCoord;
  this.ctx = ctx;
  this.cellSize = cellSize;
  this.moves = 0;

  this.currentPos = new Coordinate(this.startCoord.x, this.startCoord.y);

  const drawPlayer = () => {
    const px = this.currentPos.y * this.cellSize + this.cellSize / 2;
    const py = this.currentPos.x * this.cellSize + this.cellSize / 2;

    this.ctx.beginPath();
    this.ctx.fillStyle = 'yellow';
    this.ctx.arc(px, py, this.cellSize / 3, 0, 2 * Math.PI);
    this.ctx.fill();
  };

  const clearPlayer = () => {
    const x = this.currentPos.y * this.cellSize;
    const y = this.currentPos.x * this.cellSize;
    this.ctx.clearRect(x + 1, y + 1, this.cellSize - 2, this.cellSize - 2);
  };

  this.move = (dir) => {
    const cell = this.map[this.currentPos.x][this.currentPos.y];

    let newX = this.currentPos.x;
    let newY = this.currentPos.y;

    switch (dir) {
      case 'up':
        if (cell.n) newX--;
        break;
      case 'down':
        if (cell.s) newX++;
        break;
      case 'left':
        if (cell.w) newY--;
        break;
      case 'right':
        if (cell.e) newY++;
        break;
      default:
        break;
    }

    if (newX !== this.currentPos.x || newY !== this.currentPos.y) {
      this.moves++;
      clearPlayer();
      this.currentPos.x = newX;
      this.currentPos.y = newY;
      drawPlayer();

      if (this.currentPos.x === this.endCoord.x && this.currentPos.y === this.endCoord.y) {
        onComplete(this.moves);
      }
    }
  };

  drawPlayer();
} 