import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  participants: [
    { rank: 1, name: "Dummy1", score: 120 },
    { rank: 2, name: "Dummy2", score: 90 },
    { rank: 3, name: "Dummy3", score: 80 },
    { rank: 4, name: "Dummy4", score: 70 },
    { rank: 5, name: "Dummy5", score: 60 },
    { rank: 6, name: "Dummy6", score: 50 },
    { rank: 7, name: "Dummy7", score: 40 },
    { rank: 8, name: "Dummy8", score: 30 },
    { rank: 9, name: "Dummy9", score: 20 },
    { rank: 10, name: "Dummy10", score: 10 },
  ],
};

const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {
    adjustBeatenRank: (state, action) => {
      console.log(action.payload);
      state.participants.forEach((participant) => {
        if (participant.rank >= action.payload.rank) {
          participant.rank = participant.rank + 1;
        }
      });
      state.participants.splice(action.payload.rank-1, 0, action.payload);
    },
    cutRankto10: (state) => {
      state.participants.splice(10, 11);
    },
  },
});

export const { adjustBeatenRank, cutRankto10 } = participantsSlice.actions;

export default participantsSlice.reducer;
