import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Phaser from 'phaser';
import { GameScene } from '../../scenes/GameScene';
import { GAME_CONFIG } from '../../config/gameConfig';
import { RootState } from '../../store/store';

interface GameBoardProps {
  currentTurn: 1 | 2;
}

export function GameBoard({ currentTurn }: GameBoardProps) {
  const gameRef = useRef<Phaser.Game | null>(null);
  const isGameStarted = useSelector((state: RootState) => state.gameState.isGameStarted);

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

      // Get the scene and set initial turn
      const scene = gameRef.current.scene.getScene('GameScene') as GameScene;
      if (scene) {
        scene.updateTurn(1, false); // Initialize with game not started
      }
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (gameRef.current) {
      const scene = gameRef.current.scene.getScene('GameScene') as GameScene;
      if (scene) {
        scene.updateTurn(currentTurn, isGameStarted);
      }
    }
  }, [currentTurn, isGameStarted]);

  return (
    <div id="game-container" className="w-full h-full flex items-center justify-center">
      {/* Phaser game will be mounted here */}
    </div>
  );
} 