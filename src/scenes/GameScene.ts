import { Scene } from 'phaser';
import { GRID_WIDTH, GRID_HEIGHT, BASE_CELL_SIZE, CORE_POSITIONS } from '../config/gameConfig';

interface CellState {
  owned: boolean;
  owner: 1 | 2 | null;
  isCore: boolean;
}

export class GameScene extends Scene {
  private grid: Phaser.GameObjects.Rectangle[][] = [];
  private cellStates: CellState[][] = [];
  private playerCore!: Phaser.GameObjects.Rectangle;
  private enemyCore!: Phaser.GameObjects.Rectangle;
  private currentTurn: 1 | 2 = 1;
  private isGameStarted: boolean = false;

  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    this.initializeCellStates();
    this.createGrid();
    this.createCores();
    this.addGoldenGlowToCores();
  }

  private initializeCellStates() {
    for (let x = 0; x < GRID_WIDTH; x++) {
      this.cellStates[x] = [];
      for (let y = 0; y < GRID_HEIGHT; y++) {
        this.cellStates[x][y] = {
          owned: false,
          owner: null,
          isCore: false
        };
      }
    }
    // Mark core positions
    this.cellStates[CORE_POSITIONS.player.x][CORE_POSITIONS.player.y] = {
      owned: true,
      owner: 1,
      isCore: true
    };
    this.cellStates[CORE_POSITIONS.enemy.x][CORE_POSITIONS.enemy.y] = {
      owned: true,
      owner: 2,
      isCore: true
    };
  }

  private createGrid() {
    for (let x = 0; x < GRID_WIDTH; x++) {
      this.grid[x] = [];
      for (let y = 0; y < GRID_HEIGHT; y++) {
        const cell = this.add.rectangle(
          x * BASE_CELL_SIZE + BASE_CELL_SIZE / 2,
          y * BASE_CELL_SIZE + BASE_CELL_SIZE / 2,
          BASE_CELL_SIZE,
          BASE_CELL_SIZE
        );
        
        cell.setStrokeStyle(1, 0x00f6ff, 0.3);
        cell.setFillStyle(0x0a0a0a, 0.5);
        
        // Make cell interactive
        cell.setInteractive({ useHandCursor: true });
        
        // Hover effects
        cell.on('pointerover', () => {
          if (!this.cellStates[x][y].owned && this.isGameStarted) {
            cell.setStrokeStyle(2, this.currentTurn === 1 ? 0x00f6ff : 0xff00ff, 0.8);
            // Add glow effect using a larger stroke
            cell.setStrokeStyle(3, this.currentTurn === 1 ? 0x00f6ff : 0xff00ff, 0.6);
            // Add slight fill for extra effect
            cell.setFillStyle(this.currentTurn === 1 ? 0x00f6ff : 0xff00ff, 0.1);
          }
        });

        cell.on('pointerout', () => {
          if (!this.cellStates[x][y].owned) {
            cell.setStrokeStyle(1, 0x00f6ff, 0.3);
            cell.setFillStyle(0x0a0a0a, 0.5);
          }
        });

        cell.on('pointerdown', () => {
          if (this.isGameStarted && !this.cellStates[x][y].owned) {
            this.handleCellClick(x, y);
          }
        });

        this.grid[x][y] = cell;
      }
    }
  }

  private handleCellClick(x: number, y: number) {
    console.log(`Cell clicked at ${x}, ${y}`);
    // We'll implement the hacking logic here in the next step
  }

  private createCores() {
    // Player Core (P1)
    this.playerCore = this.add.rectangle(
      CORE_POSITIONS.player.x * BASE_CELL_SIZE + BASE_CELL_SIZE / 2,
      CORE_POSITIONS.player.y * BASE_CELL_SIZE + BASE_CELL_SIZE / 2,
      BASE_CELL_SIZE,
      BASE_CELL_SIZE
    ).setFillStyle(0x00f6ff, 0.5);

    // Enemy Core (P2)
    this.enemyCore = this.add.rectangle(
      CORE_POSITIONS.enemy.x * BASE_CELL_SIZE + BASE_CELL_SIZE / 2,
      CORE_POSITIONS.enemy.y * BASE_CELL_SIZE + BASE_CELL_SIZE / 2,
      BASE_CELL_SIZE,
      BASE_CELL_SIZE
    ).setFillStyle(0xff00ff, 0.5);

    // Add core labels
    const coreTextConfig = {
      fontSize: '24px',
      color: '#000000',
      fontFamily: 'Orbitron'
    };

    this.add.text(
      CORE_POSITIONS.player.x * BASE_CELL_SIZE + BASE_CELL_SIZE / 2,
      CORE_POSITIONS.player.y * BASE_CELL_SIZE + BASE_CELL_SIZE / 2,
      'P1',
      coreTextConfig
    ).setOrigin(0.5);

    this.add.text(
      CORE_POSITIONS.enemy.x * BASE_CELL_SIZE + BASE_CELL_SIZE / 2,
      CORE_POSITIONS.enemy.y * BASE_CELL_SIZE + BASE_CELL_SIZE / 2,
      'P2',
      coreTextConfig
    ).setOrigin(0.5);
  }

  private addGoldenGlowToCores() {
    // Add golden glow to both cores
    const addGlow = (core: Phaser.GameObjects.Rectangle) => {
      const glow = this.add.rectangle(
        core.x,
        core.y,
        BASE_CELL_SIZE + 10,
        BASE_CELL_SIZE + 10
      );
      glow.setStrokeStyle(4, 0xffd700, 0.8);
      this.tweens.add({
        targets: glow,
        scaleX: 1.1,
        scaleY: 1.1,
        alpha: 0.4,
        duration: 1500,
        yoyo: true,
        repeat: -1
      });
    };

    addGlow(this.playerCore);
    addGlow(this.enemyCore);
  }

  updateTurn(turn: 1 | 2, isGameStarted: boolean) {
    this.currentTurn = turn;
    this.isGameStarted = isGameStarted;
    this.updateCorePulsing();
  }

  private updateCorePulsing() {
    // Stop all existing tweens
    this.tweens.killTweensOf([this.playerCore, this.enemyCore]);
    
    if (!this.isGameStarted) {
      this.playerCore.setFillStyle(0x00f6ff, 0.5);
      this.enemyCore.setFillStyle(0xff00ff, 0.5);
      this.playerCore.setAlpha(1);
      this.enemyCore.setAlpha(1);
      return;
    }

    if (this.currentTurn === 1) {
      this.playerCore.setFillStyle(0x00f6ff, 0.8);
      this.enemyCore.setFillStyle(0xff00ff, 0.5);
      
      this.tweens.add({
        targets: [this.playerCore],
        alpha: 0.5,
        duration: 1000,
        yoyo: true,
        repeat: -1
      });
      
      this.enemyCore.setAlpha(1);
    } else {
      this.playerCore.setFillStyle(0x00f6ff, 0.5);
      this.enemyCore.setFillStyle(0xff00ff, 0.8);
      
      this.tweens.add({
        targets: [this.enemyCore],
        alpha: 0.5,
        duration: 1000,
        yoyo: true,
        repeat: -1
      });
      
      this.playerCore.setAlpha(1);
    }
  }

  update() {
    // Game loop updates will go here
  }
} 