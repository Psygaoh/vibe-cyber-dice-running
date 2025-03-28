import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from './Menu';
import { StartModal } from './StartModal';
import { GameBoard } from './GameBoard';
import { endTurn, startGame } from '../../store/gameState';
import { RootState } from '../../store/store';

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
    <div className="flex relative">
      <div className={`flex w-full ${!isGameStarted ? 'pointer-events-none' : ''}`}>
        <Menu 
          currentTurn={currentTurn} 
          onEndTurn={handleEndTurn}
          turnCount={turnCount}
        />
        <GameBoard currentTurn={currentTurn} />
      </div>
      <StartModal isOpen={!isGameStarted} onStart={handleGameStart} />
    </div>
  );
}

export default GameScreen; 