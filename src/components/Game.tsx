import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { GameScene } from '../scenes/GameScene';
import { GAME_CONFIG } from '../config/gameConfig';

interface GameProps {
  currentTurn: 1 | 2;
}

export function Game({ currentTurn }: GameProps) {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!gameRef.current) {
      const config = {
        ...GAME_CONFIG,
        scene: [GameScene],
        scale: {
          ...GAME_CONFIG.scale,
          parent: 'game-container',
        }
      };
      gameRef.current = new Phaser.Game(config);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  // Update Phaser scene when turn changes
  useEffect(() => {
    if (gameRef.current) {
      const scene = gameRef.current.scene.getScene('GameScene') as GameScene;
      if (scene) {
        scene.updateTurn(currentTurn);
      }
    }
  }, [currentTurn]);

  return (
    <div id="game-container" className="w-full h-full flex items-center justify-center">
      {/* Phaser game will be mounted here */}
    </div>
  );
} 