import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  score: 0,
  rank: "No Ranking",
};

const challengerSlice = createSlice({
  name: "challenger",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    addScore: (state) => {
      state.score++;
    },
    setRank: (state,action) => {
      state.rank = action.payload;
    },
  },
});

export const { setName,addScore, setRank } = challengerSlice.actions;

export default challengerSlice.reducer;
