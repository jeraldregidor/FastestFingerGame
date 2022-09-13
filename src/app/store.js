import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import challengerReducer from "./challengerSlice";
import gameReducer from "./gameSlice";
import welcomeReducer from "./welcomeSlice";
import participantsReducer from "./participantsSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    modal: modalReducer,
    challenger: challengerReducer,
    game: gameReducer,
    welcome: welcomeReducer,
    participants: participantsReducer,
  },
});
