import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from './game-components/Menu';
import { StartModal } from './game-components/StartModal';
import { GameBoard } from './game-components/GameBoard';
import { endTurn, startGame } from '../store/gameState';
import { RootState } from '../store/store';

function GameScreen() {
  const dispatch = useDispatch();
  const { currentTurn, turnCount, isGameStarted } = useSelector((state: RootState) => state.gameState);

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

  return (
    <div className="w-full h-full relative">
      <div className={`flex w-full h-full p-6 gap-6 ${!isGameStarted ? 'pointer-events-none' : ''}`}>
        {/* Menu Panel - 1/4 width */}
        <div className="w-1/4 min-w-[300px] bg-black/40 backdrop-blur-sm rounded-2xl border border-cyan-400/20 shadow-lg shadow-cyan-400/10 p-4">
          <Menu 
            currentTurn={currentTurn} 
            onEndTurn={handleEndTurn}
            turnCount={turnCount}
          />
        </div>

        {/* Game Board Panel - 3/4 width */}
        <div className="flex-1 bg-black/40 backdrop-blur-sm rounded-2xl border border-cyan-400/20 shadow-lg shadow-cyan-400/10 p-4">
          <GameBoard currentTurn={currentTurn} />
        </div>
      </div>
      <StartModal isOpen={!isGameStarted} onStart={handleGameStart} />
    </div>
  );
}

export default GameScreen; 