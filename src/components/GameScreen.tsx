import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from './game-components/Menu';
import { StartModal } from './game-components/StartModal';
import { GameBoard } from './game-components/GameBoard';
import { endTurn, startGame } from '../store/gameState';
import { RootState } from '../store/store';
import { GameScene } from '../scenes/GameScene';

function GameScreen() {
  const dispatch = useDispatch();
  const { currentTurn, turnCount, isGameStarted } = useSelector((state: RootState) => state.gameState);
  const gameRef = useRef<Phaser.Game | null>(null);

  // Handle AI turn
  useEffect(() => {
    if (currentTurn === 2 && isGameStarted) {
      // Simulate AI thinking time
      const aiTimer = setTimeout(() => {
        dispatch(endTurn());
      }, 2000); // 2 second delay

      return () => clearTimeout(aiTimer);
    }
  }, [currentTurn, isGameStarted, dispatch]);

  const handleGameStart = () => {
    dispatch(startGame());
  };

  const handleEndTurn = () => {
    if (currentTurn === 1) { // Only allow human player to end turn manually
      dispatch(endTurn());
    }
  };

  const handleToggleMusic = (muted: boolean) => {
    if (gameRef.current) {
      const scene = gameRef.current.scene.getScene('GameScene') as GameScene;
      if (scene) {
        scene.toggleBackgroundMusic(muted);
      }
    }
  };

  const handleToggleSFX = (muted: boolean) => {
    if (gameRef.current) {
      const scene = gameRef.current.scene.getScene('GameScene') as GameScene;
      if (scene) {
        scene.toggleSFX(muted);
      }
    }
  };

  return (
    <div className="w-full h-full relative">
      <div className={`flex w-full h-full p-6 gap-6 ${!isGameStarted ? 'pointer-events-none' : ''}`}>
        {/* Menu Panel - 1/4 width */}
        <div className="w-1/4 min-w-[300px] bg-black/40 backdrop-blur-sm rounded-2xl border border-cyan-400/20 shadow-lg shadow-cyan-400/10 p-4">
          <Menu 
            currentTurn={currentTurn} 
            onEndTurn={handleEndTurn}
            turnCount={turnCount}
            onToggleMusic={handleToggleMusic}
            onToggleSFX={handleToggleSFX}
          />
        </div>

        {/* Game Board Panel - 3/4 width */}
        <div className="flex-1 bg-black/40 backdrop-blur-sm rounded-2xl border border-cyan-400/20 shadow-lg shadow-cyan-400/10 p-4">
          <GameBoard currentTurn={currentTurn} gameRef={gameRef} />
        </div>
      </div>
      <StartModal isOpen={!isGameStarted} onStart={handleGameStart} />
    </div>
  );
}

export default GameScreen; 