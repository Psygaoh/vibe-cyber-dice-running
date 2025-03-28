import { Types } from 'phaser';

export const GRID_WIDTH = 5;
export const GRID_HEIGHT = 7;
export const CELL_SIZE = 80; // pixels
export const GAME_WIDTH = GRID_WIDTH * CELL_SIZE;
export const GAME_HEIGHT = GRID_HEIGHT * CELL_SIZE;

export const CORE_POSITIONS = {
  player: { x: 2, y: 6 }, // Player (P1) at bottom
  enemy: { x: 2, y: 0 }, // Enemy (P2) at top
};

export const GAME_CONFIG: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: '#0a0a0a',
  parent: 'game-container',
  scene: [],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false,
    },
  },
}; 