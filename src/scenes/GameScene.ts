import { Scene } from 'phaser';
import { GRID_WIDTH, GRID_HEIGHT, CELL_SIZE, CORE_POSITIONS } from '../config/gameConfig';

export class GameScene extends Scene {
  private grid: Phaser.GameObjects.Rectangle[][] = [];

  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    this.createGrid();
    this.createCores();
  }

  private createGrid() {
    for (let x = 0; x < GRID_WIDTH; x++) {
      this.grid[x] = [];
      for (let y = 0; y < GRID_HEIGHT; y++) {
        const cell = this.add.rectangle(
          x * CELL_SIZE + CELL_SIZE / 2,
          y * CELL_SIZE + CELL_SIZE / 2,
          CELL_SIZE,
          CELL_SIZE
        );
        cell.setStrokeStyle(1, 0x00f6ff, 0.3);
        cell.setFillStyle(0x0a0a0a, 0.5);
        this.grid[x][y] = cell;
      }
    }
  }

  private createCores() {
    // Player Core
    this.add.rectangle(
      CORE_POSITIONS.player.x * CELL_SIZE + CELL_SIZE / 2,
      CORE_POSITIONS.player.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE,
      CELL_SIZE
    ).setFillStyle(0x00f6ff, 0.5);

    // Enemy Core
    this.add.rectangle(
      CORE_POSITIONS.enemy.x * CELL_SIZE + CELL_SIZE / 2,
      CORE_POSITIONS.enemy.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE,
      CELL_SIZE
    ).setFillStyle(0xff00ff, 0.5);
  }

  update() {
    // Game loop updates will go here
  }
} 