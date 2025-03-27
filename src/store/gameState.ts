import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  currentTurn: 1 | 2;
  turnCount: number;
}

const initialState: GameState = {
  currentTurn: 1,
  turnCount: 1,
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
  },
});

export const { endTurn } = gameStateSlice.actions;
export default gameStateSlice.reducer; 