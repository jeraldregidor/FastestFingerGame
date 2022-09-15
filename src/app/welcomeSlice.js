import { createSlice } from "@reduxjs/toolkit";

const welcomeSlice = createSlice({
  name: "welcome",
  initialState: { isOpenWelcome: true, isSoundOn: false},
  reducers: {
    openWelcome: (state) => {
      state.isOpenWelcome = true;
    },
    closeWelcome: (state) => {
      state.isOpenWelcome = false;
    },
    soundsOn: (state) =>{
      state.isSoundOn = true;
    }
  },
});

export const { openWelcome, closeWelcome,soundsOn } = welcomeSlice.actions;

export default welcomeSlice.reducer;
