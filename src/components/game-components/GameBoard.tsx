import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Phaser from 'phaser';
import { GameScene } from '../../scenes/GameScene';
import { GAME_CONFIG } from '../../config/gameConfig';
import { RootState } from '../../store/store';
import { MutableRefObject } from 'react';

interface GameBoardProps {
  currentTurn: 1 | 2;
  gameRef: MutableRefObject<Phaser.Game | null>;
}

export function GameBoard({ currentTurn, gameRef }: GameBoardProps) {
  const isGameStarted = useSelector((state: RootState) => state.gameState.isGameStarted);

  useEffect(() => {
    if (!gameRef.current) {
      const config = {
        ...GAME_CONFIG,
        scene: [GameScene],
        scale: {
          ...GAME_CONFIG.scale,
          parent: 'game-container',
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
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
    <div className="flex-1 flex items-center justify-center">
      <div id="game-container" className="aspect-[7/11] h-full max-h-[calc(100vh-7rem)] flex items-center justify-center" />
    </div>
  );
} 