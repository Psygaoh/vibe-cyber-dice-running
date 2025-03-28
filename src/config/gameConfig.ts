import { Types } from 'phaser';

export const GRID_WIDTH = 7;   // Width is 7 cells
export const GRID_HEIGHT = 11; // Height is 11 cells
export const BASE_CELL_SIZE = 50; // Reduced from 80 to 50 for better scaling
export const GAME_WIDTH = GRID_WIDTH * BASE_CELL_SIZE;
export const GAME_HEIGHT = GRID_HEIGHT * BASE_CELL_SIZE;

export const CORE_POSITIONS = {
  player: { x: 3, y: 9 }, // Player (P1) near bottom, with one row behind
  enemy: { x: 3, y: 1 },  // Enemy (P2) near top, with one row behind
};

export const GAME_CONFIG: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: '#0a0a0a',
  parent: 'game-container',
  scene: [],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    min: {
      width: 350,
      height: 550
    },
    max: {
      width: 700,
      height: 1100
    }
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false,
    },
  },
}; 