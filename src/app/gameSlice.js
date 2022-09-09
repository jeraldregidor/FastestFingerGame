import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenGame: false,
  isTimerReady: true,
  isTimerGetSet: false,
  isTimerGo: false,
  isOngoing: false,
  isDone: false,
  isDisplayRank: false,
  timerValue: 30,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    openGame: (state) => {
      state.isOpenGame = true;
    },
    closeGame: (state) => {
      state.isOpenGame = false;
    },
    displayReady: (state) => {
      state.isTimerReady = true;
      state.isTimerGetSet = false;
      state.isTimerGo = false;
      state.isOngoing = false;
      state.isDone = false;
      state.isDisplayRank = false;
    },
    displayGetSet: (state) => {
      state.isTimerReady = false;
      state.isTimerGetSet = true;
      state.isTimerGo = false;
      state.isOngoing = false;
      state.isDone = false;
      state.isDisplayRank = false;
    },
    displayGo: (state) => {
      state.isTimerReady = false;
      state.isTimerGetSet = false;
      state.isTimerGo = true;
      state.isOngoing = false;
      state.isDone = false;
      state.isDisplayRank = false;
    },
    displayGaming: (state) => {
      state.isTimerReady = false;
      state.isTimerGetSet = false;
      state.isTimerGo = false;
      state.isOngoing = true;
      state.isDone = false;
      state.isDisplayRank = false;
    },
    displayFinish: (state) => {
      state.isTimerReady = false;
      state.isTimerGetSet = false;
      state.isTimerGo = false;
      state.isOngoing = false;
      state.isDone = true;
      state.isDisplayRank = false;
    },
    displayRank: (state) => {
      state.isTimerReady = false;
      state.isTimerGetSet = false;
      state.isTimerGo = false;
      state.isOngoing = false;
      state.isDone = false;
      state.isDisplayRank = true;
    },
    setTimer: (state, action) => {
      state.timerValue = action.payload;
    },
  },
});

export const {
  openGame,
  closeGame,
  displayReady,
  displayGetSet,
  displayGo,
  displayGaming,
  displayFinish,
  displayRank,
  setTimer,
} = gameSlice.actions;

export default gameSlice.reducer;
