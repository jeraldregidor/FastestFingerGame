import { createSlice } from "@reduxjs/toolkit";

const welcomeSlice = createSlice({
  name: "welcome",
  initialState: { isOpenWelcome: true },
  reducers: {
    openWelcome: (state) => {
      state.isOpenWelcome = true;
    },
    closeWelcome: (state) => {
      state.isOpenWelcome = false;
    },
  },
});

export const { openWelcome, closeWelcome } = welcomeSlice.actions;

export default welcomeSlice.reducer;
