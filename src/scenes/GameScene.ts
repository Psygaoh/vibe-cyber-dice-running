import { Scene } from 'phaser';
import { GRID_WIDTH, GRID_HEIGHT, CELL_SIZE, CORE_POSITIONS } from '../config/gameConfig';

export class GameScene extends Scene {
  private grid: Phaser.GameObjects.Rectangle[][] = [];
  private playerCore!: Phaser.GameObjects.Rectangle;
  private enemyCore!: Phaser.GameObjects.Rectangle;
  private currentTurn: 1 | 2 = 1;

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
    // Player Core (P1)
    this.playerCore = this.add.rectangle(
      CORE_POSITIONS.player.x * CELL_SIZE + CELL_SIZE / 2,
      CORE_POSITIONS.player.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE,
      CELL_SIZE
    ).setFillStyle(0x00f6ff, 0.5);

    // Enemy Core (P2)
    this.enemyCore = this.add.rectangle(
      CORE_POSITIONS.enemy.x * CELL_SIZE + CELL_SIZE / 2,
      CORE_POSITIONS.enemy.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE,
      CELL_SIZE
    ).setFillStyle(0xff00ff, 0.5);

    // Add small text labels on cores
    const coreTextConfig = {
      fontSize: '24px',
      color: '#000000',
      fontFamily: 'Orbitron'
    };

    this.add.text(
      CORE_POSITIONS.player.x * CELL_SIZE + CELL_SIZE / 2,
      CORE_POSITIONS.player.y * CELL_SIZE + CELL_SIZE / 2,
      'P1',
      coreTextConfig
    ).setOrigin(0.5);

    this.add.text(
      CORE_POSITIONS.enemy.x * CELL_SIZE + CELL_SIZE / 2,
      CORE_POSITIONS.enemy.y * CELL_SIZE + CELL_SIZE / 2,
      'P2',
      coreTextConfig
    ).setOrigin(0.5);
  }

  private createPlayerLabels() {
    // Remove this entire method as we don't want the player labels anymore
  }

  updateTurn(turn: 1 | 2) {
    this.currentTurn = turn;
    this.updateCorePulsing();
  }

  private updateCorePulsing() {
    if (this.currentTurn === 1) {
      // Player 1's turn
      this.playerCore.setFillStyle(0x00f6ff, 0.8);
      this.enemyCore.setFillStyle(0xff00ff, 0.5);
      
      // Add pulsing animation to player core
      this.tweens.add({
        targets: [this.playerCore],
        alpha: 0.5,
        duration: 1000,
        yoyo: true,
        repeat: -1
      });
      
      // Stop enemy pulsing
      this.tweens.killTweensOf([this.enemyCore]);
      this.enemyCore.setAlpha(1);
    } else {
      // Player 2's turn
      this.playerCore.setFillStyle(0x00f6ff, 0.5);
      this.enemyCore.setFillStyle(0xff00ff, 0.8);
      
      // Add pulsing animation to enemy core
      this.tweens.add({
        targets: [this.enemyCore],
        alpha: 0.5,
        duration: 1000,
        yoyo: true,
        repeat: -1
      });
      
      // Stop player pulsing
      this.tweens.killTweensOf([this.playerCore]);
      this.playerCore.setAlpha(1);
    }
  }

  update() {
    // Game loop updates will go here
  }
} 