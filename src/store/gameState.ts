import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  currentTurn: 1 | 2;
  turnCount: number;
  isGameStarted: boolean;
}

const initialState: GameState = {
  currentTurn: 1,
  turnCount: 1,
  isGameStarted: false,
};

const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    endTurn: (state) => {
      console.log(`Player ${state.currentTurn} ends turn`);
      state.currentTurn = state.currentTurn === 1 ? 2 : 1;
      if (state.currentTurn === 1) {
        state.turnCount += 1;
      }
    },
    startGame: (state) => {
      state.isGameStarted = true;
      state.currentTurn = 1;
      state.turnCount = 1;
    },
  },
});

export const { endTurn, startGame } = gameStateSlice.actions;
export default gameStateSlice.reducer; 