import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  participants: [
    { rank: "1", name: "Dummy1", score: 100 },
    { rank: "2", name: "Dummy2", score: 90 },
    { rank: "3", name: "Dummy3", score: 80 },
    { rank: "4", name: "Dummy4", score: 70 },
    { rank: "5", name: "Dummy5", score: 60 },
    { rank: "6", name: "Dummy6", score: 50 },
    { rank: "7", name: "Dummy7", score: 40 },
    { rank: "8", name: "Dummy8", score: 30 },
    { rank: "9", name: "Dummy9", score: 20 },
    { rank: "10", name: "Dummy10", score: 10 },
  ],
};

const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpenModal = true;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
    },
  },
});

export const { openModal, closeModal } = participantsSlice.actions;

export default participantsSlice.reducer;
