import { Coordinate, shuffle } from './utils';

export default function MazeGenerator(width, height, level = 1) {
  this.mazeMap = [];
  this.width = width;
  this.height = height;
  this.startCoord = null;
  this.endCoord = null;
  this.level = level;

  const dirs = ['n', 's', 'e', 'w'];
  const modDir = {
    n: { y: -1, x: 0, op: 's' },
    s: { y: 1,  x: 0, op: 'n' },
    e: { y: 0,  x: 1, op: 'w' },
    w: { y: 0,  x: -1, op: 'e' },
  };

  this.initMap = function() {
    for (let y = 0; y < height; y++) {
      this.mazeMap[y] = [];
      for (let x = 0; x < width; x++) {
        this.mazeMap[y][x] = {
          n: false,
          s: false,
          e: false,
          w: false,
          visited: false,
          priorPos: null,
        };
      }
    }
  };

  this.defineStartEnd = function() {
    this.startCoord = new Coordinate(0, 0);
    this.endCoord   = new Coordinate(height - 1, width - 1);
  };

  this.carveMaze = function() {
    let stack = [];
    let totalCells = width * height;
    let visitedCells = 1;
    let currentPos = new Coordinate(0, 0);

    this.mazeMap[currentPos.x][currentPos.y].visited = true;

    while (visitedCells < totalCells) {
      shuffle(dirs);
      let moved = false;

      for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        let nx = currentPos.x + modDir[dir].y;
        let ny = currentPos.y + modDir[dir].x;

        if (nx >= 0 && nx < height && ny >= 0 && ny < width) {
          if (!this.mazeMap[nx][ny].visited) {
            stack.push(currentPos);

            this.mazeMap[currentPos.x][currentPos.y][dir] = true;
            this.mazeMap[nx][ny][modDir[dir].op] = true;

            this.mazeMap[nx][ny].visited = true;
            this.mazeMap[nx][ny].priorPos = currentPos;

            currentPos = new Coordinate(nx, ny);
            visitedCells++;
            moved = true;
            break;
          }
        }
      }

      if (!moved && stack.length) {
        currentPos = stack.pop();
      }
    }
  };

  this.closeOuterWalls = function() {
    for (let x = 0; x < this.width; x++) {
      this.mazeMap[0][x].n = false;
    }
    for (let x = 0; x < this.width; x++) {
      this.mazeMap[this.height - 1][x].s = false;
    }
    for (let y = 0; y < this.height; y++) {
      this.mazeMap[y][0].w = false;
    }
    for (let y = 0; y < this.height; y++) {
      this.mazeMap[y][this.width - 1].e = false;
    }
  };

  this.getNextMove = function(currentPos) {
    // Usar BFS para encontrar el camino más corto al final
    const queue = [{
      pos: { row: currentPos.row, col: currentPos.col },
      path: []
    }];
    const visited = new Set();
    
    while (queue.length > 0) {
      const current = queue.shift();
      const key = `${current.pos.row},${current.pos.col}`;
      
      if (visited.has(key)) continue;
      visited.add(key);
      
      // Si llegamos al final, retornamos el primer movimiento del camino
      if (current.pos.row === this.endCoord.x && current.pos.col === this.endCoord.y) {
        // Traducir la dirección al español para el anuncio
        const direction = current.path[0];
        const translations = {
          'up': 'Arriba',
          'down': 'Abajo',
          'left': 'Izquierda',
          'right': 'Derecha'
        };
        return translations[direction] || direction;
      }
      
      const cell = this.mazeMap[current.pos.row][current.pos.col];
      
      // Agregar todos los movimientos posibles usando las direcciones en inglés
      if (cell.n) {
        queue.push({
          pos: { row: current.pos.row - 1, col: current.pos.col },
          path: [...current.path, 'up']
        });
      }
      if (cell.s) {
        queue.push({
          pos: { row: current.pos.row + 1, col: current.pos.col },
          path: [...current.path, 'down']
        });
      }
      if (cell.w) {
        queue.push({
          pos: { row: current.pos.row, col: current.pos.col - 1 },
          path: [...current.path, 'left']
        });
      }
      if (cell.e) {
        queue.push({
          pos: { row: current.pos.row, col: current.pos.col + 1 },
          path: [...current.path, 'right']
        });
      }
    }
    
    return null;
  };

  this.initMap();
  this.defineStartEnd();
  this.carveMaze();
  this.closeOuterWalls();
} 