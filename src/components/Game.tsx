import { useEffect, useRef, useState } from 'react';
import Phaser from 'phaser';
import { GameScene } from '../scenes/GameScene';
import { GAME_CONFIG } from '../config/gameConfig';
import { Menu } from './game-components/Menu';
import { StartModal } from './game-components/StartModal';

interface GameProps {
  currentTurn: 1 | 2;
}

export function Game({ currentTurn }: GameProps) {
  const gameRef = useRef<Phaser.Game | null>(null);
  const [localTurn, setLocalTurn] = useState(currentTurn);
  const [isGameStarted, setIsGameStarted] = useState(false);

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

  useEffect(() => {
    if (gameRef.current) {
      const scene = gameRef.current.scene.getScene('GameScene') as GameScene;
      if (scene) {
        scene.updateTurn(localTurn);
      }
    }
  }, [localTurn]);

  const handleEndTurn = () => {
    setLocalTurn(current => current === 1 ? 2 : 1);
  };

  return (
    <div className="flex relative">
      <div className={`flex w-full ${!isGameStarted ? 'pointer-events-none opacity-50' : ''}`}>
        <Menu currentTurn={localTurn} onEndTurn={handleEndTurn} />
        <div id="game-container" className="flex-1 flex items-center justify-center">
          {/* Phaser game will be mounted here */}
        </div>
      </div>
      <StartModal isOpen={!isGameStarted} onStart={() => setIsGameStarted(true)} />
    </div>
  );
} 